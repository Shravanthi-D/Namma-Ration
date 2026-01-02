const functions = require('@google-cloud/functions-framework');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

functions.http('pds-ivr-webhook', async (req, res) => {
    const tag = req.body.fulfillmentInfo.tag;
    const sessionParams = req.body.sessionInfo.parameters || {};
    
    let responseText = "I'm sorry, I couldn't process that request right now.";
    let jsonResponse = {};

    switch (tag) {
        // 1. LOGIC FOR CHECKING STOCK
        case 'check_stock':
            const item = sessionParams.commodity;
            const shopId = sessionParams.shop_id || '402';
            try {
                const doc = await db.collection('shops').doc(shopId).get();
                if (doc.exists) {
                    const stockValue = doc.data()[item.toLowerCase()];
                    responseText = `கடை எண் ${shopId} இல், ${stockValue} கிலோ ${item} கையிருப்பில் உள்ளது. இப்போது நீங்கள் முன்பதிவு செய்ய விரும்புகிறீர்களா? அல்லது வேறு ஏதாவது கேட்க வேண்டுமா?`;
                } else {
                    responseText = `கடை எண் ${shopId} கிடைக்கவில்லை.`;
                }
            } catch (error) {
                responseText = "தரவுத்தளத்தை அணுகுவதில் சிக்கல் உள்ளது.";
            }
            break;

        // 2. LOGIC FOR ADDING ITEMS TO A CART (LIST)
        case 'add_to_cart':
            let cart = sessionParams.cart || [];
            cart.push({
                item: sessionParams.commodity,
                qty: sessionParams.quantity
            });
            
            // CHANGE: We set responseText to empty so it doesn't say "I'm sorry"
            responseText = ""; 

            jsonResponse = {
                sessionInfo: {
                    parameters: {
                        cart: cart,
                        // IMPORTANT: Clear these so the next loop starts fresh
                        commodity: null, 
                        quantity: null
                    }
                },
                // We tell the webhook to send an empty message so Dialogflow's message takes over
                fulfillment_response: {
                    messages: [] 
                }
            };
            break;

        // 3. LOGIC FOR PLACING THE FINAL ORDER
        case 'place_order':
            try {
                const card = sessionParams.ration_card;
                const itemsOrdered = sessionParams.cart;
                const slotChoice = sessionParams.selected_slot;
                const slotTime = (slotChoice == 1) ? "காலை 10 - 1 மணி" : "மதியம் 2 - 5 மணி";

                const tokenId = "PDS-" + Math.floor(1000 + Math.random() * 9000);

                // Save to Firestore
                await db.collection('orders').doc(tokenId).set({
                    ration_card: card,
                    items: itemsOrdered,
                    slot: slotTime,
                    token: tokenId,
                    status: "Confirmed",
                    timestamp: admin.firestore.FieldValue.serverTimestamp()
                });

                // This is what the bot will say as soon as it lands on the page
                responseText = `நிச்சயமாக! உங்கள் முன்பதிவு வெற்றிகரமாக முடிந்தது. உங்கள் டோக்கன் எண்: ${tokenId}. தயவுசெய்து ${slotTime} மணிக்கு வரவும். நன்றி!`;
                
                res.json({
                    fulfillment_response: {
                        messages: [{ text: { text: [responseText] } }]
                    }
                });
            } catch (error) {
                console.error(error);
                res.json({
                    fulfillment_response: {
                        messages: [{ text: { text: ["மன்னிக்கவும், பிழை ஏற்பட்டது."] } }]
                    }
                });
            }
            break;

        default:
            responseText = "மன்னிக்கவும், என்னால் இதைப் புரிந்துகொள்ள முடியவில்லை.";
    }

    // Standard Response Format
    if (!jsonResponse.fulfillment_response) {
        jsonResponse.fulfillment_response = {
            messages: [{
                text: { text: [responseText] }
            }]
        };
    }

    res.status(200).send(jsonResponse);
});
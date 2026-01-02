import React, { useState } from 'react';
import { ArrowBack, Add, Remove, Grain, LocalDrink, OpacityOutlined } from '@mui/icons-material';

interface ItemPreOrderProps {
  onNavigate: (screen: string) => void;
}

export function ItemPreOrder({ onNavigate }: ItemPreOrderProps) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Rice',
      tamilName: 'அரிசி',
      icon: <Grain style={{ fontSize: '32px', color: '#006A4E' }} />,
      unit: 'kg',
      maxQty: 20,
      price: 3,
      quantity: 0
    },
    {
      id: 2,
      name: 'Sugar',
      tamilName: 'சர்க்கரை',
      icon: <LocalDrink style={{ fontSize: '32px', color: '#006A4E' }} />,
      unit: 'kg',
      maxQty: 2,
      price: 40,
      quantity: 0
    },
    {
      id: 3,
      name: 'Cooking Oil',
      tamilName: 'சமையல் எண்ணெய்',
      icon: <OpacityOutlined style={{ fontSize: '32px', color: '#006A4E' }} />,
      unit: 'L',
      maxQty: 2,
      price: 120,
      quantity: 0
    },
    {
      id: 4,
      name: 'Wheat',
      tamilName: 'கோதுமை',
      icon: <Grain style={{ fontSize: '32px', color: '#006A4E' }} />,
      unit: 'kg',
      maxQty: 5,
      price: 2,
      quantity: 0
    }
  ]);

  const handleIncrease = (id: number) => {
    setItems(items.map(item => {
      if (item.id === id && item.quantity < item.maxQty) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }));
  };

  const handleDecrease = (id: number) => {
    setItems(items.map(item => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };

  const totalWeight = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  const hasItems = items.some(item => item.quantity > 0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FA', paddingBottom: '180px' }}>
      {/* Header */}
      <div className="shadow-md" style={{ backgroundColor: '#006A4E', padding: '20px', borderRadius: '0 0 24px 24px' }}>
        <div className="flex items-center mb-2">
          <button
            onClick={() => onNavigate('home')}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              marginRight: '12px'
            }}
          >
            <ArrowBack style={{ fontSize: '28px', color: 'white' }} />
          </button>
          <div className="flex-1">
            <h1 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
              Pre-Order Items
            </h1>
            <p style={{ color: '#ffffff', fontSize: '20px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.95 }}>
              பொருட்களை முன்பதிவு செய்க
            </p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-5 mt-6">
        <div
          className="rounded-2xl"
          style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            padding: '16px'
          }}
        >
          <p style={{ fontSize: '15px', color: '#856404', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
            📋 Select items within your monthly quota
          </p>
          <p style={{ fontSize: '14px', color: '#856404', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            உங்கள் மாதாந்திர ஒதுக்கீட்டிற்குள் பொருட்களைத் தேர்ந்தெடுக்கவும்
          </p>
        </div>
      </div>

      {/* Items List */}
      <div className="px-5 mt-6">
        <h2 style={{ color: '#212529', fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
          Available Commodities
        </h2>
        <p style={{ color: '#212529', fontSize: '18px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '16px' }}>
          கிடைக்கக்கூடிய பொருட்கள்
        </p>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl shadow-md"
              style={{
                backgroundColor: 'white',
                padding: '20px',
                border: item.quantity > 0 ? '2px solid #006A4E' : '1px solid #e5e7eb'
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#212529', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '18px', fontWeight: '600', color: '#212529', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '8px' }}>
                      {item.tamilName}
                    </p>
                    <p style={{ fontSize: '14px', color: '#6c757d', fontFamily: 'Inter, sans-serif' }}>
                      Max: {item.maxQty} {item.unit} • ₹{item.price}/{item.unit}
                    </p>
                  </div>
                </div>
                {item.quantity > 0 && (
                  <div
                    className="rounded-xl px-3 py-1"
                    style={{
                      backgroundColor: '#006A4E15',
                      border: '1.5px solid #006A4E'
                    }}
                  >
                    <p style={{ fontSize: '14px', fontWeight: '700', color: '#006A4E', fontFamily: 'Inter, sans-serif' }}>
                      ₹{item.quantity * item.price}
                    </p>
                  </div>
                )}
              </div>

              {/* Stepper */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    disabled={item.quantity === 0}
                    className="rounded-xl transition-transform active:scale-95"
                    style={{
                      backgroundColor: item.quantity === 0 ? '#e5e7eb' : '#006A4E',
                      color: 'white',
                      width: '60px',
                      height: '60px',
                      border: 'none',
                      cursor: item.quantity === 0 ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Remove style={{ fontSize: '28px' }} />
                  </button>

                  <div
                    className="rounded-xl"
                    style={{
                      backgroundColor: '#F8F9FA',
                      padding: '12px 24px',
                      minWidth: '80px',
                      textAlign: 'center',
                      border: '2px solid #e5e7eb'
                    }}
                  >
                    <p style={{ fontSize: '28px', fontWeight: '700', color: '#212529', fontFamily: 'Inter, sans-serif' }}>
                      {item.quantity}
                    </p>
                    <p style={{ fontSize: '14px', color: '#6c757d', fontFamily: 'Inter, sans-serif' }}>
                      {item.unit}
                    </p>
                  </div>

                  <button
                    onClick={() => handleIncrease(item.id)}
                    disabled={item.quantity >= item.maxQty}
                    className="rounded-xl transition-transform active:scale-95"
                    style={{
                      backgroundColor: item.quantity >= item.maxQty ? '#e5e7eb' : '#FF9933',
                      color: 'white',
                      width: '60px',
                      height: '60px',
                      border: 'none',
                      cursor: item.quantity >= item.maxQty ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Add style={{ fontSize: '28px' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Summary */}
      <div
        className="fixed bottom-0 left-0 right-0 shadow-lg"
        style={{
          backgroundColor: 'white',
          borderTop: '2px solid #e5e7eb',
          maxWidth: '480px',
          margin: '0 auto'
        }}
      >
        <div style={{ padding: '20px' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p style={{ fontSize: '14px', color: '#6c757d', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
                Estimated Total
              </p>
              <p style={{ fontSize: '13px', color: '#6c757d', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                மதிப்பிடப்பட்ட மொத்தம்
              </p>
            </div>
            <div className="text-right">
              <p style={{ fontSize: '24px', fontWeight: '700', color: '#006A4E', fontFamily: 'Inter, sans-serif' }}>
                ₹{totalPrice}
              </p>
              <p style={{ fontSize: '14px', color: '#6c757d', fontFamily: 'Inter, sans-serif' }}>
                {totalWeight} items
              </p>
            </div>
          </div>

          <button
            onClick={() => hasItems && onNavigate('booking')}
            disabled={!hasItems}
            className="w-full rounded-2xl transition-transform active:scale-95"
            style={{
              backgroundColor: hasItems ? '#006A4E' : '#e5e7eb',
              color: 'white',
              minHeight: '64px',
              padding: '16px',
              border: 'none',
              cursor: hasItems ? 'pointer' : 'not-allowed'
            }}
          >
            <p style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
              Confirm Items
            </p>
            <p style={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              பொருட்களை உறுதிப்படுத்தவும்
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

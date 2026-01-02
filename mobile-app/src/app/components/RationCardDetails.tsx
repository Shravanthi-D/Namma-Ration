import React from 'react';
import { ArrowBack, Person, Store, CreditCard, People } from '@mui/icons-material';

interface RationCardDetailsProps {
  onNavigate: (screen: string) => void;
}

export function RationCardDetails({ onNavigate }: RationCardDetailsProps) {
  const quotaItems = [
    { item: 'Rice / அரிசி', quantity: '20 kg' },
    { item: 'Sugar / சர்க்கரை', quantity: '2 kg' },
    { item: 'Cooking Oil / சமையல் எண்ணெய்', quantity: '2 L' },
    { item: 'Wheat / கோதுமை', quantity: '5 kg' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FA', paddingBottom: '80px' }}>
      {/* Header */}
      <div className="shadow-md" style={{ backgroundColor: '#006A4E', padding: '20px', borderRadius: '0 0 24px 24px' }}>
        <div className="flex items-center mb-4">
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
              My Ration Card
            </h1>
            <p style={{ color: '#ffffff', fontSize: '20px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.95 }}>
              எனது ரேஷன் அட்டை
            </p>
          </div>
        </div>
      </div>

      {/* Card Preview */}
      <div className="px-5 mt-6">
        <div
          className="rounded-2xl shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #006A4E 0%, #004d38 100%)',
            padding: '24px',
            color: 'white'
          }}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <p style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', opacity: 0.9, marginBottom: '4px' }}>
                Card Number / அட்டை எண்
              </p>
              <h2 style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'Inter, sans-serif', letterSpacing: '1px' }}>
                01/G/0123456
              </h2>
            </div>
            <CreditCard style={{ fontSize: '40px', opacity: 0.8 }} />
          </div>
          
          <div
            className="rounded-xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              padding: '16px',
              marginTop: '12px'
            }}
          >
            <p style={{ fontSize: '12px', fontFamily: 'Inter, sans-serif', opacity: 0.85, marginBottom: '6px' }}>
              Card Type / அட்டை வகை
            </p>
            <p style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
              Priority Household (PHH)
            </p>
            <p style={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.95 }}>
              முன்னுரிமை குடும்ப அட்டை
            </p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="px-5 mt-6">
        {/* Head of Family */}
        <div
          className="rounded-2xl shadow-md mb-4"
          style={{
            backgroundColor: 'white',
            padding: '20px'
          }}
        >
          <div className="flex items-center mb-3">
            <Person style={{ fontSize: '28px', color: '#006A4E', marginRight: '12px' }} />
            <div>
              <p style={{ fontSize: '14px', color: '#6c757d', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>
                Head of Family
              </p>
              <p style={{ fontSize: '13px', color: '#6c757d', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                குடும்பத் தலைவர்
              </p>
            </div>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#212529', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
            Smt. Lakshmi Sundaram
          </h3>
          <p style={{ fontSize: '18px', fontWeight: '500', color: '#212529', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            திருமதி. லக்ஷ்மி சுந்தரம்
          </p>
        </div>

        {/* Registered Shop */}
        <div
          className="rounded-2xl shadow-md mb-4"
          style={{
            backgroundColor: 'white',
            padding: '20px'
          }}
        >
          <div className="flex items-center mb-3">
            <Store style={{ fontSize: '28px', color: '#006A4E', marginRight: '12px' }} />
            <div>
              <p style={{ fontSize: '14px', color: '#6c757d', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>
                Registered Shop
              </p>
              <p style={{ fontSize: '13px', color: '#6c757d', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                பதிவு செய்யப்பட்ட கடை
              </p>
            </div>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#212529', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
            Shop #402, Anna Nagar
          </h3>
          <p style={{ fontSize: '16px', color: '#6c757d', fontFamily: 'Inter, sans-serif' }}>
            Anna Nagar West Extension, Chennai - 600101
          </p>
        </div>

        {/* Monthly Quota */}
        <div
          className="rounded-2xl shadow-md mb-4"
          style={{
            backgroundColor: 'white',
            padding: '20px'
          }}
        >
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#212529', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
            Monthly Quota Entitlement
          </h3>
          <p style={{ fontSize: '18px', fontWeight: '600', color: '#212529', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '16px' }}>
            மாதாந்திர ஒதுக்கீடு உரிமை
          </p>

          <div className="space-y-3">
            {quotaItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl"
                style={{
                  backgroundColor: '#F8F9FA',
                  padding: '16px',
                  border: '1px solid #e5e7eb'
                }}
              >
                <p style={{ fontSize: '16px', fontWeight: '500', color: '#212529', fontFamily: 'Inter, Noto Sans Tamil, sans-serif' }}>
                  {item.item}
                </p>
                <p style={{ fontSize: '18px', fontWeight: '700', color: '#006A4E', fontFamily: 'Inter, sans-serif' }}>
                  {item.quantity}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* View Family Members Button */}
        <button
          className="w-full rounded-2xl shadow-md transition-transform active:scale-95 flex items-center justify-center"
          style={{
            backgroundColor: '#FF9933',
            color: 'white',
            minHeight: '64px',
            padding: '16px 20px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <People style={{ fontSize: '28px', marginRight: '12px' }} />
          <div>
            <p style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
              View Family Members
            </p>
            <p style={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              குடும்ப உறுப்பினர்களைக் காண்க
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

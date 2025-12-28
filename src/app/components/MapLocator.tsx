import React from 'react';
import { ArrowBack, MyLocation, Store, DirectionsWalk, Phone } from '@mui/icons-material';

interface MapLocatorProps {
  onNavigate: (screen: string) => void;
}

export function MapLocator({ onNavigate }: MapLocatorProps) {
  const shops = [
    {
      name: 'Shop #402, Anna Nagar',
      address: 'Anna Nagar West Extension, Chennai - 600101',
      distance: '0.2 km',
      status: 'open',
      phone: '+91 98765 43210'
    },
    {
      name: 'Shop #405, Aminjikarai',
      address: 'Aminjikarai Main Road, Chennai - 600029',
      distance: '1.2 km',
      status: 'open',
      phone: '+91 98765 43211'
    },
    {
      name: 'Shop #410, Kilpauk',
      address: 'Kilpauk Garden Road, Chennai - 600010',
      distance: '2.5 km',
      status: 'open',
      phone: '+91 98765 43212'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FA', paddingBottom: '80px' }}>
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
              Find Nearby Shops
            </h1>
            <p style={{ color: '#ffffff', fontSize: '20px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.95 }}>
              அருகிலுள்ள கடைகளைக் கண்டறியவும்
            </p>
          </div>
        </div>
      </div>

      {/* Map View */}
      <div className="px-5 mt-6">
        <div
          className="rounded-2xl shadow-lg overflow-hidden"
          style={{
            backgroundColor: '#e5e7eb',
            height: '280px',
            position: 'relative'
          }}
        >
          {/* Map placeholder with pattern */}
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, #bfdbfe 0%, #dbeafe 50%, #e0f2fe 100%)',
              position: 'relative'
            }}
          >
            {/* Grid pattern to simulate map */}
            <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.2 }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#006A4E" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Location pins */}
            <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div style={{ position: 'relative' }}>
                <MyLocation style={{ fontSize: '40px', color: '#FF9933' }} />
                <div
                  className="rounded-full"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#FF9933',
                    opacity: 0.2,
                    animation: 'pulse 2s infinite'
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#212529',
                  fontFamily: 'Inter, sans-serif',
                  textAlign: 'center',
                  marginTop: '4px',
                  backgroundColor: 'white',
                  padding: '4px 8px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                You are here
              </p>
            </div>

            {/* Shop pins */}
            <div style={{ position: 'absolute', top: '30%', left: '40%' }}>
              <Store style={{ fontSize: '32px', color: '#006A4E' }} />
            </div>
            <div style={{ position: 'absolute', top: '60%', left: '65%' }}>
              <Store style={{ fontSize: '32px', color: '#006A4E' }} />
            </div>
            <div style={{ position: 'absolute', top: '25%', left: '70%' }}>
              <Store style={{ fontSize: '32px', color: '#006A4E' }} />
            </div>
          </div>

          {/* My Location Button */}
          <button
            className="rounded-full shadow-lg"
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              backgroundColor: 'white',
              border: 'none',
              cursor: 'pointer',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <MyLocation style={{ fontSize: '28px', color: '#006A4E' }} />
          </button>
        </div>
      </div>

      {/* Shops List */}
      <div className="px-5 mt-6">
        <h2 style={{ color: '#212529', fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
          Nearby Fair Price Shops
        </h2>
        <p style={{ color: '#212529', fontSize: '18px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '16px' }}>
          அருகிலுள்ள நியாய விலைக் கடைகள்
        </p>

        <div className="space-y-3">
          {shops.map((shop, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md"
              style={{
                backgroundColor: 'white',
                padding: '20px',
                border: index === 0 ? '2px solid #006A4E' : '1px solid #e5e7eb'
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Store style={{ fontSize: '24px', color: '#006A4E', marginRight: '8px' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#212529', fontFamily: 'Inter, sans-serif' }}>
                      {shop.name}
                    </h3>
                  </div>
                  <p style={{ fontSize: '15px', color: '#6c757d', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>
                    {shop.address}
                  </p>
                  <div className="flex items-center">
                    <DirectionsWalk style={{ fontSize: '18px', color: '#6c757d', marginRight: '6px' }} />
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#006A4E', fontFamily: 'Inter, sans-serif' }}>
                      {shop.distance} away
                    </p>
                  </div>
                </div>
                {index === 0 && (
                  <div
                    className="rounded-full px-3 py-1"
                    style={{
                      backgroundColor: '#006A4E15',
                      border: '1.5px solid #006A4E',
                      marginLeft: '12px'
                    }}
                  >
                    <p style={{ fontSize: '12px', fontWeight: '600', color: '#006A4E', fontFamily: 'Inter, sans-serif' }}>
                      Registered
                    </p>
                  </div>
                )}
              </div>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => onNavigate('home')}
                  className="flex-1 rounded-xl transition-transform active:scale-95"
                  style={{
                    backgroundColor: '#006A4E',
                    color: 'white',
                    minHeight: '48px',
                    padding: '12px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <p style={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                    Check Stock
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    இருப்பைச் சரிபார்க்கவும்
                  </p>
                </button>
                <button
                  className="rounded-xl transition-transform active:scale-95"
                  style={{
                    backgroundColor: '#FF9933',
                    color: 'white',
                    minHeight: '48px',
                    width: '56px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Phone style={{ fontSize: '24px' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}

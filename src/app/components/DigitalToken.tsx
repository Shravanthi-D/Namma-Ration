import React from 'react';
import { CheckCircle, Download, Schedule, Store, QrCode2 } from '@mui/icons-material';

interface DigitalTokenProps {
  onNavigate: (screen: string) => void;
}

export function DigitalToken({ onNavigate }: DigitalTokenProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FA', paddingBottom: '80px' }}>
      {/* Success Header */}
      <div className="shadow-md" style={{ backgroundColor: '#22c55e', padding: '32px 20px', borderRadius: '0 0 24px 24px' }}>
        <div className="flex flex-col items-center">
          <CheckCircle style={{ fontSize: '72px', color: 'white', marginBottom: '16px' }} />
          <h1 style={{ color: '#ffffff', fontSize: '28px', fontWeight: '700', fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>
            Booking Confirmed!
          </h1>
          <p style={{ color: '#ffffff', fontSize: '22px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', textAlign: 'center', opacity: 0.95, marginTop: '8px' }}>
            முன்பதிவு உறுதி செய்யப்பட்டது!
          </p>
        </div>
      </div>

      {/* Token Number */}
      <div className="px-5 mt-6">
        <div
          className="rounded-2xl shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #006A4E 0%, #004d38 100%)',
            padding: '32px 24px',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '16px', color: 'white', fontFamily: 'Inter, sans-serif', marginBottom: '8px', opacity: 0.9 }}>
            Your Token Number
          </p>
          <p style={{ fontSize: '14px', color: 'white', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '12px', opacity: 0.85 }}>
            உங்கள் டோக்கன் எண்
          </p>
          <h2 style={{ fontSize: '64px', fontWeight: '700', color: '#ffffff', fontFamily: 'Inter, sans-serif', letterSpacing: '2px', margin: '16px 0' }}>
            A-142
          </h2>
          <div
            className="rounded-xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              padding: '16px',
              marginTop: '20px'
            }}
          >
            <div className="flex items-center justify-center mb-2">
              <Schedule style={{ fontSize: '24px', color: 'white', marginRight: '8px' }} />
              <p style={{ fontSize: '14px', color: 'white', fontFamily: 'Inter, sans-serif', opacity: 0.9 }}>
                Time Slot / நேர இடைவெளி
              </p>
            </div>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
              10:00 AM - 11:00 AM
            </p>
            <p style={{ fontSize: '16px', color: 'white', fontFamily: 'Inter, sans-serif', marginTop: '4px', opacity: 0.9 }}>
              Today, Dec 23, 2025
            </p>
          </div>
        </div>
      </div>

      {/* QR Code */}
      <div className="px-5 mt-6">
        <div
          className="rounded-2xl shadow-md"
          style={{
            backgroundColor: 'white',
            padding: '24px',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '18px', fontWeight: '700', color: '#212529', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
            Digital Token
          </p>
          <p style={{ fontSize: '16px', fontWeight: '600', color: '#212529', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '16px' }}>
            டிஜிட்டல் டோக்கன்
          </p>

          {/* QR Code Placeholder */}
          <div
            className="rounded-2xl mx-auto"
            style={{
              width: '280px',
              height: '280px',
              backgroundColor: '#F8F9FA',
              border: '4px solid #006A4E',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {/* QR Code Pattern */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(8, 1fr)',
                gridTemplateRows: 'repeat(8, 1fr)',
                gap: '4px',
                width: '100%',
                height: '100%'
              }}>
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: Math.random() > 0.5 ? '#212529' : 'transparent',
                      borderRadius: '2px'
                    }}
                  />
                ))}
              </div>
              {/* Center Icon */}
              <div
                className="rounded-full"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#006A4E',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '4px solid white'
                }}
              >
                <QrCode2 style={{ fontSize: '32px', color: 'white' }} />
              </div>
            </div>
          </div>

          <div
            className="rounded-xl mt-6"
            style={{
              backgroundColor: '#fff3cd',
              border: '1px solid #ffc107',
              padding: '16px'
            }}
          >
            <p style={{ fontSize: '16px', fontWeight: '600', color: '#856404', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
              ⚠️ Show this at the counter
            </p>
            <p style={{ fontSize: '14px', fontWeight: '500', color: '#856404', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              இதை கவுண்டரில் காட்டவும்
            </p>
          </div>
        </div>
      </div>

      {/* Shop Details */}
      <div className="px-5 mt-4">
        <div
          className="rounded-2xl shadow-md"
          style={{
            backgroundColor: 'white',
            padding: '20px'
          }}
        >
          <div className="flex items-center mb-3">
            <Store style={{ fontSize: '28px', color: '#006A4E', marginRight: '12px' }} />
            <div>
              <p style={{ fontSize: '14px', color: '#6c757d', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>
                Shop Location
              </p>
              <p style={{ fontSize: '13px', color: '#6c757d', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                கடை இருப்பிடம்
              </p>
            </div>
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#212529', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
            Shop #402, Anna Nagar
          </h3>
          <p style={{ fontSize: '15px', color: '#6c757d', fontFamily: 'Inter, sans-serif' }}>
            Anna Nagar West Extension, Chennai - 600101
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-5 mt-6">
        <button
          className="w-full rounded-2xl shadow-md transition-transform active:scale-95 flex items-center justify-center mb-3"
          style={{
            backgroundColor: '#006A4E',
            color: 'white',
            minHeight: '64px',
            padding: '16px 20px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <Download style={{ fontSize: '28px', marginRight: '12px' }} />
          <div className="text-left">
            <p style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
              Save to Gallery
            </p>
            <p style={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              கேலரியில் சேமிக்கவும்
            </p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('home')}
          className="w-full rounded-2xl shadow-md transition-transform active:scale-95"
          style={{
            backgroundColor: 'white',
            color: '#006A4E',
            minHeight: '64px',
            padding: '16px 20px',
            border: '2px solid #006A4E',
            cursor: 'pointer'
          }}
        >
          <p style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
            Back to Home
          </p>
          <p style={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            முகப்புக்குத் திரும்பு
          </p>
        </button>
      </div>
    </div>
  );
}

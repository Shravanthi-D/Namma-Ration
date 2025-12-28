import React from 'react';
import { Grain, LocalDrink, OpacityOutlined, ShoppingBasket, AccessTime, Store } from '@mui/icons-material';

interface HomeDashboardProps {
  onNavigate: (screen: string) => void;
}

export function HomeDashboard({ onNavigate }: HomeDashboardProps) {
  const inventoryItems = [
    {
      name: 'Rice',
      tamilName: 'அரிசி',
      icon: <Grain style={{ fontSize: '48px', color: '#006A4E' }} />,
      status: 'available',
      quantity: '250 kg',
      statusText: 'In Stock',
      statusTamil: 'கையிருப்பில் உள்ளது'
    },
    {
      name: 'Sugar',
      tamilName: 'சர்க்கரை',
      icon: <LocalDrink style={{ fontSize: '48px', color: '#006A4E' }} />,
      status: 'limited',
      quantity: '45 kg',
      statusText: 'Limited',
      statusTamil: 'குறைந்த அளவு'
    },
    {
      name: 'Cooking Oil',
      tamilName: 'சமையல் எண்ணெய்',
      icon: <OpacityOutlined style={{ fontSize: '48px', color: '#006A4E' }} />,
      status: 'available',
      quantity: '80 L',
      statusText: 'In Stock',
      statusTamil: 'கையிருப்பில் உள்ளது'
    },
    {
      name: 'Wheat',
      tamilName: 'கோதுமை',
      icon: <Grain style={{ fontSize: '48px', color: '#006A4E' }} />,
      status: 'out',
      quantity: '0 kg',
      statusText: 'Out of Stock',
      statusTamil: 'கையிருப்பு இல்லை'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return '#22c55e';
      case 'limited':
        return '#eab308';
      case 'out':
        return '#ef4444';
      default:
        return '#6c757d';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FA', paddingBottom: '80px' }}>
      {/* Header */}
      <div className="shadow-md" style={{ backgroundColor: '#006A4E', padding: '20px 20px 24px', borderRadius: '0 0 24px 24px' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p style={{ color: '#ffffff', fontSize: '14px', fontFamily: 'Inter, sans-serif', opacity: 0.9 }}>
              Your Shop / உங்கள் கடை
            </p>
            <h1 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>
              Shop #402, Anna Nagar
            </h1>
          </div>
          <Store style={{ fontSize: '40px', color: 'white' }} />
        </div>
        
        {/* Queue Status */}
        <div className="rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', padding: '16px', marginTop: '16px' }}>
          <div className="flex items-center">
            <AccessTime style={{ fontSize: '28px', color: '#ffffff', marginRight: '12px' }} />
            <div className="flex-1">
              <p style={{ color: '#ffffff', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}>
                Current Queue Status
              </p>
              <p style={{ color: '#ffffff', fontSize: '13px', fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.9 }}>
                தற்போதைய வரிசை நிலை
              </p>
            </div>
            <div className="text-right">
              <p style={{ color: '#22c55e', fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
                Low Wait
              </p>
              <p style={{ color: '#ffffff', fontSize: '13px', fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.9 }}>
                குறைந்த காத்திருப்பு
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Cards */}
      <div className="px-5 mt-6">
        <h2 style={{ color: '#212529', fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
          Inventory Status
        </h2>
        <p style={{ color: '#212529', fontSize: '18px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '16px' }}>
          சரக்கு நிலை
        </p>

        <div className="grid grid-cols-2 gap-4">
          {inventoryItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md"
              style={{
                backgroundColor: 'white',
                padding: '20px',
                border: `2px solid ${getStatusColor(item.status)}20`
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">
                  {item.icon}
                </div>
                <h3 style={{ color: '#212529', fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>
                  {item.name}
                </h3>
                <p style={{ color: '#212529', fontSize: '16px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '8px' }}>
                  {item.tamilName}
                </p>
                <p style={{ color: '#6c757d', fontSize: '16px', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>
                  {item.quantity}
                </p>
                <div
                  className="rounded-full px-3 py-1"
                  style={{
                    backgroundColor: `${getStatusColor(item.status)}15`,
                    border: `1.5px solid ${getStatusColor(item.status)}`
                  }}
                >
                  <p style={{ color: getStatusColor(item.status), fontSize: '14px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                    {item.statusText}
                  </p>
                  <p style={{ color: getStatusColor(item.status), fontSize: '12px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    {item.statusTamil}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 mt-8">
        <h2 style={{ color: '#212529', fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
          Quick Actions
        </h2>
        <p style={{ color: '#212529', fontSize: '18px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '16px' }}>
          விரைவு செயல்கள்
        </p>

        <div className="space-y-3">
          <button
            onClick={() => onNavigate('preorder')}
            className="w-full rounded-2xl shadow-md transition-transform active:scale-95 flex items-center"
            style={{
              backgroundColor: '#006A4E',
              color: 'white',
              minHeight: '68px',
              padding: '16px 20px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ShoppingBasket style={{ fontSize: '32px', marginRight: '16px' }} />
            <div className="text-left flex-1">
              <p style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                Pre-Order Items
              </p>
              <p style={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                பொருட்களை முன்பதிவு செய்க
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('booking')}
            className="w-full rounded-2xl shadow-md transition-transform active:scale-95 flex items-center"
            style={{
              backgroundColor: '#FF9933',
              color: 'white',
              minHeight: '68px',
              padding: '16px 20px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <AccessTime style={{ fontSize: '32px', marginRight: '16px' }} />
            <div className="text-left flex-1">
              <p style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                Book Time Slot
              </p>
              <p style={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                நேர இடைவெளியை முன்பதிவு செய்யுங்கள்
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div 
        className="fixed bottom-0 left-0 right-0 shadow-lg"
        style={{
          backgroundColor: 'white',
          borderTop: '1px solid #e5e7eb',
          maxWidth: '480px',
          margin: '0 auto'
        }}
      >
        <div className="flex justify-around" style={{ padding: '12px 0' }}>
          <button
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center"
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              minWidth: '60px',
              minHeight: '60px',
              padding: '8px'
            }}
          >
            <Store style={{ fontSize: '28px', color: '#006A4E' }} />
            <span style={{ fontSize: '12px', color: '#006A4E', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>Home</span>
          </button>
          <button
            onClick={() => onNavigate('card')}
            className="flex flex-col items-center"
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              minWidth: '60px',
              minHeight: '60px',
              padding: '8px'
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="6" width="18" height="14" rx="2" stroke="#6c757d" strokeWidth="2"/>
              <path d="M7 10H17M7 14H13" stroke="#6c757d" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: '12px', color: '#6c757d', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>Card</span>
          </button>
          <button
            onClick={() => onNavigate('map')}
            className="flex flex-col items-center"
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              minWidth: '60px',
              minHeight: '60px',
              padding: '8px'
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#6c757d"/>
            </svg>
            <span style={{ fontSize: '12px', color: '#6c757d', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>Map</span>
          </button>
          <button
            onClick={() => onNavigate('help')}
            className="flex flex-col items-center"
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              minWidth: '60px',
              minHeight: '60px',
              padding: '8px'
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#6c757d" strokeWidth="2"/>
              <path d="M12 16v.01M12 8v5" stroke="#6c757d" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: '12px', color: '#6c757d', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>Help</span>
          </button>
        </div>
      </div>
    </div>
  );
}

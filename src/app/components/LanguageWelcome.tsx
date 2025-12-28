import React from 'react';

interface LanguageWelcomeProps {
  onSelectLanguage: (lang: 'en' | 'ta') => void;
}

export function LanguageWelcome({ onSelectLanguage }: LanguageWelcomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#F8F9FA' }}>
      {/* Tamil Nadu Emblem Placeholder */}
      <div className="mb-12 flex flex-col items-center">
        <div 
          className="w-32 h-32 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: '#006A4E' }}
        >
          <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center">
            <span className="text-white" style={{ fontSize: '48px' }}>🏛️</span>
          </div>
        </div>
        <h1 className="text-center mb-2" style={{ color: '#006A4E', fontSize: '28px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
          Namma Ration
        </h1>
        <p className="text-center" style={{ color: '#212529', fontSize: '20px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
          நம்ம ரேஷன்
        </p>
        <p className="text-center mt-4" style={{ color: '#212529', fontSize: '16px', fontFamily: 'Inter, sans-serif' }}>
          Public Distribution System
        </p>
        <p className="text-center" style={{ color: '#212529', fontSize: '16px', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
          பொது விநியோக அமைப்பு
        </p>
      </div>

      {/* Language Selection Buttons */}
      <div className="w-full max-w-md space-y-4">
        <button
          onClick={() => onSelectLanguage('en')}
          className="w-full rounded-2xl shadow-lg transition-transform active:scale-95"
          style={{
            backgroundColor: '#006A4E',
            color: 'white',
            minHeight: '68px',
            padding: '16px 24px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <div style={{ fontSize: '20px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
            English
          </div>
          <div style={{ fontSize: '18px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif', marginTop: '4px' }}>
            ஆங்கிலம்
          </div>
        </button>

        <button
          onClick={() => onSelectLanguage('ta')}
          className="w-full rounded-2xl shadow-lg transition-transform active:scale-95"
          style={{
            backgroundColor: '#FF9933',
            color: 'white',
            minHeight: '68px',
            padding: '16px 24px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <div style={{ fontSize: '20px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            தமிழ்
          </div>
          <div style={{ fontSize: '18px', fontWeight: '500', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>
            Tamil
          </div>
        </button>
      </div>

      <p className="mt-8 text-center" style={{ color: '#6c757d', fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>
        Select your preferred language
      </p>
      <p className="text-center" style={{ color: '#6c757d', fontSize: '14px', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
        உங்கள் விருப்ப மொழியைத் தேர்ந்தெடுக்கவும்
      </p>
    </div>
  );
}

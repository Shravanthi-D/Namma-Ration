import React, { useState } from 'react';
import { Phone, VolumeUp, Help, Report, Info, Schedule, Store, ArrowBack } from '@mui/icons-material';

interface HelpSupportProps {
  onNavigate: (screen: string) => void;
}

export function HelpSupport({ onNavigate }: HelpSupportProps) {
  const [voiceAssistant, setVoiceAssistant] = useState(false);

  const faqs = [
    {
      icon: <Schedule style={{ fontSize: '28px', color: '#006A4E' }} />,
      question: 'How to Book a Slot?',
      tamilQuestion: 'இடைவெளியை எவ்வாறு முன்பதிவு செய்வது?',
      answer: 'Go to Pre-Order Items → Select quantities → Book Time Slot'
    },
    {
      icon: <Store style={{ fontSize: '28px', color: '#006A4E' }} />,
      question: 'Check Stock Availability',
      tamilQuestion: 'இருப்பு நிலையைச் சரிபார்க்கவும்',
      answer: 'View real-time inventory on the Home Dashboard'
    },
    {
      icon: <Report style={{ fontSize: '28px', color: '#006A4E' }} />,
      question: 'Report an Issue',
      tamilQuestion: 'சிக்கலைப் புகாரளிக்கவும்',
      answer: 'Call 1967 helpline or use the complaint form'
    },
    {
      icon: <Info style={{ fontSize: '28px', color: '#006A4E' }} />,
      question: 'About Ration Card',
      tamilQuestion: 'ரேஷன் அட்டையைப் பற்றி',
      answer: 'View card details, quota, and family members in My Card section'
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
              Help & Support
            </h1>
            <p style={{ color: '#ffffff', fontSize: '20px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.95 }}>
              உதவி & ஆதரவு
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Helpline */}
      <div className="px-5 mt-6">
        <div
          className="rounded-2xl shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #FF9933 0%, #e68a2e 100%)',
            padding: '28px 24px'
          }}
        >
          <div className="flex items-center mb-4">
            <Phone style={{ fontSize: '36px', color: 'white', marginRight: '12px' }} />
            <div>
              <p style={{ fontSize: '14px', color: 'white', fontFamily: 'Inter, sans-serif', marginBottom: '4px', opacity: 0.9 }}>
                24/7 Helpline
              </p>
              <p style={{ fontSize: '13px', color: 'white', fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.85 }}>
                24/7 உதவி எண்
              </p>
            </div>
          </div>
          <h2 style={{ fontSize: '48px', fontWeight: '700', color: 'white', fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
            1967
          </h2>
          <button
            className="w-full rounded-2xl transition-transform active:scale-95 flex items-center justify-center"
            style={{
              backgroundColor: 'white',
              color: '#FF9933',
              minHeight: '64px',
              padding: '16px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Phone style={{ fontSize: '28px', marginRight: '12px' }} />
            <div>
              <p style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                One-Tap Call
              </p>
              <p style={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                ஒரு தட்டு அழைப்பு
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Voice Assistant */}
      <div className="px-5 mt-6">
        <div
          className="rounded-2xl shadow-md"
          style={{
            backgroundColor: 'white',
            padding: '20px'
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <VolumeUp style={{ fontSize: '28px', color: '#006A4E', marginRight: '12px' }} />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#212529', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
                  Voice Assistant Help
                </h3>
                <p style={{ fontSize: '16px', fontWeight: '600', color: '#212529', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  குரல் உதவியாளர் உதவி
                </p>
                <p style={{ fontSize: '14px', color: '#6c757d', fontFamily: 'Inter, sans-serif', marginTop: '8px' }}>
                  Get audio guidance in Tamil
                </p>
                <p style={{ fontSize: '13px', color: '#6c757d', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  தமிழில் ஆடியோ வழிகாட்டுதலைப் பெறுங்கள்
                </p>
              </div>
            </div>
            <button
              onClick={() => setVoiceAssistant(!voiceAssistant)}
              className="rounded-full transition-all"
              style={{
                width: '68px',
                height: '40px',
                backgroundColor: voiceAssistant ? '#22c55e' : '#e5e7eb',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                padding: '4px'
              }}
            >
              <div
                className="rounded-full"
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'white',
                  transition: 'transform 0.2s',
                  transform: voiceAssistant ? 'translateX(28px)' : 'translateX(0)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              />
            </button>
          </div>
          {voiceAssistant && (
            <div
              className="rounded-xl mt-4"
              style={{
                backgroundColor: '#22c55e15',
                border: '1.5px solid #22c55e',
                padding: '12px'
              }}
            >
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#16a34a', fontFamily: 'Inter, sans-serif' }}>
                ✓ Voice Assistant Enabled
              </p>
              <p style={{ fontSize: '13px', fontWeight: '500', color: '#16a34a', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                குரல் உதவியாளர் இயக்கப்பட்டது
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-5 mt-6">
        <div className="flex items-center mb-4">
          <Help style={{ fontSize: '28px', color: '#006A4E', marginRight: '8px' }} />
          <h2 style={{ color: '#212529', fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
            Frequently Asked Questions
          </h2>
        </div>
        <p style={{ color: '#212529', fontSize: '18px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '16px' }}>
          அடிக்கடி கேட்கப்படும் கேள்விகள்
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md"
              style={{
                backgroundColor: 'white',
                padding: '20px',
                border: '1px solid #e5e7eb'
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 mt-1">
                  {faq.icon}
                </div>
                <div className="flex-1">
                  <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#212529', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#212529', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '8px' }}>
                    {faq.tamilQuestion}
                  </p>
                  <p style={{ fontSize: '15px', color: '#6c757d', fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="px-5 mt-6">
        <h2 style={{ color: '#212529', fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
          Additional Resources
        </h2>
        <p style={{ color: '#212529', fontSize: '18px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '16px' }}>
          கூடுதல் வளங்கள்
        </p>

        <div className="space-y-3">
          <button
            className="w-full rounded-2xl shadow-md transition-transform active:scale-95 text-left"
            style={{
              backgroundColor: 'white',
              color: '#212529',
              minHeight: '68px',
              padding: '16px 20px',
              border: '2px solid #e5e7eb',
              cursor: 'pointer'
            }}
          >
            <div className="flex items-center">
              <Info style={{ fontSize: '28px', color: '#006A4E', marginRight: '16px' }} />
              <div className="flex-1">
                <p style={{ fontSize: '17px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                  User Guide & Tutorials
                </p>
                <p style={{ fontSize: '15px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  பயனர் வழிகாட்டி & பயிற்சிகள்
                </p>
              </div>
            </div>
          </button>

          <button
            className="w-full rounded-2xl shadow-md transition-transform active:scale-95 text-left"
            style={{
              backgroundColor: 'white',
              color: '#212529',
              minHeight: '68px',
              padding: '16px 20px',
              border: '2px solid #e5e7eb',
              cursor: 'pointer'
            }}
          >
            <div className="flex items-center">
              <Report style={{ fontSize: '28px', color: '#006A4E', marginRight: '16px' }} />
              <div className="flex-1">
                <p style={{ fontSize: '17px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                  Submit Complaint
                </p>
                <p style={{ fontSize: '15px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  புகாரை சமர்ப்பிக்கவும்
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* App Info */}
      <div className="px-5 mt-8 pb-4">
        <div className="text-center">
          <p style={{ fontSize: '14px', color: '#6c757d', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
            Namma Ration App v1.0.0
          </p>
          <p style={{ fontSize: '13px', color: '#6c757d', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            தமிழ்நாடு பொது விநியோக அமைப்பு
          </p>
          <p style={{ fontSize: '13px', color: '#6c757d', fontFamily: 'Inter, sans-serif', marginTop: '8px' }}>
            © 2025 Government of Tamil Nadu
          </p>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { ArrowBack, CalendarToday, Schedule, CheckCircle } from '@mui/icons-material';

interface SlotBookingProps {
  onNavigate: (screen: string) => void;
}

export function SlotBooking({ onNavigate }: SlotBookingProps) {
  const [selectedDate, setSelectedDate] = useState('today');
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  const dates = [
    { id: 'today', label: 'Today', tamilLabel: 'இன்று', date: 'Dec 23' },
    { id: 'tomorrow', label: 'Tomorrow', tamilLabel: 'நாளை', date: 'Dec 24' },
    { id: 'day3', label: 'Wed', tamilLabel: 'புதன்', date: 'Dec 25' },
    { id: 'day4', label: 'Thu', tamilLabel: 'வியாழன்', date: 'Dec 26' }
  ];

  const slots = [
    { id: 1, time: '08:00 AM - 09:00 AM', status: 'vacant', slotsLeft: 12 },
    { id: 2, time: '09:00 AM - 10:00 AM', status: 'vacant', slotsLeft: 8 },
    { id: 3, time: '10:00 AM - 11:00 AM', status: 'filling', slotsLeft: 3 },
    { id: 4, time: '11:00 AM - 12:00 PM', status: 'filling', slotsLeft: 2 },
    { id: 5, time: '12:00 PM - 01:00 PM', status: 'full', slotsLeft: 0 },
    { id: 6, time: '02:00 PM - 03:00 PM', status: 'vacant', slotsLeft: 15 },
    { id: 7, time: '03:00 PM - 04:00 PM', status: 'vacant', slotsLeft: 10 },
    { id: 8, time: '04:00 PM - 05:00 PM', status: 'filling', slotsLeft: 4 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'vacant':
        return '#22c55e';
      case 'filling':
        return '#eab308';
      case 'full':
        return '#ef4444';
      default:
        return '#6c757d';
    }
  };

  const getStatusText = (status: string, slotsLeft: number) => {
    switch (status) {
      case 'vacant':
        return { en: `Vacant (${slotsLeft} slots left)`, ta: `காலியாக உள்ளது (${slotsLeft} இடங்கள்)` };
      case 'filling':
        return { en: `Filling Fast (${slotsLeft} left)`, ta: `விரைவில் நிரம்பும் (${slotsLeft})` };
      case 'full':
        return { en: 'Full', ta: 'நிரம்பியது' };
      default:
        return { en: 'Unknown', ta: 'தெரியாது' };
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FA', paddingBottom: '140px' }}>
      {/* Header */}
      <div className="shadow-md" style={{ backgroundColor: '#006A4E', padding: '20px', borderRadius: '0 0 24px 24px' }}>
        <div className="flex items-center mb-2">
          <button
            onClick={() => onNavigate('preorder')}
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
              Book Time Slot
            </h1>
            <p style={{ color: '#ffffff', fontSize: '20px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.95 }}>
              நேர இடைவெளியை முன்பதிவு செய்யுங்கள்
            </p>
          </div>
        </div>
      </div>

      {/* Date Selection */}
      <div className="px-5 mt-6">
        <div className="flex items-center mb-3">
          <CalendarToday style={{ fontSize: '24px', color: '#006A4E', marginRight: '8px' }} />
          <h2 style={{ color: '#212529', fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
            Select Date
          </h2>
        </div>
        <p style={{ color: '#212529', fontSize: '18px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '16px' }}>
          தேதியைத் தேர்ந்தெடுக்கவும்
        </p>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {dates.map((date) => (
            <button
              key={date.id}
              onClick={() => setSelectedDate(date.id)}
              className="rounded-2xl transition-transform active:scale-95 flex-shrink-0"
              style={{
                backgroundColor: selectedDate === date.id ? '#006A4E' : 'white',
                color: selectedDate === date.id ? 'white' : '#212529',
                minWidth: '100px',
                padding: '16px',
                border: selectedDate === date.id ? 'none' : '2px solid #e5e7eb',
                cursor: 'pointer',
                boxShadow: selectedDate === date.id ? '0 4px 6px rgba(0, 106, 78, 0.2)' : '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <p style={{ fontSize: '16px', fontWeight: '600', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
                {date.label}
              </p>
              <p style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '6px', opacity: 0.9 }}>
                {date.tamilLabel}
              </p>
              <p style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'Inter, sans-serif', opacity: 0.85 }}>
                {date.date}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="px-5 mt-8">
        <div className="flex items-center mb-3">
          <Schedule style={{ fontSize: '24px', color: '#006A4E', marginRight: '8px' }} />
          <h2 style={{ color: '#212529', fontSize: '20px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
            Available Time Slots
          </h2>
        </div>
        <p style={{ color: '#212529', fontSize: '18px', fontWeight: '600', fontFamily: 'Noto Sans Tamil, sans-serif', marginBottom: '16px' }}>
          கிடைக்கக்கூடிய நேர இடைவெளிகள்
        </p>

        <div className="space-y-3">
          {slots.map((slot) => {
            const statusInfo = getStatusText(slot.status, slot.slotsLeft);
            const isDisabled = slot.status === 'full';
            const isSelected = selectedSlot === slot.id;

            return (
              <button
                key={slot.id}
                onClick={() => !isDisabled && setSelectedSlot(slot.id)}
                disabled={isDisabled}
                className="w-full rounded-2xl shadow-md transition-transform active:scale-95"
                style={{
                  backgroundColor: isSelected ? '#006A4E' : 'white',
                  color: isSelected ? 'white' : '#212529',
                  padding: '20px',
                  border: isSelected ? 'none' : isDisabled ? '2px solid #e5e7eb' : '2px solid #e5e7eb',
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                  opacity: isDisabled ? 0.5 : 1,
                  textAlign: 'left'
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Schedule style={{ fontSize: '24px', marginRight: '12px', color: isSelected ? 'white' : '#006A4E' }} />
                      <h3 style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
                        {slot.time}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 ml-9">
                      <div
                        className="rounded-full"
                        style={{
                          width: '10px',
                          height: '10px',
                          backgroundColor: getStatusColor(slot.status)
                        }}
                      />
                      <div>
                        <p style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                          {statusInfo.en}
                        </p>
                        <p style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.9 }}>
                          {statusInfo.ta}
                        </p>
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <CheckCircle style={{ fontSize: '32px', color: 'white', marginLeft: '12px' }} />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Confirm Button */}
      <div
        className="fixed bottom-0 left-0 right-0 shadow-lg"
        style={{
          backgroundColor: 'white',
          borderTop: '2px solid #e5e7eb',
          maxWidth: '480px',
          margin: '0 auto',
          padding: '20px'
        }}
      >
        <button
          onClick={() => selectedSlot && onNavigate('token')}
          disabled={!selectedSlot}
          className="w-full rounded-2xl transition-transform active:scale-95"
          style={{
            backgroundColor: selectedSlot ? '#FF9933' : '#e5e7eb',
            color: 'white',
            minHeight: '64px',
            padding: '16px',
            border: 'none',
            cursor: selectedSlot ? 'pointer' : 'not-allowed'
          }}
        >
          <p style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
            Confirm Slot & Get Token
          </p>
          <p style={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            இடைவெளியை உறுதிப்படுத்தவும்
          </p>
        </button>
      </div>
    </div>
  );
}

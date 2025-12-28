import React, { useState } from 'react';
import { LanguageWelcome } from './components/LanguageWelcome';
import { HomeDashboard } from './components/HomeDashboard';
import { RationCardDetails } from './components/RationCardDetails';
import { MapLocator } from './components/MapLocator';
import { ItemPreOrder } from './components/ItemPreOrder';
import { SlotBooking } from './components/SlotBooking';
import { DigitalToken } from './components/DigitalToken';
import { HelpSupport } from './components/HelpSupport';

type Screen = 'welcome' | 'home' | 'card' | 'map' | 'preorder' | 'booking' | 'token' | 'help';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [language, setLanguage] = useState<'en' | 'ta'>('en');

  const handleLanguageSelect = (lang: 'en' | 'ta') => {
    setLanguage(lang);
    setCurrentScreen('home');
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, Noto Sans Tamil, sans-serif', maxWidth: '480px', margin: '0 auto', backgroundColor: '#F8F9FA' }}>
      {currentScreen === 'welcome' && (
        <LanguageWelcome onSelectLanguage={handleLanguageSelect} />
      )}
      {currentScreen === 'home' && (
        <HomeDashboard onNavigate={handleNavigate} />
      )}
      {currentScreen === 'card' && (
        <RationCardDetails onNavigate={handleNavigate} />
      )}
      {currentScreen === 'map' && (
        <MapLocator onNavigate={handleNavigate} />
      )}
      {currentScreen === 'preorder' && (
        <ItemPreOrder onNavigate={handleNavigate} />
      )}
      {currentScreen === 'booking' && (
        <SlotBooking onNavigate={handleNavigate} />
      )}
      {currentScreen === 'token' && (
        <DigitalToken onNavigate={handleNavigate} />
      )}
      {currentScreen === 'help' && (
        <HelpSupport onNavigate={handleNavigate} />
      )}
    </div>
  );
}

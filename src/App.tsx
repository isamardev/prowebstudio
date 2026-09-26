import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroVertex } from './components/HeroVertex';
import { MarqueeShowcase } from './components/MarqueeShowcase';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LightboxModal } from './components/LightboxModal';
import { WhatsAppDrawer } from './components/WhatsAppDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { MarqueeItem } from './types';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [prefillService, setPrefillService] = useState<string | undefined>(undefined);
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    title: string;
    subtitle?: string;
    tag?: string;
    imageUrl: string;
  }>({
    isOpen: false,
    title: '',
    imageUrl: ''
  });
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);

  const handleOpenContact = (service?: string) => {
    setPrefillService(service);
    setContactModalOpen(true);
  };

  const handleSelectMarqueeItem = (item: MarqueeItem) => {
    setLightboxData({
      isOpen: true,
      title: item.title,
      subtitle: `Category: ${item.category}`,
      tag: item.category,
      imageUrl: item.gifUrl
    });
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] flex flex-col relative overflow-x-clip selection:bg-[#38bdf8] selection:text-black">
      {/* 3-Zone Navigation Header */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col w-full">
        {/* 1. Hero Showcase */}
        <HeroVertex
          onOpenContact={handleOpenContact}
          onOpenWhatsApp={() => setWhatsAppOpen(true)}
        />

        {/* 2. Portfolio (Visual Catalog & Infinite Motion Showcase) */}
        <MarqueeShowcase onSelectItem={handleSelectMarqueeItem} />

        {/* 3. About Section with Dynamic Reveal & Proof Metrics */}
        <AboutSection onOpenContact={() => handleOpenContact('Custom Spatial Project')} />

        {/* 4. Services Section (Editorial 01-05 with expandable deliverables) */}
        <ServicesSection onSelectService={(s) => handleOpenContact(s)} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => handleOpenContact('General Inquiry')} />

      {/* Native App Mobile Bottom Navigation Bar (Dock) */}
      <MobileBottomNav onOpenContact={() => handleOpenContact('Direct Consultation')} />

      {/* Modals & Overlays */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        prefillService={prefillService}
      />

      <LightboxModal
        isOpen={lightboxData.isOpen}
        onClose={() => setLightboxData((prev) => ({ ...prev, isOpen: false }))}
        title={lightboxData.title}
        subtitle={lightboxData.subtitle}
        tag={lightboxData.tag}
        imageUrl={lightboxData.imageUrl}
        onOpenContact={(title) => handleOpenContact(`Inquiry regarding ${title}`)}
      />

      <WhatsAppDrawer
        isOpen={whatsAppOpen}
        onClose={() => setWhatsAppOpen(false)}
      />
    </div>
  );
}

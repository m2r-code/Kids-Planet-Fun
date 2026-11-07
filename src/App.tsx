/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, PricingItem, MultiPassItem, WaiverSubmission } from './types';
import {
  INITIAL_PRICING,
  MULTI_PASS_PACKAGES,
  GALLERY_IMAGES,
} from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReopeningModal } from './components/ReopeningBanner';
import { LightboxModal } from './components/LightboxModal';
import { CMSPriceEditorModal } from './components/CMSPriceEditorModal';
import { StaffWaiverLookupModal } from './components/StaffWaiverLookupModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PlaygroundPage } from './pages/PlaygroundPage';
import { PricingPage } from './pages/PricingPage';
import { BirthdayPartiesPage } from './pages/BirthdayPartiesPage';
import { RulesSafetyPage } from './pages/RulesSafetyPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { BuyTicketsPage } from './pages/BuyTicketsPage';
import { SignWaiverPage } from './pages/SignWaiverPage';
import { GiftCardsPage } from './pages/GiftCardsPage';

import { Ticket, FileCheck2, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [pricing, setPricing] = useState<PricingItem[]>(() => {
    const saved = localStorage.getItem('kp_pricing');
    return saved ? JSON.parse(saved) : INITIAL_PRICING;
  });
  const [multiPasses, setMultiPasses] = useState<MultiPassItem[]>(() => {
    const saved = localStorage.getItem('kp_multipasses');
    return saved ? JSON.parse(saved) : MULTI_PASS_PACKAGES;
  });

  // Seed with sample initial waivers for front desk verification test
  const [waivers, setWaivers] = useState<WaiverSubmission[]>(() => {
    const saved = localStorage.getItem('kp_waivers');
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'KP-WAV-10492',
        parentName: 'Sarah Jenkins',
        email: 'sarah.j@example.com',
        phone: '(317) 555-0142',
        address: '104 Meadow Lane, Brownsburg, IN',
        children: [
          { name: 'Lucas Jenkins', dob: '2019-04-12', relationship: 'Child' },
          { name: 'Chloe Jenkins', dob: '2021-08-25', relationship: 'Child' },
        ],
        signedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        agreeToTerms: true,
      },
      {
        id: 'KP-WAV-10518',
        parentName: 'Marcus Vance',
        email: 'marcus.vance@example.com',
        phone: '(317) 555-0198',
        address: '412 Northpoint Way, Avon, IN',
        children: [
          { name: 'Oliver Vance', dob: '2018-11-03', relationship: 'Child' },
        ],
        signedAt: new Date(Date.now() - 86400000).toISOString(),
        agreeToTerms: true,
      },
    ];
  });

  // Reopening mode state (toggleable for owners/evaluators)
  const [reopeningMode, setReopeningMode] = useState<boolean>(true);

  // Modals
  const [reopeningModalOpen, setReopeningModalOpen] = useState<boolean>(false);
  const [cmsModalOpen, setCmsModalOpen] = useState<boolean>(false);
  const [waiverLookupOpen, setWaiverLookupOpen] = useState<boolean>(false);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Handle URL hash changes or direct deep links
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    if (
      [
        'home',
        'about',
        'playground',
        'pricing',
        'parties',
        'rules',
        'careers',
        'contact',
        'tickets',
        'waiver',
        'gift-cards',
      ].includes(hash)
    ) {
      setCurrentPage(hash);
    }
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdatePricing = (newPricing: PricingItem[], newPasses: MultiPassItem[]) => {
    setPricing(newPricing);
    setMultiPasses(newPasses);
    localStorage.setItem('kp_pricing', JSON.stringify(newPricing));
    localStorage.setItem('kp_multipasses', JSON.stringify(newPasses));
  };

  const handleResetPricing = () => {
    setPricing(INITIAL_PRICING);
    setMultiPasses(MULTI_PASS_PACKAGES);
    localStorage.removeItem('kp_pricing');
    localStorage.removeItem('kp_multipasses');
  };

  const handleAddWaiver = (newWaiver: WaiverSubmission) => {
    const updated = [newWaiver, ...waivers];
    setWaivers(updated);
    localStorage.setItem('kp_waivers', JSON.stringify(updated));
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-slate-800 font-body selection:bg-[#FF8B24]/20 selection:text-[#174A91]">
      {/* Top Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        reopeningMode={reopeningMode}
        onToggleReopeningMode={() => setReopeningMode(!reopeningMode)}
        onOpenReopeningModal={() => setReopeningModalOpen(true)}
      />

      {/* Main Page Content Router */}
      <main className="flex-1 pb-16">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            pricing={pricing}
            multiPasses={multiPasses}
            onOpenLightbox={handleOpenLightbox}
            onOpenReopeningModal={() => setReopeningModalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'playground' && (
          <PlaygroundPage
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onNavigate={handleNavigate}
            pricing={pricing}
            multiPasses={multiPasses}
            onOpenCMS={() => setCmsModalOpen(true)}
          />
        )}

        {currentPage === 'parties' && (
          <BirthdayPartiesPage
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'rules' && (
          <RulesSafetyPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'careers' && (
          <CareersPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'tickets' && (
          <BuyTicketsPage
            onNavigate={handleNavigate}
            pricing={pricing}
          />
        )}

        {currentPage === 'waiver' && (
          <SignWaiverPage
            onNavigate={handleNavigate}
            onAddWaiver={handleAddWaiver}
            onOpenWaiverLookup={() => setWaiverLookupOpen(true)}
          />
        )}

        {currentPage === 'gift-cards' && (
          <GiftCardsPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReopeningModal={() => setReopeningModalOpen(true)}
        onOpenCMS={() => setCmsModalOpen(true)}
        onOpenWaiverLookup={() => setWaiverLookupOpen(true)}
      />

      {/* Floating Bottom Quick Action for Mobile (Within 15% sticky cap) */}
      <div className="sm:hidden fixed bottom-3 left-4 right-4 z-30 flex items-center gap-2">
        <button
          onClick={() => handleNavigate('tickets')}
          className="flex-1 py-3 px-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] shadow-lg shadow-orange-500/40 flex items-center justify-center gap-2"
        >
          <Ticket className="w-4 h-4" />
          <span>BUY TICKETS</span>
        </button>
        <button
          onClick={() => handleNavigate('waiver')}
          className="py-3 px-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-[#174A91] bg-white border border-blue-200 shadow-md flex items-center justify-center"
          title="Sign Waiver"
        >
          <FileCheck2 className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Modals */}
      <ReopeningModal
        isOpen={reopeningModalOpen}
        onClose={() => setReopeningModalOpen(false)}
        reopeningMode={reopeningMode}
        onToggleReopeningMode={() => setReopeningMode(!reopeningMode)}
      />

      <CMSPriceEditorModal
        isOpen={cmsModalOpen}
        onClose={() => setCmsModalOpen(false)}
        pricing={pricing}
        multiPasses={multiPasses}
        onUpdatePricing={handleUpdatePricing}
        onResetPricing={handleResetPricing}
      />

      <StaffWaiverLookupModal
        isOpen={waiverLookupOpen}
        onClose={() => setWaiverLookupOpen(false)}
        waivers={waivers}
      />

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onSelectIndex={setLightboxIndex}
      />
    </div>
  );
}

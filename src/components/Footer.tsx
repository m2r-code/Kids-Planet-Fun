/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Ticket,
  FileCheck2,
  Gift,
  Zap,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenReopeningModal: () => void;
  onOpenCMS: () => void;
  onOpenWaiverLookup: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenReopeningModal,
  onOpenCMS,
  onOpenWaiverLookup,
}) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-400 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Valo style mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#174A91] to-[#FF8B24] p-0.5 flex items-center justify-center font-heading font-black text-white text-base shadow-lg shadow-sky-500/20">
                <div className="w-full h-full bg-[#070D1A] rounded-[10px] flex items-center justify-center">
                  KP
                </div>
              </div>
              <div>
                <span className="font-heading font-black text-xl text-white tracking-tight">
                  KIDS PLANET <span className="text-[#FF8B24]">FUN</span>
                </span>
                <p className="text-[11px] text-[#38BDF8] font-bold tracking-wider uppercase">
                  Active Adventure Park
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Brownsburg’s premier family entertainment center. Over 15,000 sq ft of multi-tiered climbing mazes, wave speed slides, pneumatic ball cannons, toddler soft play, and private birthday party rooms.
            </p>

            <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 space-y-1.5 max-w-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#FFD447] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>2026 Grand Reopening Status</span>
                </span>
                <button
                  onClick={onOpenReopeningModal}
                  className="text-[11px] text-[#38BDF8] hover:underline font-semibold"
                >
                  View Details &rarr;
                </button>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Currently completing full restoration with upgraded 4-story mazes and mixed-activity arenas for our 2026 Grand Reopening!
              </p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('playground')} className="hover:text-white transition-colors">
                  Attractions Guide
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors">
                  Pricing & Passes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('parties')} className="hover:text-white transition-colors">
                  Birthday Parties
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  Our Story & Mission
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('rules')} className="hover:text-white transition-colors">
                  Safety Standards
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-white transition-colors">
                  Careers & Hiring
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Guest Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs tracking-wider uppercase">
              Guest Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('tickets')}
                  className="text-[#FF8B24] font-bold hover:underline flex items-center gap-1.5"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Buy Tickets Online</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('waiver')}
                  className="text-[#38BDF8] font-bold hover:underline flex items-center gap-1.5"
                >
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>Sign Digital Waiver</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gift-cards')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Gift className="w-3.5 h-3.5 text-[#FF8B24]" />
                  <span>Gift Cards</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('parties')} className="hover:text-white transition-colors">
                  Book Birthday Suite
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenWaiverLookup}
                  className="text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Staff Waiver Lookup</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCMS}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  CMS Pricing Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Hours */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-xs tracking-wider uppercase">
              Visit Us
            </h4>
            <div className="text-xs space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF8B24] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">{BUSINESS_INFO.address}</p>
                  <p>{BUSINESS_INFO.cityStateZip}</p>
                  <a
                    href={BUSINESS_INFO.socials.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38BDF8] hover:underline inline-flex items-center gap-1 mt-0.5 font-semibold"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:underline font-mono">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFD447] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5 font-semibold text-white mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#FFD447]" />
                  <span>Operating Hours:</span>
                </div>
                {BUSINESS_INFO.hours.map((h, idx) => (
                  <p key={idx} className="flex justify-between text-[11px] py-0.5 text-slate-300">
                    <span>{h.days}</span>
                    <span className="font-mono text-white">{h.time}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Kids Planet Fun LLC. All rights reserved. Brownsburg, Indiana.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('rules')} className="hover:text-slate-300">
              Safety Rules
            </button>
            <button onClick={() => handleNav('waiver')} className="hover:text-slate-300">
              Terms & Waiver
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

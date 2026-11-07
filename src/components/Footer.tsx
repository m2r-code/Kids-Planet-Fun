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
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t-4 border-[#FF8B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800">
          {/* Col 1: Brand Info & Reopening Callout */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#174A91] p-0.5 border border-[#FFD447]/60 flex items-center justify-center font-heading font-black text-white text-lg shadow-sm">
                KP
              </div>
              <div>
                <span className="font-heading font-black text-xl text-white tracking-tight">
                  KIDS PLANET <span className="text-[#FF8B24]">FUN</span>
                </span>
                <p className="text-xs text-slate-400 font-medium">Indoor Playground & Family Center</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Brownsburg’s premier indoor family destination for children ages 0–14. Multi-level obstacle maze, high-thrill wave slides, ball pit blasters, soft toddler sanctuary, and unforgettable birthday parties.
            </p>

            {/* Reopening note callout */}
            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1.5 max-w-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#FFD447] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>2026 Reopening Status</span>
                </span>
                <button
                  onClick={onOpenReopeningModal}
                  className="text-[11px] text-[#69C7F0] hover:underline font-semibold"
                >
                  View Details &rarr;
                </button>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Currently preparing for our 2026 Grand Reopening following tornado restoration with upgraded attractions!
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('playground')}
                  className="hover:text-white transition-colors"
                >
                  Our Playground
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="hover:text-white transition-colors"
                >
                  Admission & Passes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('parties')}
                  className="hover:text-white transition-colors"
                >
                  Birthday Party Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  Our Story & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rules')}
                  className="hover:text-white transition-colors"
                >
                  Rules & Safety Pledge
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('careers')}
                  className="hover:text-white transition-colors"
                >
                  Jobs & Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Actions & Utility */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase">
              Guest Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('tickets')}
                  className="text-[#FF8B24] font-semibold hover:underline flex items-center gap-1.5"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Buy Tickets Online</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('waiver')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
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
                  <Gift className="w-3.5 h-3.5" />
                  <span>Purchase Gift Cards</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('parties')}
                  className="hover:text-white transition-colors"
                >
                  Book Birthday Party
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWaiverLookup}
                  className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 pt-2"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Staff Waiver Lookup</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCMS}
                  className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
                >
                  CMS Pricing Config
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Hours */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase">
              Visit Us
            </h4>
            <div className="text-xs space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF8B24] shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-medium">{BUSINESS_INFO.address}</p>
                  <p>{BUSINESS_INFO.cityStateZip}</p>
                  <a
                    href="https://maps.google.com/?q=499+Southpoint+Circle+Brownsburg+IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#69C7F0] hover:underline inline-flex items-center gap-1 mt-0.5 font-medium"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF8B24] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-slate-200 hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF8B24] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-200 hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <div className="flex items-center gap-1.5 font-semibold text-slate-300 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#FFD447]" />
                  <span>Standard Operating Hours:</span>
                </div>
                {BUSINESS_INFO.hours.map((h, idx) => (
                  <p key={idx} className="flex justify-between text-[11px] text-slate-400 py-0.5">
                    <span>{h.days}</span>
                    <span className="font-mono text-slate-300">{h.time}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Kids Planet Fun LLC. All rights reserved. Brownsburg, Indiana.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('rules')} className="hover:text-slate-400">
              Safety Rules
            </button>
            <button onClick={() => handleNav('waiver')} className="hover:text-slate-400">
              Terms & Waiver
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-400">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

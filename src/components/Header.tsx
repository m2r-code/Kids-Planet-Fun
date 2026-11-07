/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Menu,
  X,
  Ticket,
  FileCheck2,
  Gift,
  Phone,
  Sparkles,
  MapPin,
  ChevronRight,
  Flame,
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  reopeningMode: boolean;
  onToggleReopeningMode?: () => void;
  onOpenReopeningModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  reopeningMode,
  onOpenReopeningModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: Array<{ id: PageId; label: string }> = [
    { id: 'home', label: 'Home' },
    { id: 'playground', label: 'Attractions' },
    { id: 'pricing', label: 'Pricing & Passes' },
    { id: 'parties', label: 'Birthday Parties' },
    { id: 'about', label: 'About' },
    { id: 'rules', label: 'Safety Rules' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* Top Utility Bar (Valo style minimal status strip) */}
      <div className="bg-[#050811] text-slate-300 text-xs px-4 sm:px-6 py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span className="font-semibold text-white">Brownsburg, IN</span>
              <span className="hidden sm:inline text-slate-500">· 499 Southpoint Circle</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Phone className="w-3.5 h-3.5 text-[#FF8B24]" />
              <a href="tel:3173502095" className="hover:text-white transition-colors">
                (317) 350-2095
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenReopeningModal}
              className="flex items-center gap-1.5 text-xs text-[#FFD447] hover:text-white font-semibold transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD447]" />
              <span>2026 Grand Reopening Info</span>
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => handleNav('waiver')}
              className={`hover:text-[#38BDF8] flex items-center gap-1 transition-colors ${
                currentPage === 'waiver' ? 'text-[#38BDF8] font-bold' : 'text-slate-300'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Digital Waiver</span>
            </button>
            <button
              onClick={() => handleNav('gift-cards')}
              className={`hover:text-[#FF8B24] flex items-center gap-1 transition-colors ${
                currentPage === 'gift-cards' ? 'text-[#FF8B24] font-bold' : 'text-slate-300'
              }`}
            >
              <Gift className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Gift Cards</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Frosted Glass Nav Bar */}
      <div className="bg-[#0B1220]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
          {/* Valo Motion Style Brand Emblem */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3.5 text-left group focus-visible:outline-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#174A91] via-[#0284c7] to-[#FF8B24] p-0.5 shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 group-hover:scale-105 transition-all">
              <div className="w-full h-full bg-[#070D1A] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-orange-500/20" />
                <span className="font-heading font-black text-xl text-white tracking-wider z-10">
                  KP
                </span>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#FF8B24] blur-[1px]" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-2xl text-white tracking-tight leading-none">
                  KIDS PLANET
                </span>
                <span className="font-heading font-black text-2xl text-[#FF8B24] leading-none">
                  FUN
                </span>
              </div>
              <p className="text-[10px] font-bold tracking-widest text-[#38BDF8] uppercase mt-1">
                Active Adventure Park
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`relative py-1 transition-all hover:text-white whitespace-nowrap ${
                    isActive ? 'text-white font-bold' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#38BDF8] to-[#FF8B24] rounded-full shadow-sm shadow-cyan-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNav('waiver')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white rounded-xl transition-all border border-white/10"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Sign Waiver</span>
            </button>

            <button
              onClick={() => handleNav('tickets')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] via-[#f87807] to-[#e66c00] hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/25 transition-all"
            >
              <Ticket className="w-4 h-4" />
              <span>BUY TICKETS</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => handleNav('tickets')}
              className="px-3.5 py-2 rounded-lg font-heading font-black text-xs uppercase text-white bg-[#FF8B24] shadow-sm flex items-center gap-1.5"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>TICKETS</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A101D] border-b border-white/10 shadow-2xl px-5 py-5 space-y-4">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            <button
              onClick={() => handleNav('tickets')}
              className="col-span-2 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-center text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
            >
              <Ticket className="w-4 h-4" />
              <span>BOOK TICKETS ONLINE</span>
            </button>
            <button
              onClick={() => handleNav('waiver')}
              className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-white/5 border border-white/10 flex items-center justify-center gap-1.5"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Sign Waiver</span>
            </button>
            <button
              onClick={() => handleNav('gift-cards')}
              className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-white/5 border border-white/10 flex items-center justify-center gap-1.5"
            >
              <Gift className="w-3.5 h-3.5 text-[#FF8B24]" />
              <span>Gift Cards</span>
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-white/10 text-white font-bold border border-white/15'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </button>
            ))}
            <button
              onClick={() => handleNav('careers')}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 flex items-center justify-between"
            >
              <span>Jobs & Careers</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

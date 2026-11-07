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
  Clock,
  ChevronDown,
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
    { id: 'playground', label: 'Our Playground' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'parties', label: 'Birthday Parties' },
    { id: 'about', label: 'About' },
    { id: 'rules', label: 'Rules & Safety' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      {/* Top Utility Bar */}
      <div className="bg-[#174A91] text-white text-xs px-4 sm:px-6 py-1.5 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="w-3.5 h-3.5 text-[#FFD447]" />
              <span>Brownsburg, IN</span>
              <span className="hidden sm:inline text-slate-300">· 499 Southpoint Circle</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 opacity-90">
              <Phone className="w-3.5 h-3.5 text-[#FFD447]" />
              <a href="tel:3173502095" className="hover:text-[#FFD447] transition-colors">
                (317) 350-2095
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenReopeningModal}
              className="flex items-center gap-1.5 text-xs text-[#FFD447] hover:underline font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026 Reopening Update</span>
            </button>
            <span className="text-white/40">|</span>
            <button
              onClick={() => handleNav('waiver')}
              className={`hover:text-[#FFD447] flex items-center gap-1 transition-colors ${
                currentPage === 'waiver' ? 'text-[#FFD447] font-semibold' : ''
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Sign Waiver</span>
            </button>
            <button
              onClick={() => handleNav('gift-cards')}
              className={`hover:text-[#FFD447] flex items-center gap-1 transition-colors ${
                currentPage === 'gift-cards' ? 'text-[#FFD447] font-semibold' : ''
              }`}
            >
              <Gift className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Gift Cards</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
        {/* Brand Wordmark & Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 text-left group focus-visible:outline-none"
        >
          {/* Playful Planet Logo Emblem */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#174A91] via-[#1a5ab3] to-[#FF8B24] p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#174A91] rounded-[14px] flex items-center justify-center relative overflow-hidden">
              {/* Orbital ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-3 border-2 border-[#FFD447] rounded-full rotate-[-28deg] opacity-80" />
              </div>
              <span className="font-heading font-black text-xl text-white tracking-wider z-10">
                KP
              </span>
              <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF8B24]" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-2xl text-[#174A91] tracking-tight leading-tight">
                KIDS PLANET
              </span>
              <span className="font-heading font-black text-2xl text-[#FF8B24] leading-tight">
                FUN
              </span>
            </div>
            <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
              Indoor Adventure Playground
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
          {navLinks.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative py-1 transition-colors hover:text-[#174A91] whitespace-nowrap ${
                  isActive ? 'text-[#174A91] font-bold' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF8B24] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Action CTAs */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNav('waiver')}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#174A91] bg-blue-50/80 hover:bg-blue-100 rounded-xl transition-colors border border-blue-200/60"
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Digital Waiver</span>
          </button>

          <button
            onClick={() => handleNav('tickets')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:from-[#f87807] hover:to-[#e66c00] shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Ticket className="w-4 h-4" />
            <span>BUY TICKETS</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => handleNav('tickets')}
            className="px-3.5 py-2 rounded-lg font-heading font-bold text-xs text-white bg-[#FF8B24] shadow-sm flex items-center gap-1.5"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>TICKETS</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#174A91] rounded-lg border border-slate-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => handleNav('tickets')}
              className="col-span-2 py-3 rounded-xl font-heading font-bold text-center text-white bg-[#FF8B24] flex items-center justify-center gap-2 shadow-sm"
            >
              <Ticket className="w-4 h-4" />
              <span>BUY TICKETS ONLINE</span>
            </button>
            <button
              onClick={() => handleNav('waiver')}
              className="py-2.5 px-3 rounded-lg text-xs font-bold text-[#174A91] bg-blue-50 border border-blue-200 flex items-center justify-center gap-1.5"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Sign Waiver</span>
            </button>
            <button
              onClick={() => handleNav('gift-cards')}
              className="py-2.5 px-3 rounded-lg text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 flex items-center justify-center gap-1.5"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Gift Cards</span>
            </button>
          </div>

          <div className="space-y-1 pt-1">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-[#174A91] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && (
                  <span className="w-2 h-2 rounded-full bg-[#FF8B24]" />
                )}
              </button>
            ))}
            <button
              onClick={() => handleNav('careers')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Jobs & Careers
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <p className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#174A91]" />
              <span>499 Southpoint Circle, Brownsburg, IN</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#174A91]" />
              <a href="tel:3173502095" className="hover:underline font-semibold text-slate-700">
                (317) 350-2095
              </a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

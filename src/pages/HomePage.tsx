/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, PricingItem, MultiPassItem } from '../types';
import {
  BUSINESS_INFO,
  ATTRACTIONS,
  GALLERY_IMAGES,
  FAQS,
  TESTIMONIALS,
} from '../data/mockData';
import { APP_IMAGES } from '../assets/images';
import {
  Ticket,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  ChevronDown,
  Gift,
  FileCheck2,
  Baby,
  Smile,
  Gamepad2,
  Calendar,
  Flame,
  Activity,
  Zap,
  Users,
  Compass,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  pricing: PricingItem[];
  multiPasses: MultiPassItem[];
  onOpenLightbox: (index: number) => void;
  onOpenReopeningModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  pricing,
  multiPasses,
  onOpenLightbox,
  onOpenReopeningModal,
}) => {
  // Selected attraction for the Valo-style interactive stage
  const [selectedAttractionIndex, setSelectedAttractionIndex] = useState<number>(0);
  const activeAttraction = ATTRACTIONS[selectedAttractionIndex] || ATTRACTIONS[0];

  // Interactive Adventure Finder state
  const [finderAge, setFinderAge] = useState<'toddler' | 'kid' | 'all'>('kid');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');

  const filteredFaqs =
    selectedFaqCategory === 'all'
      ? FAQS
      : FAQS.filter((f) => f.category === selectedFaqCategory);

  return (
    <div className="space-y-24 sm:space-y-32 text-slate-100">
      {/* 2026 Reopening Notification Ticker (Valo Style) */}
      <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border-b border-white/10 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="p-1 px-2 rounded-md bg-[#FF8B24] text-white font-heading font-black text-[10px] tracking-wider uppercase">
              2026 UPDATE
            </span>
            <p className="text-xs sm:text-sm text-slate-300">
              <span className="font-bold text-white">Grand Reopening Announcement:</span> Rebuilding with upgraded 4-story mazes & mixed-activity zones in Brownsburg, IN!
            </p>
          </div>
          <button
            onClick={onOpenReopeningModal}
            className="text-xs font-bold text-[#38BDF8] hover:text-white flex items-center gap-1 transition-colors shrink-0"
          >
            <span>Join VIP Reopening List</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SECTION 1: IMMERSIVE HERO (VALO MOTION STYLE) */}
      <section className="relative overflow-hidden pt-4 sm:pt-8">
        {/* Ambient Radial Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[580px] lg:min-h-[640px] flex items-center bg-[#0B1323]">
            {/* Background Image with Cinematic Scrim */}
            <img
              src={APP_IMAGES.hero}
              alt="Kids Planet Fun Multi-Level Indoor Playground"
              className="absolute inset-0 w-full h-full object-cover scale-102 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Valo Motion high-contrast gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/75 to-[#070B14]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-black/40" />

            {/* Hero Copy Content */}
            <div className="relative z-10 max-w-2xl px-6 sm:px-12 py-16 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cyan-500/30 shadow-xs shadow-cyan-500/10">
                <Zap className="w-3.5 h-3.5 text-[#FFD447]" />
                <span>Next-Gen Indoor Family Adventure · Brownsburg, IN</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02] text-white">
                BIG FUN.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#FFD447] to-[#FF8B24]">
                  BIGGER SMILES.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                We turn active play into unforgettable memories. Step inside over 15,000 sq ft of multi-tiered climbing labyrinths, pneumatic ball blasters, triple wave speed slides, safe toddler soft play, and private birthday party rooms.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('tickets')}
                  className="px-8 py-4 rounded-2xl font-heading font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] via-[#f87807] to-[#e66c00] hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/30 transition-all flex items-center gap-2.5"
                >
                  <Ticket className="w-4 h-4" />
                  <span>BOOK PLAY TICKETS</span>
                </button>

                <button
                  onClick={() => onNavigate('playground')}
                  className="px-6 py-4 rounded-2xl font-heading font-bold text-xs uppercase tracking-wider text-slate-200 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 hover:scale-105 hover:text-white"
                >
                  <span>EXPLORE ATTRACTIONS</span>
                  <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
                </button>
              </div>

              {/* Live Feature Checkmarks */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                  <span>Ages 0–14 + Accompanying Adults</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD447]" />
                  <span>Hospital-Grade Sanitization</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8B24]" />
                  <span>Free Parent Observation Wi-Fi</span>
                </span>
              </div>
            </div>
          </div>

          {/* Valo Motion KPI Metrics Strip */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                15,000+
              </span>
              <p className="text-xs text-[#38BDF8] font-bold uppercase tracking-wider mt-1">
                Sq Ft Adventure Park
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Multi-level climbing & obstacles
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="font-heading font-black text-3xl sm:text-4xl text-[#FF8B24] tracking-tight">
                50,000+
              </span>
              <p className="text-xs text-[#FFD447] font-bold uppercase tracking-wider mt-1">
                Ball Pit Ocean
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                With pneumatic air cannons
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                4-Tier
              </span>
              <p className="text-xs text-[#38BDF8] font-bold uppercase tracking-wider mt-1">
                Mega Climbing Maze
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Triple-lane wave racing slides
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="font-heading font-black text-3xl sm:text-4xl text-emerald-400 tracking-tight">
                100%
              </span>
              <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider mt-1">
                Safety Padded & Gated
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Certified safety attendants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE ATTRACTION STAGE (VALO MOTION SIGNATURE EXPERIENCE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
              Interactive Attraction Stage
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-3">
              Six Signature Play Arenas
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Select an attraction below to inspect physical intensity, age limits, and technical specs.
            </p>
          </div>

          <button
            onClick={() => onNavigate('playground')}
            className="text-xs font-bold uppercase tracking-wider text-[#FF8B24] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>View All Detailed Specs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Attraction Selector Tabs (Valo Style) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {ATTRACTIONS.map((attr, idx) => {
            const isSelected = selectedAttractionIndex === idx;
            return (
              <button
                key={attr.id}
                onClick={() => setSelectedAttractionIndex(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-sky-400 shadow-lg shadow-sky-500/15 ring-1 ring-sky-400'
                    : 'bg-[#0B1323] border-white/10 hover:border-white/20 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold block ${isSelected ? 'text-[#38BDF8]' : 'text-slate-500'}`}>
                  0{idx + 1}
                </span>
                <p className="font-heading font-bold text-xs text-white truncate mt-1">
                  {attr.title}
                </p>
                <span className="text-[10px] text-slate-500 block truncate">{attr.ageRange}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Attraction Interactive Showcase Display */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#0F172A] via-[#0B1323] to-[#070B14] p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Showcase Screen */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-16/10 shadow-2xl border border-white/10 bg-slate-950 group">
              <img
                src={activeAttraction.image}
                alt={activeAttraction.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#FFD447] border border-white/10">
                {activeAttraction.badge}
              </div>
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                {activeAttraction.ageRange}
              </div>
            </div>

            {/* Technical Specs & Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
                  Arena 0{selectedAttractionIndex + 1} of 06
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                  {activeAttraction.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeAttraction.fullDesc}
                </p>
              </div>

              {/* Key Features Pill Grid */}
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Key Specifications:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeAttraction.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Protocol Highlight */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FFD447] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Safety Requirement: </span>
                  <span>{activeAttraction.safetyNotes}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('tickets')}
                  className="px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:scale-105 transition-all shadow-md shadow-orange-500/20 flex items-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Book This Arena</span>
                </button>
                <button
                  onClick={() => onNavigate('waiver')}
                  className="text-xs font-bold text-slate-300 hover:text-white"
                >
                  Sign Waiver &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE "ADVENTURE FINDER" (GAMIFIED UX) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#FFD447] bg-yellow-500/10 px-3.5 py-1.5 rounded-full border border-yellow-500/20">
              Interactive Play Guide
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
              Find The Perfect Adventure For Your Family
            </h2>
            <p className="text-slate-300 text-sm">
              Select your child's age group to see recommended zones, safety gear, and session tips.
            </p>

            {/* Age Filter Selector */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'toddler', label: 'Toddlers (Ages 0–3)', sub: 'Soft play & sensory' },
                { id: 'kid', label: 'Explorers (Ages 4–14)', sub: 'Maze, slides & trampolines' },
                { id: 'all', label: 'Family & Groups', sub: 'Birthdays & open play' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setFinderAge(opt.id as any)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    finderAge === opt.id
                      ? 'bg-gradient-to-r from-[#174A91] to-[#0284c7] border-cyan-400 text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <p className="font-heading font-bold text-sm text-white">{opt.label}</p>
                  <p className="text-[11px] opacity-80 mt-0.5">{opt.sub}</p>
                </button>
              ))}
            </div>

            {/* Dynamic Result Panel */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
                  Recommended Experience
                </span>
                <span className="text-xs font-mono font-bold text-[#FFD447]">
                  {finderAge === 'toddler'
                    ? '$10.00 / 90-Min Session'
                    : '$16.00 – $18.00 / 90-Min Session'}
                </span>
              </div>

              <h4 className="font-heading font-bold text-lg text-white">
                {finderAge === 'toddler'
                  ? 'Dedicated Soft Toddler Haven + Sensory Baby Ball Pond'
                  : finderAge === 'kid'
                  ? '4-Story Mega Climbing Labyrinth + Triple Wave Speed Slides + Trampolines'
                  : 'All-Zone Family Access + Private Birthday Celebration Suite'}
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                {finderAge === 'toddler'
                  ? 'Specially engineered for gentle early development. Enclosed foam climbers, baby slides, and tactile gear walls. Grip socks required for toddler and supervising parent.'
                  : finderAge === 'kid'
                  ? 'High-energy physical playground designed for agility and confidence. Race side-by-side on wave slides, shoot pneumatic ball cannons, and play arcade air hockey.'
                  : 'Celebrate stress-free birthdays and group adventures with private party rooms, party host, fresh pizza, grip socks, and non-stop active fun.'}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Grip socks available at front desk for $2.50
                </span>
                <button
                  onClick={() => onNavigate('tickets')}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF8B24] hover:bg-[#e66c00] transition-colors"
                >
                  Book Recommended Session &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BIRTHDAY PARTY PROMOTION (VALO STYLE CELEBRATION SUITE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#174A91] via-[#0F172A] to-[#FF8B24] p-8 sm:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFD447] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Ultimate Celebration Suite</span>
              </span>

              <h2 className="font-heading font-black text-3xl sm:text-5xl text-white leading-tight">
                MAKE THEIR DAY <br />
                EXTRA SPECIAL!
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Give your child an unforgettable birthday celebration! Private modern party suites, dedicated party host, hot pizza, drinks, grip socks, and unlimited adventure. We handle everything from setup to cleanup!
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('parties')}
                  className="px-7 py-3.5 rounded-2xl font-heading font-black text-xs uppercase tracking-wider text-slate-900 bg-[#FFD447] hover:bg-[#ffcf33] shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>EXPLORE PARTY PACKAGES</span>
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-2xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  Inquire Private Facility Rental
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
              <img
                src={APP_IMAGES.birthday}
                alt="Kids Birthday Celebration Party Room"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
              Simple Rates
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mt-2">
              Transparent Play Admission
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              90-minute open play sessions with access to all multi-level arenas.
            </p>
          </div>

          <button
            onClick={() => onNavigate('pricing')}
            className="text-xs font-bold uppercase tracking-wider text-[#FF8B24] hover:text-white flex items-center gap-1.5"
          >
            <span>View Multi-Pass Savings Calculator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pricing.slice(0, 3).map((plan) => (
            <div
              key={plan.id}
              className={`p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                plan.category === 'weekend'
                  ? 'bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-[#FF8B24] ring-1 ring-[#FF8B24] shadow-xl'
                  : 'bg-[#0B1220] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    {plan.ageRange}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                    90 Min Session
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-white">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 py-1">
                  <span className="font-heading font-black text-5xl text-white">
                    ${plan.price}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    / participant
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <button
                  onClick={() => onNavigate('tickets')}
                  className={`w-full py-3.5 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-all ${
                    plan.category === 'weekend'
                      ? 'bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:scale-102 text-white shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Book This Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: PHOTO GALLERY WITH LIGHTBOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
            Inside The Park
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
            Facility Image Gallery
          </h2>
          <p className="text-slate-400 text-sm">
            Click any photograph to launch the high-resolution lightbox viewer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox(idx)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-16/9' : 'aspect-4/3'
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#FFD447]">{img.category}</span>
                <h4 className="font-heading font-bold text-lg">{img.title}</h4>
                <p className="text-xs text-slate-300 line-clamp-1">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: VISIT US & GOOGLE MAPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-[#0B1323] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
                Find Us In Brownsburg
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
                Plan Your Visit To Kids Planet
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Located on Southpoint Circle in Brownsburg, Indiana. Only 15 minutes from Indianapolis and Avon, with ample free surface parking.
              </p>

              <div className="space-y-4 pt-2 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF8B24] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm">{BUSINESS_INFO.fullAddress}</p>
                    <p className="text-slate-400">Free parking directly in front of main entrance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm">{BUSINESS_INFO.phone}</p>
                    <p className="text-slate-400">Direct phone support during operating hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FFD447] shrink-0 mt-0.5" />
                  <div className="w-full max-w-sm space-y-1">
                    <p className="font-bold text-white text-sm mb-1">Operating Hours:</p>
                    {BUSINESS_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between border-b border-white/10 pb-1 text-slate-300">
                        <span>{h.days}</span>
                        <span className="font-mono text-white">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={BUSINESS_INFO.socials.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl font-heading font-black text-xs uppercase tracking-wider bg-[#FF8B24] hover:bg-[#e66c00] text-white transition-colors"
                >
                  Open In Google Maps &rarr;
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                >
                  Contact Desk
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-80 bg-slate-900">
              <iframe
                title="Kids Planet Fun Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=499+Southpoint+Circle+Brownsburg+IN+46112&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
            Everything You Need To Know
          </h2>
          <p className="text-slate-400 text-sm">
            Answers regarding waivers, socks, admission, and birthday party reservations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'waivers', label: 'Waivers & Entry' },
              { id: 'safety', label: 'Safety & Socks' },
              { id: 'tickets', label: 'Tickets & Pricing' },
              { id: 'parties', label: 'Birthdays' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFaqCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedFaqCategory === tab.id
                    ? 'bg-[#174A91] text-white shadow-md'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#0B1323] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-white hover:text-[#38BDF8] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#38BDF8]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-black/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#174A91] via-[#0F172A] to-[#FF8B24] p-10 sm:p-16 text-center border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFD447] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              <Zap className="w-3.5 h-3.5" />
              <span>Ready for Action</span>
            </span>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white leading-tight">
              READY FOR YOUR NEXT ADVENTURE?
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Book your play passes online now, complete your digital waiver in 60 seconds, and get ready for BIG FUN and BIGGER SMILES!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('tickets')}
                className="px-8 py-4 rounded-2xl font-heading font-black text-xs uppercase tracking-wider text-white bg-[#FF8B24] hover:bg-[#e66c00] shadow-xl shadow-orange-500/30 hover:scale-105 transition-all flex items-center gap-2"
              >
                <Ticket className="w-5 h-5" />
                <span>BUY TICKETS NOW</span>
              </button>

              <button
                onClick={() => onNavigate('waiver')}
                className="px-7 py-4 rounded-2xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all flex items-center gap-2 hover:scale-105"
              >
                <FileCheck2 className="w-4 h-4 text-[#38BDF8]" />
                <span>SIGN WAIVER IN ADVANCE</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, GALLERY_IMAGES } from '../data/mockData';
import { APP_IMAGES } from '../assets/images';
import {
  Heart,
  Shield,
  Sparkles,
  Award,
  Users,
  Gamepad2,
  Smile,
  ArrowRight,
  Hammer,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (index: number) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenLightbox }) => {
  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/10 px-3.5 py-1.5 rounded-full border border-[#38BDF8]/30">
          ABOUT // OUR STORY & MISSION
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white leading-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#FF8B24] to-[#FFD447]">Kids Planet Fun</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Founded in Brownsburg, Indiana, Kids Planet Fun is a next-generation active entertainment park engineered to let kids unplug from digital screens and immerse into high-energy physical exploration.
        </p>
      </section>

      {/* Story & Rebuilding Resilience Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF8B24] uppercase tracking-wider bg-[#FF8B24]/10 px-3 py-1.5 rounded-full border border-[#FF8B24]/30">
            <Hammer className="w-3.5 h-3.5" />
            <span>COMMUNITY RESILIENCE // 2026 REVITALIZATION</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white leading-tight">
            Our Journey: Rebuilding Stronger for Indiana Families
          </h2>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              When a severe storm struck our Brownsburg community, our facility sustained significant structural damage. While heartbreaking, the overwhelming encouragement from local families inspired us to not only rebuild, but reimagine Kids Planet Fun from the foundation up.
            </p>
            <p>
              Our 2026 Grand Reopening represents a total evolution: brand new multi-tier commercial play structures, high-velocity wave slides, expanded soft toddler spaces, hospital-grade antimicrobial filtration systems, and modern luxury birthday celebration suites.
            </p>
            <p className="font-semibold text-[#38BDF8]">
              We are deeply grateful for our community’s unwavering support. Kids Planet is back — safer, higher-tech, and more exhilarating than ever!
            </p>
          </div>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div className="bg-[#0B1323] p-4 rounded-2xl border border-white/10">
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#38BDF8]">15,000+</p>
              <p className="text-xs text-slate-400 font-medium">Sq Ft Adventure Arena</p>
            </div>
            <div className="bg-[#0B1323] p-4 rounded-2xl border border-white/10">
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#FF8B24]">100%</p>
              <p className="text-xs text-slate-400 font-medium">Impact Padded & Enclosed</p>
            </div>
            <div className="bg-[#0B1323] p-4 rounded-2xl border border-white/10">
              <p className="font-heading font-black text-2xl sm:text-3xl text-[#FFD447]">Ages 0–14</p>
              <p className="text-xs text-slate-400 font-medium">Multi-Tier Challenge</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 bg-[#0B1323] border border-white/10 group">
          <img
            src={APP_IMAGES.hero}
            alt="Kids Planet Fun Playground Architecture"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0B1323]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300 flex items-center justify-between">
            <span className="font-mono text-[#38BDF8]">499 Southpoint Circle, Brownsburg IN</span>
            <span className="text-[#FF8B24] font-bold">15,000 SQ FT</span>
          </div>
        </div>
      </section>

      {/* Mission & Core Values Bento */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/10 px-3.5 py-1.5 rounded-full border border-[#38BDF8]/30">
            CORE PHILOSOPHY
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
            Our Mission & Core Values
          </h2>
          <p className="text-slate-400 text-sm">
            Engineering safe, adrenaline-pumping active spaces that celebrate the joy of childhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-[#0B1323] border border-white/10 hover:border-[#38BDF8]/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-[#38BDF8]">01 // SAFETY FIRST</div>
            <h3 className="font-heading font-bold text-xl text-white">
              Uncompromising Safety
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every obstacle, slide, and netting barrier adheres strictly to ASTM international standards for commercial indoor playgrounds. Soft padding covers every corner so kids can play without fear.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0B1323] border border-white/10 hover:border-[#FF8B24]/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF8B24]/10 text-[#FF8B24] border border-[#FF8B24]/20 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-[#FF8B24]">02 // ACTIVE PLAY</div>
            <h3 className="font-heading font-bold text-xl text-white">
              Physical Adventure
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              In a digital world dominated by screens, we give children an active arena to run, climb, balance, slide, and socialize, developing cardiovascular health and motor skills through joy.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0B1323] border border-white/10 hover:border-[#FFD447]/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFD447]/10 text-[#FFD447] border border-[#FFD447]/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-[#FFD447]">03 // CLEANLINESS</div>
            <h3 className="font-heading font-bold text-xl text-white">
              Hospital-Grade Hygiene
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cleanliness is our superpower. Our ball pits, vinyl surfaces, and restrooms are sanitized round-the-clock using child-safe, non-toxic sanitizing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Family Entertainment & Arcade Focus */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden aspect-4/3 shadow-2xl bg-[#0B1323] border border-white/10 group">
          <img
            src={APP_IMAGES.arcade}
            alt="Galaxy Arcade and Redemption Games"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-5">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8B24] bg-[#FF8B24]/10 px-3.5 py-1.5 rounded-full border border-[#FF8B24]/30">
            FAMILY ENTERTAINMENT // GAMING
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white leading-tight">
            Galaxy Arcade & Parent Observation Lounge
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Kids Planet is designed for the whole family! While children burn off limitless energy in the play maze, parents can either join them in the action or kick back in our Parent Lounge with complimentary high-speed Wi-Fi, comfortable charging tables, and clear 360-degree sightlines.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Our Galaxy Arcade features interactive air hockey, hoop shootouts, and modern family games where children earn electronic tickets to redeem for exciting prizes at our prize counter!
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('pricing')}
              className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#174A91] to-[#38BDF8] hover:brightness-110 shadow-lg shadow-[#174A91]/30 transition-all flex items-center gap-2"
            >
              <span>Explore Admission Pricing & Passes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Photo Gallery Spotlight */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Facility Photo Showcase
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Take a visual tour inside our modern Brownsburg entertainment center.
            </p>
          </div>
          <button
            onClick={() => onOpenLightbox(0)}
            className="text-xs font-mono font-bold text-[#38BDF8] hover:underline"
          >
            OPEN FULLSCREEN LIGHTBOX &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.slice(0, 4).map((img, i) => (
            <div
              key={i}
              onClick={() => onOpenLightbox(i)}
              className="relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer shadow-lg group border border-white/10 bg-[#0B1323]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs font-bold">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

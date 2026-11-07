/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, GALLERY_IMAGES } from '../data/mockData';
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
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Our Story & Mission
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight">
          Welcome to Kids Planet Fun
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Founded right here in Brownsburg, Indiana, Kids Planet Fun was built with a single heartfelt purpose: to give local families a safe, vibrant, and clean world of indoor adventure where kids can unplug, climb, laugh, and dream big.
        </p>
      </section>

      {/* Story & Rebuilding Resilience Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF8B24] uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            <Hammer className="w-3.5 h-3.5" />
            <span>Resilience & Community Spirit</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 leading-tight">
            Our Journey: Rebuilding Stronger for Indiana Families
          </h2>

          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              When a severe tornado struck our Brownsburg community, our facility sustained significant structural damage. While heartbreaking, the overwhelming love and encouragement from local families inspired us to not only rebuild, but reimagine Kids Planet Fun from the foundation up.
            </p>
            <p>
              Our 2026 Grand Reopening represents a total evolution: brand new multi-tier commercial play structures, high-velocity wave slides, expanded soft toddler spaces, hospital-grade antimicrobial filtration systems, and modern luxury birthday celebration suites.
            </p>
            <p className="font-semibold text-slate-800">
              We are deeply grateful for the patience of our community. Kids Planet is back — brighter, cleaner, and more magical than ever before!
            </p>
          </div>

          <div className="pt-2 flex items-center gap-6">
            <div>
              <p className="font-heading font-black text-3xl text-[#174A91]">15,000+</p>
              <p className="text-xs text-slate-500 font-medium">Sq Ft of Pure Fun</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="font-heading font-black text-3xl text-[#FF8B24]">100%</p>
              <p className="text-xs text-slate-500 font-medium">Padded & Enclosed</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="font-heading font-black text-3xl text-[#174A91]">Ages 0–14</p>
              <p className="text-xs text-slate-500 font-medium">Adventure For All</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 bg-slate-100">
          <img
            src="/src/assets/images/hero_indoor_playground_1794027338444.jpg"
            alt="Kids Planet Fun Playground Architecture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Mission & Core Values Bento */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Our Guiding Standards
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
            Our Mission & Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#174A91] flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">
              Uncompromising Safety
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every obstacle, slide, and netting barrier adheres strictly to ASTM safety standards for commercial indoor playgrounds. Soft padding covers every corner so kids can play without fear.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF8B24] flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">
              Active Physical Play
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              In a digital world dominated by screens, we give children an active arena to run, climb, balance, slide, and socialize, developing cardiovascular health and motor skills through joy.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-amber-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">
              Hospital-Grade Hygiene
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cleanliness is our superpower. Our ball pits, vinyl surfaces, and restrooms are sanitized round-the-clock using child-safe, non-toxic sanitizing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Family Entertainment & Arcade Focus */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden aspect-4/3 shadow-xl bg-slate-100">
          <img
            src="/src/assets/images/arcade_family_games_1794027340348.jpg"
            alt="Galaxy Arcade and Redemption Games"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-5">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF8B24] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Family Entertainment
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 leading-tight">
            Arcade Games & Parent Comfort
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Kids Planet is designed for the whole family! While children burn off limitless energy in the play maze, parents can either join them in the action or kick back in our Parent Lounge with complimentary high-speed Wi-Fi, comfortable charging tables, and clear 360-degree sightlines.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our Galaxy Arcade features interactive air hockey, hoop shootouts, and family games where children earn electronic tickets to redeem for exciting prizes at our prize counter!
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('pricing')}
              className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-[#174A91] hover:bg-[#113a73] shadow-md transition-all flex items-center gap-2"
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
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Facility Photo Showcase
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Take a visual tour inside our modern Brownsburg entertainment center.
            </p>
          </div>
          <button
            onClick={() => onOpenLightbox(0)}
            className="text-xs font-bold text-[#FF8B24] hover:underline"
          >
            Open Fullscreen Lightbox &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.slice(0, 4).map((img, i) => (
            <div
              key={i}
              onClick={() => onOpenLightbox(i)}
              className="relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer shadow-xs group"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs font-bold">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

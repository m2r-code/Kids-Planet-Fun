/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { ATTRACTIONS } from '../data/mockData';
import {
  Ticket,
  FileCheck2,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Wifi,
  Coffee,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';

interface PlaygroundPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (index: number) => void;
}

export const PlaygroundPage: React.FC<PlaygroundPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [filterAge, setFilterAge] = useState<string>('all');

  const filteredAttractions =
    filterAge === 'all'
      ? ATTRACTIONS
      : filterAge === 'toddlers'
      ? ATTRACTIONS.filter((a) => a.ageRange.includes('0–3') || a.ageRange.includes('All Ages'))
      : ATTRACTIONS.filter((a) => a.ageRange.includes('4–14') || a.ageRange.includes('All Ages'));

  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Attraction Guide
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight">
          Explore Our World of Adventure
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Over 15,000 square feet of multi-tiered climbing, diving into 50,000 sanitized balls, flying down racing wave slides, and playing in gentle toddler foam zones.
        </p>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setFilterAge('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterAge === 'all'
                ? 'bg-[#174A91] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All 6 Adventure Zones
          </button>
          <button
            onClick={() => setFilterAge('toddlers')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterAge === 'toddlers'
                ? 'bg-[#FF8B24] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Toddler-Friendly (Ages 0–3)
          </button>
          <button
            onClick={() => setFilterAge('bigKids')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterAge === 'bigKids'
                ? 'bg-[#174A91] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Ages 4–14 High Energy
          </button>
        </div>
      </section>

      {/* Attractions Detailed List */}
      <section className="space-y-16">
        {filteredAttractions.map((attr, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={attr.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300`}
            >
              {/* Media Column */}
              <div
                className={`lg:col-span-6 relative rounded-2xl overflow-hidden aspect-4/3 shadow-md bg-slate-100 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <img
                  src={attr.image}
                  alt={attr.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#174A91] text-[#FFD447] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {attr.badge}
                </div>
                <div className="absolute top-4 right-4 bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {attr.ageRange}
                </div>
              </div>

              {/* Text Information Column */}
              <div
                className={`lg:col-span-6 space-y-5 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#FF8B24] uppercase tracking-wider">
                    Zone 0{index + 1}
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                    {attr.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {attr.fullDesc}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2">
                  <p className="font-heading font-bold text-xs uppercase tracking-wider text-slate-800">
                    Zone Features:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {attr.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safety Highlight */}
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-start gap-2.5 text-xs text-amber-900">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Safety Guideline: </span>
                    <span>{attr.safetyNotes}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onNavigate('tickets')}
                    className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs text-white bg-[#FF8B24] hover:bg-[#e66c00] transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Book Session Passes</span>
                  </button>
                  <button
                    onClick={() => onNavigate('rules')}
                    className="text-xs font-bold text-slate-600 hover:text-[#174A91] transition-colors"
                  >
                    View All Safety Rules &rarr;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Parent Lounge & Café Comfort Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-[#FFD447] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10">
              For Parents & Caregivers
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl">
              Parent Lounge, High-Speed Wi-Fi & Café
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              We know parenting is hard work! While your kids burn energy safely, relax in our comfortable observation lounge equipped with plush seating, charging ports, and unobstructed sightlines across all zones.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <Wifi className="w-4 h-4 text-[#69C7F0] shrink-0" />
                <span>Complimentary Fast Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <Eye className="w-4 h-4 text-[#FFD447] shrink-0" />
                <span>360° Viewing Sightlines</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <Coffee className="w-4 h-4 text-[#FF8B24] shrink-0" />
                <span>Snack & Beverage Café</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3">
            <button
              onClick={() => onNavigate('waiver')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-900 bg-[#FFD447] hover:bg-[#ffcf33] transition-colors flex items-center justify-center gap-2"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Sign Online Waiver</span>
            </button>
            <p className="text-[11px] text-slate-400">Save 10 minutes at the front desk!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

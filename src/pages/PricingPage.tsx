/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, PricingItem, MultiPassItem } from '../types';
import {
  Ticket,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Calculator,
  Sliders,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  pricing: PricingItem[];
  multiPasses: MultiPassItem[];
  onOpenCMS: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  pricing,
  multiPasses,
  onOpenCMS,
}) => {
  const [selectedPass, setSelectedPass] = useState<number>(20);
  const [familyVisitsPerMonth, setFamilyVisitsPerMonth] = useState<number>(4);

  const activePass = multiPasses.find((p) => p.passes === selectedPass) || multiPasses[1];
  const regularWeekdayPrice = pricing.find((p) => p.id === 'weekday-child')?.price || 16;
  const regularCost = activePass.passes * regularWeekdayPrice;
  const savings = Math.max(0, regularCost - activePass.price);

  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Admission & Multi-Passes
          </span>
          <button
            onClick={onOpenCMS}
            className="text-xs font-semibold text-slate-500 hover:text-[#174A91] flex items-center gap-1 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-full transition-colors"
            title="Edit prices via CMS"
          >
            <Sliders className="w-3 h-3" />
            <span>CMS Edit</span>
          </button>
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight">
          Clear, Affordable Family Pricing
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Standard open play includes 90 minutes of unlimited access to our multi-level adventure maze, wave slides, ball pit blasters, and toddler haven.
        </p>
      </section>

      {/* Main Comparison Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {pricing.filter((p) => p.category !== 'socks').map((plan) => {
          const isWeekend = plan.category === 'weekend';
          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-8 bg-white border flex flex-col justify-between transition-all duration-300 ${
                isWeekend
                  ? 'border-[#FF8B24] ring-2 ring-[#FF8B24]/20 shadow-xl'
                  : 'border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              {isWeekend && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF8B24] text-white text-[11px] font-heading font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  Most Popular for Parties
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {plan.ageRange}
                  </span>
                  <span className="text-xs font-mono font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">
                    90 Minutes
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 py-2">
                  <span className="font-heading font-black text-5xl text-[#174A91]">
                    ${plan.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    / participant
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {plan.description}
                </p>

                {/* What's included checklist */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>90-Minute Open Play Session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Full Access: Maze, Slides & Ball Pit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Free Parent Wi-Fi & Lounge Access</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('tickets')}
                  className={`w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isWeekend
                      ? 'bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:from-[#f87807] hover:to-[#e66c00] text-white shadow-md shadow-orange-500/20'
                      : 'bg-[#174A91] hover:bg-[#113a73] text-white shadow-xs'
                  }`}
                >
                  <Ticket className="w-4 h-4" />
                  <span>Select & Buy Tickets</span>
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Grip Socks Notice Box */}
      <section className="bg-amber-50/70 border border-amber-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-500 text-white rounded-2xl shrink-0 mt-0.5">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-slate-900 text-base">
              Non-Slip Safety Grip Socks: $2.50 / pair
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              For cleanliness and participant traction, approved rubber-tread grip socks are mandatory on all play structures, wave slides, and trampolines. You can purchase them during online checkout or at our front desk, and bring them back on future visits!
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('rules')}
          className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white border border-amber-300 hover:bg-amber-100 transition-colors shrink-0"
        >
          View Safety Socks Policy &rarr;
        </button>
      </section>

      {/* MULTI-PASS SAVINGS PACKAGES & CALCULATOR */}
      <section className="bg-gradient-to-br from-slate-900 via-[#174A91] to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#FFD447] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Multi-Pass Punch Cards
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl">
            Save Big with Frequent Explorer Passes
          </h2>
          <p className="text-blue-100 text-sm">
            Shareable between siblings, friends, and family. Never expire! Perfect for active local Brownsburg families.
          </p>
        </div>

        {/* Multi-pass 3 options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {multiPasses.map((pass) => {
            const isSelected = selectedPass === pass.passes;
            return (
              <div
                key={pass.passes}
                onClick={() => setSelectedPass(pass.passes)}
                className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-white text-slate-900 border-[#FFD447] ring-4 ring-[#FFD447]/30 scale-102'
                    : 'bg-white/10 text-white border-white/15 hover:bg-white/15'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isSelected ? 'text-[#174A91]' : 'text-[#FFD447]'
                    }`}
                  >
                    {pass.popular ? 'Best Value Bundle' : 'Punch Pass'}
                  </span>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {pass.savings}
                  </span>
                </div>

                <h3 className="font-heading font-black text-3xl">
                  {pass.passes} Passes
                </h3>

                <div className="flex items-baseline gap-1 my-3">
                  <span className="font-heading font-extrabold text-4xl">
                    ${pass.price}
                  </span>
                  <span
                    className={`text-xs ${
                      isSelected ? 'text-slate-500' : 'text-blue-200'
                    }`}
                  >
                    (${pass.perVisit.toFixed(2)}/visit)
                  </span>
                </div>

                <p
                  className={`text-xs leading-relaxed ${
                    isSelected ? 'text-slate-600' : 'text-blue-100'
                  }`}
                >
                  Save compared to single admissions. Shareable among children in the same family.
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200/40">
                  <span
                    className={`text-xs font-bold flex items-center justify-between ${
                      isSelected ? 'text-[#174A91]' : 'text-white'
                    }`}
                  >
                    <span>{isSelected ? '✓ Selected Pass' : 'Click to select'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Savings Calculator Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-[#FFD447] text-slate-900 shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base">
                Your Savings with the {activePass.passes}-Pass Bundle:
              </h4>
              <p className="text-xs text-blue-100">
                Regular admission value: ${regularCost} · You pay: ${activePass.price} ·{' '}
                <strong className="text-[#FFD447] font-bold text-sm">You Save ${savings}!</strong>
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('tickets')}
            className="px-6 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-900 bg-[#FFD447] hover:bg-[#ffcf33] transition-colors shrink-0 shadow-md"
          >
            Purchase Multi-Pass Voucher
          </button>
        </div>
      </section>

      {/* Important Admission Conditions & Historical Price Notice */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          <AlertCircle className="w-4 h-4 text-slate-500" />
          <span>Admission Conditions & Policy Notes</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-600 leading-relaxed">
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1">
            <strong className="text-slate-900 block font-heading">Digital Waiver Requirement</strong>
            All minors must have a signed waiver executed by their parent or legal guardian prior to playground entry.
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1">
            <strong className="text-slate-900 block font-heading">Adult Guardian Supervision</strong>
            Children under 14 years old must be accompanied by an adult inside the building at all times.
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1">
            <strong className="text-slate-900 block font-heading">Reference Pricing Notice</strong>
            Prices shown represent published reference data. Exact opening promotions and rates may be updated in the CMS prior to official sessions.
          </div>
        </div>
      </section>
    </div>
  );
};

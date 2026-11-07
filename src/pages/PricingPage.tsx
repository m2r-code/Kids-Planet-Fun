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

  const activePass = multiPasses.find((p) => p.passes === selectedPass) || multiPasses[1];
  const regularWeekdayPrice = pricing.find((p) => p.id === 'weekday-child')?.price || 16;
  const regularCost = activePass.passes * regularWeekdayPrice;
  const savings = Math.max(0, regularCost - activePass.price);

  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-8 text-slate-100">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
            Admission & Multi-Passes
          </span>
          <button
            onClick={onOpenCMS}
            className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-full transition-colors border border-white/10"
            title="Edit prices via CMS"
          >
            <Sliders className="w-3 h-3 text-[#38BDF8]" />
            <span>CMS Edit</span>
          </button>
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white leading-tight">
          Clear, Affordable Family Pricing
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
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
              className={`relative rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 ${
                isWeekend
                  ? 'bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-[#FF8B24] ring-1 ring-[#FF8B24] shadow-2xl'
                  : 'bg-[#0B1323] border-white/10 hover:border-white/20'
              }`}
            >
              {isWeekend && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF8B24] text-white text-[10px] font-heading font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  Most Popular For Weekends
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    {plan.ageRange}
                  </span>
                  <span className="text-[10px] font-mono font-semibold bg-white/10 text-slate-300 px-2.5 py-0.5 rounded-full">
                    90 Minutes
                  </span>
                </div>

                <h3 className="font-heading font-black text-2xl text-white">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 py-2">
                  <span className="font-heading font-black text-5xl text-white">
                    ${plan.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    / participant
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {plan.description}
                </p>

                {/* What's included checklist */}
                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>90-Minute Open Play Session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>Full Access: Maze, Slides & Ball Pit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>Free Parent Wi-Fi & Lounge Access</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('tickets')}
                  className={`w-full py-3.5 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isWeekend
                      ? 'bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:scale-102 text-white shadow-lg shadow-orange-500/20'
                      : 'bg-white/10 hover:bg-white/20 text-white'
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
      <section className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-500 text-slate-950 rounded-2xl shrink-0 mt-0.5">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-heading font-black text-white text-base">
              Non-Slip Safety Grip Socks: $2.50 / pair
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              For cleanliness and participant traction, approved rubber-tread grip socks are mandatory on all play structures, wave slides, and trampolines. You can purchase them during online checkout or at our front desk, and bring them back on future visits!
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('rules')}
          className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-colors shrink-0"
        >
          View Safety Socks Policy &rarr;
        </button>
      </section>

      {/* MULTI-PASS SAVINGS PACKAGES & CALCULATOR */}
      <section className="bg-gradient-to-br from-[#0B1323] via-[#0F172A] to-[#070B14] border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black text-[#FFD447] uppercase tracking-wider bg-yellow-500/10 px-3.5 py-1.5 rounded-full border border-yellow-500/20">
            Multi-Pass Punch Cards
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
            Save Big with Frequent Explorer Passes
          </h2>
          <p className="text-slate-300 text-sm">
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
                    ? 'bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-sky-400 ring-2 ring-sky-400/40 scale-102 shadow-xl'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-wider ${
                      isSelected ? 'text-[#38BDF8]' : 'text-slate-400'
                    }`}
                  >
                    {pass.popular ? 'Best Value' : 'Punch Pass'}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {pass.savings}
                  </span>
                </div>

                <h3 className="font-heading font-black text-3xl text-white">
                  {pass.passes} Passes
                </h3>

                <div className="flex items-baseline gap-1 my-3">
                  <span className="font-heading font-black text-4xl text-white">
                    ${pass.price}
                  </span>
                  <span className="text-xs text-slate-400">
                    (${pass.perVisit.toFixed(2)}/visit)
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Steep savings compared to single admissions. Shareable among children in the same family.
                </p>

                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-xs font-bold text-[#38BDF8] flex items-center justify-between">
                    <span>{isSelected ? '✓ Selected' : 'Click to select'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Savings Calculator Box */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-[#FFD447] text-slate-950 shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base">
                Your Savings with the {activePass.passes}-Pass Bundle:
              </h4>
              <p className="text-xs text-slate-300">
                Regular admission value: ${regularCost} · You pay: ${activePass.price} ·{' '}
                <strong className="text-[#FFD447] font-bold text-sm">You Save ${savings}!</strong>
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('tickets')}
            className="px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-slate-950 bg-[#FFD447] hover:bg-[#ffcf33] transition-colors shrink-0 shadow-lg"
          >
            Purchase Multi-Pass Voucher
          </button>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <AlertCircle className="w-4 h-4 text-slate-400" />
          <span>Admission Conditions & Policy Notes</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-4 bg-[#0B1323] rounded-2xl border border-white/10 space-y-1">
            <strong className="text-white block font-heading">Digital Waiver Requirement</strong>
            All minors must have a signed waiver executed by their parent or legal guardian prior to playground entry.
          </div>
          <div className="p-4 bg-[#0B1323] rounded-2xl border border-white/10 space-y-1">
            <strong className="text-white block font-heading">Adult Guardian Supervision</strong>
            Children under 14 years old must be accompanied by an adult inside the building at all times.
          </div>
          <div className="p-4 bg-[#0B1323] rounded-2xl border border-white/10 space-y-1">
            <strong className="text-white block font-heading">Reference Pricing Notice</strong>
            Prices shown represent published reference data. Exact opening promotions and rates may be updated in the CMS prior to official sessions.
          </div>
        </div>
      </section>
    </div>
  );
};

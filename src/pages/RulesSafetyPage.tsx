/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  Baby,
  Users,
  UtensilsCrossed,
  Sparkles,
  TrendingDown,
  Activity,
  HeartPulse,
  FileCheck2,
  CheckCircle2,
} from 'lucide-react';

interface RulesSafetyPageProps {
  onNavigate: (page: PageId) => void;
}

export const RulesSafetyPage: React.FC<RulesSafetyPageProps> = ({ onNavigate }) => {
  const safetyRules = [
    {
      code: '01',
      title: 'Digital Liability Waiver',
      badge: 'MANDATORY // PRIOR TO ENTRY',
      icon: FileText,
      accentColor: 'text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10',
      description:
        'All children and adults participating in the playground, trampolines, or toddler areas must have an executed liability waiver on file. Legal guardians must sign for participants under age 18. Waivers can be signed online in 60 seconds.',
    },
    {
      code: '02',
      title: 'Certified Grip Socks',
      badge: 'HYGIENE // SLIP RESISTANCE',
      icon: ShieldCheck,
      accentColor: 'text-[#FF8B24] border-[#FF8B24]/30 bg-[#FF8B24]/10',
      description:
        'For sanitation and grip protection, all active jumpers and climbers must wear approved rubber-traction grip socks. Bare feet, street shoes, or regular slick socks are strictly prohibited on play structures.',
    },
    {
      code: '03',
      title: 'Active Adult Supervision',
      badge: 'PARENTAL RESPONSIBILITY',
      icon: Users,
      accentColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      description:
        'Kids Planet Fun is not a drop-off childcare center. Children under age 14 must have an adult caregiver (18+) on facility grounds at all times. Adults are welcome to supervise from the observation lounge or join inside structures with admission.',
    },
    {
      code: '04',
      title: 'Toddler Sanctuary Age Limit',
      badge: 'STRICTLY AGES 0–3 ONLY',
      icon: Baby,
      accentColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      description:
        'The Toddler Soft Play Zone is strictly reserved for infants and children aged 36 months and younger. Older siblings are not allowed in this zone to protect toddlers who are still mastering walking and crawling.',
    },
    {
      code: '05',
      title: 'Slide & Wave Chute Protocol',
      badge: 'COLLISION PREVENTION',
      icon: TrendingDown,
      accentColor: 'text-[#FFD447] border-[#FFD447]/30 bg-[#FFD447]/10',
      description:
        'Always slide feet-first in a seated position. Only one child is permitted per slide lane at a time. Never climb backwards up slides or wait in the landing chute. Clear the bottom exit immediately after landing.',
    },
    {
      code: '06',
      title: 'Trampoline Arena Protocols',
      badge: 'REBOUND CONTROL',
      icon: Activity,
      accentColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
      description:
        'Only one jumper is allowed per trampoline square to prevent collisions. Flips, head-first dives, and rough wrestling are strictly prohibited. Jumpers must always land on two feet or their bottom with control.',
    },
    {
      code: '07',
      title: 'Food, Drinks & Gum Policy',
      badge: 'CHOKING & ALLERGY HAZARD',
      icon: UtensilsCrossed,
      accentColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      description:
        'No food, candy, beverages, or chewing gum are permitted inside any play maze, ball pit, or trampoline area. All snacks and drinks must remain in designated café seating areas or private birthday rooms.',
    },
    {
      code: '08',
      title: 'Illness & Sanitization Standard',
      badge: 'FACILITY HYGIENE PLEDGE',
      icon: HeartPulse,
      accentColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      description:
        'Guests showing symptoms of fever, cough, stomach illness, or open wounds are requested to reschedule their visit. Our team cleans high-touch surfaces, handrails, and ball pits continuously with hospital-grade, non-toxic sanitizing solutions.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/10 px-3.5 py-1.5 rounded-full border border-[#38BDF8]/30">
          SAFETY PROTOCOLS // GUEST GUIDELINES
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white leading-tight">
          Rules & Safety Standards
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          At Kids Planet Fun, safety is the foundation of every smile. We enforce clear, consistent guidelines so every child can play, explore, and thrive with 100% peace of mind.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('waiver')}
            className="px-6 py-3.5 rounded-2xl font-mono font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:brightness-110 shadow-lg shadow-[#FF8B24]/20 inline-flex items-center gap-2"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>SIGN YOUR DIGITAL WAIVER ONLINE</span>
          </button>
        </div>
      </section>

      {/* Grid of Safety Rule Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {safetyRules.map((rule, idx) => {
          const Icon = rule.icon;
          return (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#0B1323] border border-white/10 hover:border-white/20 transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border ${rule.accentColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {rule.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-500">RULE // {rule.code}</span>
                  <h3 className="font-heading font-black text-xl text-white mt-0.5">
                    {rule.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {rule.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Monitored by certified floor attendants on duty</span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Restroom & Hygiene Guidelines */}
      <section className="bg-[#0B1323] rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-white">
              Restroom & Diaper Changing Etiquette
            </h3>
            <p className="text-xs text-slate-400">
              Maintaining spotless, family-friendly sanitary facilities for everyone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-5 bg-[#070B14] rounded-2xl border border-white/10 space-y-2">
            <strong className="text-white font-mono block text-xs tracking-wider uppercase text-[#38BDF8]">
              01 // CHANGING STATIONS
            </strong>
            <p className="text-slate-400">
              Diaper changes must strictly take place in our private family restrooms equipped with sanitized changing tables. Changing diapers in play areas or café seating is prohibited.
            </p>
          </div>
          <div className="p-5 bg-[#070B14] rounded-2xl border border-white/10 space-y-2">
            <strong className="text-white font-mono block text-xs tracking-wider uppercase text-[#FF8B24]">
              02 // SWIM DIAPERS & PULL-UPS
            </strong>
            <p className="text-slate-400">
              Toddlers who are not fully potty trained are required to wear snug-fitting pull-ups or swim-grade diapers under their clothes.
            </p>
          </div>
          <div className="p-5 bg-[#070B14] rounded-2xl border border-white/10 space-y-2">
            <strong className="text-white font-mono block text-xs tracking-wider uppercase text-[#FFD447]">
              03 // HANDWASHING STATIONS
            </strong>
            <p className="text-slate-400">
              Please encourage children to wash hands thoroughly with soap and warm water after using the restroom before returning to climbing mazes.
            </p>
          </div>
        </div>
      </section>

      {/* Final Action Callout */}
      <section className="rounded-3xl bg-gradient-to-r from-[#174A91] via-[#0B1323] to-[#FF8B24]/40 p-8 sm:p-12 text-white text-center space-y-5 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
        <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
          Complete Your Waiver Before You Arrive
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Save time in the lobby! Complete your digital signature now from your smartphone and your family will be checked in at express speed.
        </p>
        <button
          onClick={() => onNavigate('waiver')}
          className="px-8 py-3.5 rounded-2xl font-mono font-bold text-xs uppercase tracking-wider text-slate-900 bg-[#FFD447] hover:bg-[#ffcf33] shadow-lg shadow-yellow-500/20 inline-flex items-center gap-2"
        >
          <FileCheck2 className="w-4 h-4" />
          <span>SIGN YOUR DIGITAL WAIVER NOW</span>
        </button>
      </section>
    </div>
  );
};

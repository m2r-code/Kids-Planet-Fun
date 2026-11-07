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
      title: 'Digital Liability Waiver',
      badge: 'Mandatory Prior to Entry',
      icon: FileText,
      color: 'bg-blue-50 text-[#174A91] border-blue-200',
      description:
        'All children and adults participating in the playground, trampolines, or toddler areas must have an executed liability waiver on file. Legal guardians must sign for participants under age 18. Waivers can be signed online in 60 seconds.',
    },
    {
      title: 'Certified Grip Socks',
      badge: 'Hygiene & Slip Prevention',
      icon: ShieldCheck,
      color: 'bg-orange-50 text-[#FF8B24] border-orange-200',
      description:
        'For sanitation and grip protection, all active jumpers and climbers must wear approved rubber-traction grip socks. Bare feet, street shoes, or regular slick socks are strictly prohibited on play structures.',
    },
    {
      title: 'Active Adult Supervision',
      badge: 'Parental Responsibility',
      icon: Users,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description:
        'Kids Planet Fun is not a drop-off childcare center. Children under age 14 must have an adult caregiver (18+) on facility grounds at all times. Adults are welcome to supervise from the observation café or join inside the structures with admission.',
    },
    {
      title: 'Toddler Sanctuary Age Limit',
      badge: 'Strictly Ages 0–3 Only',
      icon: Baby,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      description:
        'The Toddler Soft Play Zone is strictly reserved for infants and children aged 36 months and younger. Older siblings are not allowed in this zone to protect toddlers who are still mastering walking and crawling.',
    },
    {
      title: 'Slide & Wave Chute Rules',
      badge: 'Collision Prevention',
      icon: TrendingDown,
      color: 'bg-yellow-50 text-amber-800 border-yellow-200',
      description:
        'Always slide feet-first in a seated position. Only one child is permitted per slide lane at a time. Never climb backwards up slides or wait in the landing chute. Clear the bottom exit immediately after landing.',
    },
    {
      title: 'Trampoline Court Protocols',
      badge: 'Energy & Rebound Safety',
      icon: Activity,
      color: 'bg-rose-50 text-rose-700 border-rose-200',
      description:
        'Only one jumper is allowed per trampoline square to prevent collisions. Flips, head-first dives, and rough wrestling are strictly prohibited. Jumpers must always land on two feet or their bottom with control.',
    },
    {
      title: 'Food, Drinks & Gum Policy',
      badge: 'Choking & Allergy Hazard',
      icon: UtensilsCrossed,
      color: 'bg-slate-50 text-slate-800 border-slate-200',
      description:
        'No food, candy, beverages, or chewing gum are permitted inside any play maze, ball pit, or trampoline area. All snacks and drinks must remain in designated café seating areas or private birthday rooms.',
    },
    {
      title: 'Illness & Sanitization Standard',
      badge: 'Community Health Pledge',
      icon: HeartPulse,
      color: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      description:
        'Guests showing symptoms of fever, cough, stomach illness, or open wounds are requested to reschedule their visit. Our team cleans high-touch surfaces, handrails, and ball pits continuously with hospital-grade, non-toxic sanitizing solutions.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Play Safely & Smartly
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight">
          Rules & Safety Standards
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          At Kids Planet Fun, safety is the foundation of every smile. We enforce clear, consistent guidelines so every child can play, explore, and thrive with peace of mind.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('waiver')}
            className="px-6 py-3 rounded-2xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:from-[#f87807] hover:to-[#e66c00] shadow-md shadow-orange-500/20 inline-flex items-center gap-2"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>SIGN YOUR DIGITAL WAIVER NOW</span>
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
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-[#174A91]/30 hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border ${rule.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {rule.badge}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-slate-900">
                  {rule.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {rule.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Enforced by certified safety attendants on duty</span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Restroom & Hygiene Guidelines */}
      <section className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#174A91] text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              Restroom & Diaper Changing Etiquette
            </h3>
            <p className="text-xs text-slate-500">
              Maintaining spotless, family-friendly sanitary facilities for everyone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 leading-relaxed">
          <div className="p-4 bg-white rounded-2xl border border-slate-200">
            <strong className="text-slate-900 font-heading block mb-1">
              Designated Changing Stations
            </strong>
            Diaper changes must strictly take place in our private family restrooms equipped with sanitary changing tables. Changing diapers in common play areas or café tables is prohibited.
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-200">
            <strong className="text-slate-900 font-heading block mb-1">
              Swim Diapers / Training Pants
            </strong>
            Toddlers who are not fully potty trained are required to wear snug-fitting pull-ups or swim-grade diapers under their clothes.
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-200">
            <strong className="text-slate-900 font-heading block mb-1">
              Handwashing Prior to Re-Entry
            </strong>
            Please encourage children to wash hands thoroughly with soap and warm water after using the restroom before returning to the climbing mazes.
          </div>
        </div>
      </section>

      {/* Final Action Callout */}
      <section className="rounded-3xl bg-gradient-to-r from-[#174A91] to-[#FF8B24] p-8 sm:p-12 text-white text-center space-y-5">
        <h3 className="font-heading font-black text-2xl sm:text-3xl">
          Complete Your Waiver Before You Arrive
        </h3>
        <p className="text-sm text-blue-100 max-w-xl mx-auto">
          Save time in the lobby! Complete your digital signature now from your smartphone and your family will be checked in at express speed.
        </p>
        <button
          onClick={() => onNavigate('waiver')}
          className="px-8 py-3.5 rounded-2xl font-heading font-black text-xs uppercase tracking-wider text-slate-900 bg-[#FFD447] hover:bg-[#ffcf33] shadow-lg shadow-yellow-500/20 inline-flex items-center gap-2"
        >
          <FileCheck2 className="w-4 h-4" />
          <span>SIGN YOUR DIGITAL WAIVER</span>
        </button>
      </section>
    </div>
  );
};

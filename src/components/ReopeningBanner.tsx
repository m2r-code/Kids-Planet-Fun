/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, X, Mail, CheckCircle2, Calendar, Hammer, HeartHandshake } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

interface ReopeningModalProps {
  isOpen: boolean;
  onClose: () => void;
  reopeningMode: boolean;
  onToggleReopeningMode: () => void;
}

export const ReopeningModal: React.FC<ReopeningModalProps> = ({
  isOpen,
  onClose,
  reopeningMode,
  onToggleReopeningMode,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    triggerConfetti();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B1323] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#174A91] via-[#0B1323] to-[#FF8B24]/40 p-6 text-white relative border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2 text-[#38BDF8] text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4" />
            <span>OFFICIAL FACILITY UPDATE // 2026</span>
          </div>
          <h3 className="font-heading font-black text-2xl text-white">
            Grand Reopening & Revitalization
          </h3>
          <p className="text-xs text-slate-300 mt-1 font-mono">
            Brownsburg, Indiana · Rebuilding stronger for our community
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-sm text-slate-300">
          <div className="flex items-start gap-3 bg-[#FF8B24]/10 p-4 rounded-2xl border border-[#FF8B24]/20">
            <Hammer className="w-5 h-5 text-[#FF8B24] shrink-0 mt-0.5" />
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Following severe weather and tornado damage, Kids Planet Fun is completing a full architectural renovation with upgraded 4-story play structures, safe toddler zones, and brand new interactive arcade games for our 2026 Grand Reopening!
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm">
              What’s Coming in the New Facility:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-[#070B14] rounded-xl border border-white/10 font-medium text-slate-300">
                ✨ Brand New 4-Story Play Maze
              </div>
              <div className="p-3 bg-[#070B14] rounded-xl border border-white/10 font-medium text-slate-300">
                🚀 High-Velocity Wave Slides
              </div>
              <div className="p-3 bg-[#070B14] rounded-xl border border-white/10 font-medium text-slate-300">
                🧸 Expanded Soft Play Toddler Haven
              </div>
              <div className="p-3 bg-[#070B14] rounded-xl border border-white/10 font-medium text-slate-300">
                🎉 Luxury Private Birthday Suites
              </div>
            </div>
          </div>

          {/* VIP Pass Signup Form */}
          <div className="bg-[#070B14] p-4 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#38BDF8] font-heading font-bold text-sm">
              <HeartHandshake className="w-4 h-4" />
              <span>Get the VIP Grand Reopening Invitation</span>
            </div>
            <p className="text-xs text-slate-400">
              Be the first to know the official opening date, get 20% off opening weekend passes, and priority booking for birthday parties!
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-semibold border border-emerald-500/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You’re on the VIP list! We will notify you with exclusive opening weekend passes.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-[#0B1323] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#38BDF8]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:brightness-110 text-white text-xs font-bold rounded-xl font-heading shadow-md transition-colors shrink-0 font-mono uppercase"
                >
                  Join VIP List
                </button>
              </form>
            )}
          </div>

          {/* Website Mode Switch */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Website Mode Demonstration:</span>
            <button
              onClick={onToggleReopeningMode}
              className="px-3 py-1.5 rounded-lg border border-white/15 font-semibold text-slate-200 hover:bg-white/10 transition-colors"
            >
              Mode: {reopeningMode ? 'Reopening Notice' : 'Fully Operational (Demo)'}
            </button>
          </div>
        </div>

        <div className="bg-[#070B14] p-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};

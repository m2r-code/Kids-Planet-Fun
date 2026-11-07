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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#174A91] via-[#1f5cb5] to-[#FF8B24] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2 text-[#FFD447] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Official Facility Update</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-white">
            2026 Grand Reopening & Revitalization
          </h3>
          <p className="text-sm text-blue-100 mt-1">
            Brownsburg, Indiana · Rebuilding stronger for our community
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-sm text-slate-600">
          <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-2xl border border-amber-200/80">
            <Hammer className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-amber-900 text-xs sm:text-sm leading-relaxed">
              Following severe weather and tornado damage, Kids Planet Fun is completing a full architectural renovation with upgraded 4-story play structures, safe toddler zones, and new arcade experiences for our 2026 Grand Reopening!
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading font-bold text-slate-900 text-sm">
              What’s Coming in the New Facility:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-medium text-slate-700">
                ✨ Brand New 4-Story Climbing Maze
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-medium text-slate-700">
                🚀 High-Velocity Wave Slides
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-medium text-slate-700">
                🧸 Expanded Toddler Soft Play Sanctuary
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-medium text-slate-700">
                🎉 Modern Private Birthday Suites
              </div>
            </div>
          </div>

          {/* VIP Pass Signup Form */}
          <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-100 space-y-3">
            <div className="flex items-center gap-2 text-[#174A91] font-heading font-bold text-sm">
              <HeartHandshake className="w-4 h-4" />
              <span>Get the VIP Grand Reopening Invitation</span>
            </div>
            <p className="text-xs text-slate-600">
              Be the first to know the official opening date, get 20% off opening weekend passes, and priority booking for birthday parties!
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FF8B24] hover:bg-[#e66c00] text-white text-xs font-bold rounded-xl font-heading shadow-xs transition-colors shrink-0"
                >
                  Join VIP List
                </button>
              </form>
            )}
          </div>

          {/* Website Mode Switch (Operational Preview vs Reopening Notice) */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Website Mode Demonstration:</span>
            <button
              onClick={onToggleReopeningMode}
              className="px-3 py-1.5 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Mode: {reopeningMode ? 'Reopening Notice' : 'Fully Operational (Demo)'}
            </button>
          </div>
        </div>

        <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, GiftCardOrder } from '../types';
import { triggerConfetti } from '../utils/confetti';
import {
  Gift,
  Sparkles,
  CheckCircle2,
  Send,
  CreditCard,
  QrCode,
  DollarSign,
  Heart,
  Smile,
  ShieldCheck,
  Check,
} from 'lucide-react';

interface GiftCardsPageProps {
  onNavigate: (page: PageId) => void;
}

export const GiftCardsPage: React.FC<GiftCardsPageProps> = ({ onNavigate }) => {
  const [selectedTheme, setSelectedTheme] = useState<'planet' | 'birthday' | 'cosmic'>('planet');
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);

  // Recipient & Sender Info
  const [recipientName, setRecipientName] = useState<string>('');
  const [recipientEmail, setRecipientEmail] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [message, setMessage] = useState<string>('Have a blast at Kids Planet Fun! Can’t wait to celebrate with you!');

  const [purchasedCard, setPurchasedCard] = useState<GiftCardOrder | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const activeAmount = isCustom ? parseFloat(customAmount) || 25 : amount;

  const themes = {
    planet: {
      name: 'Cosmic Adventure',
      gradient: 'from-[#0B1323] via-[#174A91] to-[#38BDF8]',
      badgeText: 'ADVENTURE PASS // VIP',
      badgeColor: 'bg-[#FFD447] text-slate-900',
    },
    birthday: {
      name: 'Birthday Splash',
      gradient: 'from-[#1a0f07] via-[#FF8B24] to-[#FFD447]',
      badgeText: 'HAPPY BIRTHDAY // VIP',
      badgeColor: 'bg-white text-[#FF8B24]',
    },
    cosmic: {
      name: 'Neon Galaxy Star',
      gradient: 'from-purple-950 via-[#174A91] to-[#38BDF8]',
      badgeText: 'CYBER EXPLORER // VIP',
      badgeColor: 'bg-[#38BDF8] text-slate-950',
    },
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientName || !recipientEmail || !senderName) {
      alert('Please fill out the recipient and sender details.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const code = `KP-GIFT-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`;
      const order: GiftCardOrder = {
        code,
        amount: activeAmount,
        theme: themes[selectedTheme].name,
        recipientName,
        recipientEmail,
        senderName,
        message,
        createdAt: new Date().toISOString(),
      };
      setPurchasedCard(order);
      triggerConfetti();
    }, 1000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8B24] bg-[#FF8B24]/10 px-3.5 py-1.5 rounded-full border border-[#FF8B24]/30">
          INSTANT DIGITAL PASS // GIFT CARDS
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white leading-tight">
          GIVE THE GIFT OF ADVENTURE!
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Surprise grandchildren, nieces, nephews, and friends with the ultimate gift of active play, wave slides, ball pits, and arcade thrills. Delivered instantly by email!
        </p>
      </section>

      {purchasedCard ? (
        /* Success Screen */
        <div className="max-w-2xl mx-auto bg-[#0B1323] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Gift Card Sent to {purchasedCard.recipientName}!
            </h3>
            <p className="text-sm text-slate-400">
              A digital voucher with code <strong className="text-[#38BDF8] font-mono">{purchasedCard.code}</strong> has been transmitted to <strong className="text-white font-mono">{purchasedCard.recipientEmail}</strong>.
            </p>
          </div>

          {/* Delivered Gift Card Visual Preview */}
          <div
            className={`max-w-md mx-auto aspect-16/10 rounded-3xl p-6 bg-gradient-to-br ${
              themes[selectedTheme].gradient
            } text-white shadow-2xl relative overflow-hidden flex flex-col justify-between text-left border border-white/20`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span
                  className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    themes[selectedTheme].badgeColor
                  }`}
                >
                  {themes[selectedTheme].badgeText}
                </span>
                <h4 className="font-heading font-black text-lg text-white mt-1">
                  KIDS PLANET FUN
                </h4>
              </div>
              <span className="font-heading font-black text-3xl text-[#FFD447]">
                ${purchasedCard.amount}
              </span>
            </div>

            <div className="space-y-1 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <p className="text-xs text-slate-300">
                To: <strong className="text-white">{purchasedCard.recipientName}</strong>
              </p>
              <p className="text-xs text-slate-300 italic line-clamp-2">
                "{purchasedCard.message}"
              </p>
            </div>

            <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-mono">
              <span className="text-[#FFD447] font-bold">{purchasedCard.code}</span>
              <span className="text-white/80">Never Expires</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setPurchasedCard(null);
                setRecipientName('');
                setRecipientEmail('');
              }}
              className="px-6 py-2.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              Send Another Gift Card
            </button>
            <button
              onClick={() => onNavigate('tickets')}
              className="px-6 py-2.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#174A91] to-[#38BDF8] hover:brightness-110 transition-colors"
            >
              Book Play Session &rarr;
            </button>
          </div>
        </div>
      ) : (
        /* Gift Card Customizer & Live Card Preview */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form: Theme & Amount Selection */}
          <div className="lg:col-span-7 bg-[#0B1323] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl space-y-6">
            {/* Theme Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8]">
                01 // CHOOSE CARD DESIGN:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['planet', 'birthday', 'cosmic'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTheme(t)}
                    className={`p-3.5 rounded-2xl border text-xs font-bold transition-all text-center ${
                      selectedTheme === t
                        ? 'border-[#38BDF8] bg-[#38BDF8]/15 text-white ring-2 ring-[#38BDF8]/30 shadow-lg'
                        : 'border-white/10 bg-[#070B14] text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <p className="font-heading">{themes[t].name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Value Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#FF8B24]">
                02 // SELECT GIFT CARD AMOUNT:
              </label>
              <div className="grid grid-cols-4 gap-2.5">
                {[25, 50, 75, 100].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmount(val);
                      setIsCustom(false);
                    }}
                    className={`py-3.5 rounded-xl font-heading font-bold text-sm transition-all ${
                      !isCustom && amount === val
                        ? 'bg-gradient-to-r from-[#174A91] to-[#38BDF8] text-white shadow-md border border-[#38BDF8]/30'
                        : 'bg-[#070B14] text-slate-300 border border-white/10 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>

              {/* Custom amount toggle */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setIsCustom(!isCustom)}
                  className="text-xs font-mono text-[#38BDF8] hover:underline"
                >
                  {isCustom ? '← Choose standard value' : '+ Enter custom amount'}
                </button>
                {isCustom && (
                  <div className="mt-2 flex items-center gap-2 max-w-xs">
                    <span className="font-bold text-[#FFD447] font-mono">$</span>
                    <input
                      type="number"
                      min="15"
                      max="500"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="e.g. 60"
                      className="w-full px-3 py-2 rounded-xl bg-[#070B14] border border-white/15 text-sm font-bold font-mono text-white focus:outline-none focus:border-[#38BDF8]"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Recipient & Sender Inputs */}
            <form onSubmit={handlePurchase} className="space-y-4 pt-4 border-t border-white/10">
              <h4 className="font-heading font-bold text-white text-sm flex items-center gap-2">
                <span className="text-[#FFD447] font-mono text-xs">03 //</span>
                <span>Recipient & Sender Parameters</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Recipient’s Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="e.g. Grandma, Lucas, Ava"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Recipient’s Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    placeholder="lucas@family.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name (Sender) *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Uncle David"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Delivery Method
                  </label>
                  <input
                    type="text"
                    disabled
                    value="Instant Digital Email Transmission"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#070B14] text-xs text-slate-400 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Personal Message
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a sweet birthday or adventure note..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#38BDF8]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:brightness-110 shadow-lg shadow-[#FF8B24]/20 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>GENERATING DIGITAL GIFT CARD...</span>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>PURCHASE ${activeAmount} GIFT CARD</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Live Card Graphic Preview */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8]">
                LIVE RENDER // CARD PREVIEW
              </span>
              <h4 className="font-heading font-bold text-white text-lg">
                Your Digital Gift Card Pass
              </h4>
            </div>

            {/* Card Graphic */}
            <div
              className={`aspect-16/10 rounded-3xl p-6 bg-gradient-to-br ${
                themes[selectedTheme].gradient
              } text-white shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-300 border border-white/20`}
            >
              {/* Card top row */}
              <div className="flex justify-between items-start">
                <div>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      themes[selectedTheme].badgeColor
                    }`}
                  >
                    {themes[selectedTheme].badgeText}
                  </span>
                  <h4 className="font-heading font-black text-xl text-white mt-1.5 tracking-tight">
                    KIDS PLANET FUN
                  </h4>
                  <p className="text-[10px] text-white/70 font-mono">Brownsburg, Indiana</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-white/70 block uppercase font-mono">Card Value</span>
                  <span className="font-heading font-black text-4xl text-[#FFD447]">
                    ${activeAmount}
                  </span>
                </div>
              </div>

              {/* Message preview */}
              <div className="space-y-1 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <p className="text-[11px] text-white/90">
                  To: <strong className="text-white">{recipientName || 'Recipient Name'}</strong>
                </p>
                <p className="text-[11px] text-white/80 italic line-clamp-2">
                  "{message || 'Adventure, laughter and unforgettable memories!'}"
                </p>
                <p className="text-[10px] text-right text-white/70 mt-0.5">
                  From: {senderName || 'Your Name'}
                </p>
              </div>

              {/* Card bottom footer */}
              <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-white/80">
                <span>VOUCHER CODE</span>
                <span className="font-bold text-[#FFD447]">KP-GIFT-PREVIEW</span>
              </div>
            </div>

            {/* Gift Card Benefits Box */}
            <div className="p-5 rounded-2xl bg-[#0B1323] border border-white/10 space-y-2 text-xs text-slate-400">
              <h5 className="font-mono font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>GIFT CARD SPECIFICATIONS</span>
              </h5>
              <p>• Valid for open play admission, multi-passes, grip socks, and birthday party deposits.</p>
              <p>• Digital cards never expire and carry zero maintenance fees.</p>
              <p>• Redeemable at our Brownsburg front desk or online during checkout.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

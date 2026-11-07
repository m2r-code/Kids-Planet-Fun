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
      gradient: 'from-[#174A91] via-[#1b5ab0] to-[#FF8B24]',
      badgeText: 'ADVENTURE PASS',
      badgeColor: 'bg-[#FFD447] text-slate-900',
    },
    birthday: {
      name: 'Birthday Splash',
      gradient: 'from-[#FF8B24] via-[#ff6b3d] to-[#FFD447]',
      badgeText: 'HAPPY BIRTHDAY',
      badgeColor: 'bg-white text-[#FF8B24]',
    },
    cosmic: {
      name: 'Neon Galaxy Star',
      gradient: 'from-purple-900 via-[#174A91] to-sky-500',
      badgeText: 'VIP EXPLORER',
      badgeColor: 'bg-[#69C7F0] text-slate-900',
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
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF8B24] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
          The Perfect Present
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight">
          GIVE THE GIFT OF FUN!
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Surprise grandchildren, nieces, nephews, and friends with the ultimate gift of active play, wave slides, ball pits, and arcade thrills. Delivered instantly by email!
        </p>
      </section>

      {purchasedCard ? (
        /* Success Screen */
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Gift Card Sent to {purchasedCard.recipientName}!
            </h3>
            <p className="text-sm text-slate-600">
              A digital voucher with code <strong>{purchasedCard.code}</strong> has been sent to <strong>{purchasedCard.recipientEmail}</strong>.
            </p>
          </div>

          {/* Delivered Gift Card Visual Preview */}
          <div
            className={`max-w-md mx-auto aspect-16/10 rounded-3xl p-6 bg-gradient-to-br ${
              themes[selectedTheme].gradient
            } text-white shadow-xl relative overflow-hidden flex flex-col justify-between text-left`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
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

            <div className="space-y-1">
              <p className="text-xs text-blue-100">
                To: <strong className="text-white">{purchasedCard.recipientName}</strong>
              </p>
              <p className="text-xs text-blue-100 italic line-clamp-2">
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
              className="px-6 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Send Another Gift Card
            </button>
            <button
              onClick={() => onNavigate('tickets')}
              className="px-6 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-[#174A91] hover:bg-[#113a73] transition-colors"
            >
              Book Play Session &rarr;
            </button>
          </div>
        </div>
      ) : (
        /* Gift Card Customizer & Live Card Preview */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form: Theme & Amount Selection */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            {/* Theme Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                1. Choose Card Design:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['planet', 'birthday', 'cosmic'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTheme(t)}
                    className={`p-3 rounded-2xl border text-xs font-bold transition-all text-center ${
                      selectedTheme === t
                        ? 'border-[#FF8B24] ring-2 ring-[#FF8B24]/20 bg-orange-50/50 text-slate-900 shadow-2xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <p className="font-heading">{themes[t].name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Value Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                2. Select Gift Card Amount:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[25, 50, 75, 100].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmount(val);
                      setIsCustom(false);
                    }}
                    className={`py-3 rounded-xl font-heading font-bold text-sm transition-all ${
                      !isCustom && amount === val
                        ? 'bg-[#174A91] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
                  className="text-xs font-semibold text-[#FF8B24] hover:underline"
                >
                  {isCustom ? '← Choose standard value' : '+ Enter custom amount'}
                </button>
                {isCustom && (
                  <div className="mt-2 flex items-center gap-2 max-w-xs">
                    <span className="font-bold text-slate-500">$</span>
                    <input
                      type="number"
                      min="15"
                      max="500"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="e.g. 60"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-bold font-mono focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Recipient & Sender Inputs */}
            <form onSubmit={handlePurchase} className="space-y-4 pt-2 border-t border-slate-100">
              <h4 className="font-heading font-bold text-slate-900 text-sm">
                3. Recipient & Sender Details
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Recipient’s Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="e.g. Grandma, Lucas, Ava"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Recipient’s Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    placeholder="lucas@family.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name (Sender) *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Uncle David"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Delivery Method
                  </label>
                  <input
                    type="text"
                    disabled
                    value="Instant Digital Email Delivery"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Personal Message
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a sweet birthday or adventure note..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:from-[#f87807] hover:to-[#e66c00] shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Generating Digital Gift Card...</span>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>Purchase ${activeAmount} Gift Card</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Live Card Graphic Preview */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Live Preview
              </span>
              <h4 className="font-heading font-bold text-slate-900 text-lg">
                Your Digital Gift Card
              </h4>
            </div>

            {/* Card Graphic */}
            <div
              className={`aspect-16/10 rounded-3xl p-6 bg-gradient-to-br ${
                themes[selectedTheme].gradient
              } text-white shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-300`}
            >
              {/* Card top row */}
              <div className="flex justify-between items-start">
                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      themes[selectedTheme].badgeColor
                    }`}
                  >
                    {themes[selectedTheme].badgeText}
                  </span>
                  <h4 className="font-heading font-black text-xl text-white mt-1.5 tracking-tight">
                    KIDS PLANET FUN
                  </h4>
                  <p className="text-[10px] text-white/80">Brownsburg, Indiana</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-white/70 block uppercase">Card Value</span>
                  <span className="font-heading font-black text-4xl text-[#FFD447]">
                    ${activeAmount}
                  </span>
                </div>
              </div>

              {/* Message preview */}
              <div className="space-y-1 bg-black/20 backdrop-blur-xs p-3 rounded-xl border border-white/10">
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
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
              <h5 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider">
                Gift Card Terms:
              </h5>
              <p>• Valid for open play admission, multi-passes, grip socks, and birthday party deposits.</p>
              <p>• Digital cards never expire and have no maintenance fees.</p>
              <p>• Redeemable in person at our Brownsburg front desk or online during checkout.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

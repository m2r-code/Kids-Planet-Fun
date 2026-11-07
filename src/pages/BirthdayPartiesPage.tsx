/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, PartyPackage } from '../types';
import { PARTY_PACKAGES, BUSINESS_INFO } from '../data/mockData';
import { APP_IMAGES } from '../assets/images';
import { triggerConfetti } from '../utils/confetti';
import {
  Calendar,
  Sparkles,
  CheckCircle2,
  Gift,
  Pizza,
  Gamepad2,
  Crown,
  Users,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  Zap,
} from 'lucide-react';

interface BirthdayPartiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (index: number) => void;
}

export const BirthdayPartiesPage: React.FC<BirthdayPartiesPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('gold-galaxy');
  const [selectedTheme, setSelectedTheme] = useState<string>('Space Explorers');
  const [partyDate, setPartyDate] = useState<string>('');
  const [childName, setChildName] = useState<string>('');
  const [childAge, setChildAge] = useState<number>(6);
  const [extraKids, setExtraKids] = useState<number>(0);
  const [addonPizza, setAddonPizza] = useState<boolean>(false);
  const [addonMascot, setAddonMascot] = useState<boolean>(false);
  const [addonGoodieBags, setAddonGoodieBags] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const activePackage =
    PARTY_PACKAGES.find((p) => p.id === selectedPackageId) || PARTY_PACKAGES[1];

  // Dynamic estimate calculation
  const basePrice = activePackage.price;
  const extraKidsCost = extraKids * 18;
  const pizzaCost = addonPizza ? 32 : 0; // 2 extra pizzas
  const mascotCost = addonMascot ? 45 : 0;
  const goodieCost = addonGoodieBags ? (activePackage.includedGuests + extraKids) * 4 : 0;
  const estimatedTotal = basePrice + extraKidsCost + pizzaCost + mascotCost + goodieCost;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partyDate || !childName) {
      alert('Please fill out the birthday child name and select a target date.');
      return;
    }
    setBookingSuccess(true);
    triggerConfetti();
  };

  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-8 text-slate-100">
      {/* Hero Header */}
      <section className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-r from-[#174A91] via-[#0F172A] to-[#FF8B24] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-14 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFD447] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              <Crown className="w-3.5 h-3.5" />
              <span>Stress-Free Celebrations</span>
            </span>

            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
              THE ULTIMATE BIRTHDAY ADVENTURE!
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-lg">
              Celebrate your child's special day at Brownsburg's premier indoor playground! Private celebration suites, dedicated party host, fresh pizza, and unlimited active fun.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#party-builder"
                className="px-7 py-3.5 rounded-2xl font-heading font-black text-xs uppercase tracking-wider text-slate-950 bg-[#FFD447] hover:bg-[#ffcf33] shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BUILD & RESERVE PARTY</span>
              </a>

              <button
                onClick={() => onOpenLightbox(2)}
                className="px-6 py-3.5 rounded-2xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
              >
                View Party Rooms
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-4/3 lg:aspect-auto lg:h-full min-h-[340px] relative">
            <img
              src={APP_IMAGES.birthday}
              alt="Birthday Party Room Celebration at Kids Planet"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#174A91] via-transparent to-transparent opacity-60 lg:opacity-75" />
          </div>
        </div>
      </section>

      {/* PARTY PACKAGES COMPARISON */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
            Choose Your Package
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
            Compare Birthday Packages
          </h2>
          <p className="text-slate-400 text-sm">
            All packages include grip socks, digital invitations, and a dedicated party host so parents can sit back and enjoy!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PARTY_PACKAGES.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-[#FF8B24] ring-1 ring-[#FF8B24] shadow-2xl'
                    : 'bg-[#0B1323] border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF8B24] text-white text-[10px] font-heading font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Up to {pkg.includedGuests} Children
                    </span>
                    <h3 className="font-heading font-black text-2xl text-white">
                      {pkg.title}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-1 py-1">
                    <span className="font-heading font-black text-5xl text-white">
                      ${pkg.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      / package
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-300 font-medium bg-white/5 p-2.5 rounded-xl border border-white/10">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{pkg.durationMinutes} Total Min</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#FF8B24]" />
                      <span>{pkg.includedGuests} Jumpers</span>
                    </span>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-white/10">
                  <a
                    href="#party-builder"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`w-full py-3.5 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-[#174A91] text-white shadow-md'
                        : pkg.popular
                        ? 'bg-[#FF8B24] hover:bg-[#e66c00] text-white shadow-md'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <span>{isSelected ? '✓ Selected in Builder' : 'Select This Package'}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PARTY THEMES */}
      <section className="bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-[#FF8B24] uppercase tracking-wider">
            Custom Atmosphere
          </span>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
            Exciting Party Themes
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Choose your child’s dream theme! We prepare matching tableware, napkins, and room backdrops.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {
              id: 'Space Explorers',
              name: 'Space & Galaxy',
              desc: 'Rockets, astronauts & glowing cosmic stars',
            },
            {
              id: 'Jungle Safari',
              name: 'Jungle Safari',
              desc: 'Tropical foliage, tigers & monkey fun',
            },
            {
              id: 'Princess & Superheroes',
              name: 'Royalty & Heroes',
              desc: 'Capes, crowns, action shields & magic',
            },
            {
              id: 'Neon Glow Extravaganza',
              name: 'Neon Glow Party',
              desc: 'Blacklights, neon balloons & glow sticks',
            },
          ].map((theme) => {
            const isThemeSelected = selectedTheme === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-1.5 ${
                  isThemeSelected
                    ? 'bg-[#1E293B] border-[#FF8B24] ring-2 ring-[#FF8B24]/40 scale-102 shadow-xl'
                    : 'bg-[#0B1323] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-sm text-white">
                    {theme.name}
                  </h4>
                  {isThemeSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#FF8B24]" />
                  )}
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">{theme.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE PARTY BUILDER */}
      <section
        id="party-builder"
        className="rounded-3xl border border-white/15 bg-[#0B1323] p-6 sm:p-10 shadow-2xl space-y-8 scroll-mt-24"
      >
        <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
              Step-by-Step Customizer
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mt-1">
              Customize Your Birthday Celebration
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Select date, customize guest count, add pizzas or mascots, and receive an instant estimate.
            </p>
          </div>

          <div className="bg-sky-500/10 text-[#38BDF8] px-4 py-2 rounded-xl border border-sky-500/20 text-xs font-bold">
            Only $100 Deposit Required to Reserve
          </div>
        </div>

        {bookingSuccess ? (
          <div className="p-8 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-black text-2xl text-emerald-200">
              Party Reservation Inquiry Received!
            </h4>
            <p className="text-sm text-slate-200 max-w-lg mx-auto">
              Hooray! We have saved your requested date (<strong>{partyDate}</strong>) for {childName}'s {childAge}th Birthday Celebration! Our dedicated Party Director will call you at your provided phone number to confirm your private room time slot and deposit.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => setBookingSuccess(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-300 bg-white/10 border border-white/10 hover:bg-white/20"
              >
                Modify Reservation
              </button>
              <button
                onClick={() => onNavigate('waiver')}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#174A91] hover:bg-[#113a73]"
              >
                Sign Digital Waiver &rarr;
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Package selector row */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Selected Package:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PARTY_PACKAGES.map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => setSelectedPackageId(p.id)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-left ${
                        selectedPackageId === p.id
                          ? 'border-sky-400 bg-white/10 text-white shadow-sm ring-1 ring-sky-400'
                          : 'border-white/10 text-slate-400 hover:bg-white/5'
                      }`}
                    >
                      <p className="font-heading truncate">{p.title}</p>
                      <p className="text-[11px] text-[#38BDF8] font-mono">${p.price}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Birthday Child info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Birthday Star’s Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="e.g. Liam, Emma"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-white/15 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Turning Age
                  </label>
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(parseInt(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-white/15 bg-[#0F172A] text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((age) => (
                      <option key={age} value={age}>
                        Turning {age} Years Old
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Extra Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Target Celebration Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={partyDate}
                    onChange={(e) => setPartyDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-white/15 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Additional Children (+$18/child)
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setExtraKids(Math.max(0, extraKids - 1))}
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-white"
                    >
                      -
                    </button>
                    <span className="font-heading font-bold text-base w-8 text-center text-white">
                      {extraKids}
                    </span>
                    <button
                      type="button"
                      onClick={() => setExtraKids(extraKids + 1)}
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-white"
                    >
                      +
                    </button>
                    <span className="text-xs text-slate-400">
                      Total: {activePackage.includedGuests + extraKids} kids
                    </span>
                  </div>
                </div>
              </div>

              {/* Addons Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Optional Add-Ons:
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addonPizza}
                      onChange={(e) => setAddonPizza(e.target.checked)}
                      className="w-4 h-4 text-[#FF8B24] rounded"
                    />
                    <div className="flex-1 flex justify-between text-xs text-slate-200">
                      <span>2 Extra Large Fresh Pizzas</span>
                      <span className="font-bold text-white">+$32</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addonMascot}
                      onChange={(e) => setAddonMascot(e.target.checked)}
                      className="w-4 h-4 text-[#FF8B24] rounded"
                    />
                    <div className="flex-1 flex justify-between text-xs text-slate-200">
                      <span>Kids Planet Mascot Character Appearance (20 min)</span>
                      <span className="font-bold text-white">+$45</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addonGoodieBags}
                      onChange={(e) => setAddonGoodieBags(e.target.checked)}
                      className="w-4 h-4 text-[#FF8B24] rounded"
                    />
                    <div className="flex-1 flex justify-between text-xs text-slate-200">
                      <span>Souvenir Goodie Bags ($4/each)</span>
                      <span className="font-bold text-white">
                        +${(activePackage.includedGuests + extraKids) * 4}
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#1E293B] to-[#0F172A] rounded-2xl p-6 border border-white/15 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h4 className="font-heading font-black text-lg text-white border-b border-white/10 pb-3">
                  Reservation Summary
                </h4>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <strong className="text-white font-semibold">{activePackage.title}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Theme:</span>
                    <span className="text-white font-semibold">{selectedTheme}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Included Participants:</span>
                    <span>{activePackage.includedGuests} children</span>
                  </div>
                  {extraKids > 0 && (
                    <div className="flex justify-between">
                      <span>Extra Guests ({extraKids} x $18):</span>
                      <span>+${extraKidsCost}</span>
                    </div>
                  )}
                  {addonPizza && (
                    <div className="flex justify-between">
                      <span>2 Extra Large Pizzas:</span>
                      <span>+$32</span>
                    </div>
                  )}
                  {addonMascot && (
                    <div className="flex justify-between">
                      <span>Mascot Appearance:</span>
                      <span>+$45</span>
                    </div>
                  )}
                  {addonGoodieBags && (
                    <div className="flex justify-between">
                      <span>Souvenir Goodie Bags:</span>
                      <span>+${goodieCost}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-heading font-bold text-sm text-slate-300">
                      Estimated Package Total:
                    </span>
                    <span className="font-heading font-black text-3xl text-white">
                      ${estimatedTotal}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 pt-1">
                    <span>Deposit Due Today to Hold Suite:</span>
                    <strong className="text-[#38BDF8] font-bold font-mono">$100.00</strong>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:scale-102 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Submit Birthday Inquiry</span>
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  Questions? Call party desk at {BUSINESS_INFO.phone}
                </p>
              </div>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};

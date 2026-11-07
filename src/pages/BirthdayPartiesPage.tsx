/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, PartyPackage } from '../types';
import { PARTY_PACKAGES, BUSINESS_INFO } from '../data/mockData';
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
  const depositDue = 100; // standard $100 party deposit

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
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Header */}
      <section className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#174A91] via-[#1c559c] to-[#FF8B24] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-14 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFD447] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              <Crown className="w-3.5 h-3.5" />
              <span>Stress-Free Celebrations</span>
            </span>

            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
              THE ULTIMATE BIRTHDAY ADVENTURE!
            </h1>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-lg">
              Celebrate your child's special day at Brownsburg's most exciting indoor playground! Private party rooms, dedicated host, fresh pizza, and non-stop active fun.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#party-builder"
                className="px-7 py-3.5 rounded-2xl font-heading font-black text-xs uppercase tracking-wider text-slate-900 bg-[#FFD447] hover:bg-[#ffcf33] shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BUILD & RESERVE PARTY</span>
              </a>

              <button
                onClick={() => onOpenLightbox(2)}
                className="px-6 py-3.5 rounded-2xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all"
              >
                View Party Rooms
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-4/3 lg:aspect-auto lg:h-full min-h-[340px] relative">
            <img
              src="/src/assets/images/birthday_party_room_1794027339445.jpg"
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
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Choose Your Package
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
            Compare Birthday Packages
          </h2>
          <p className="text-slate-600 text-sm">
            All packages include grip socks, digital invitations, and a dedicated party host so parents can sit back and celebrate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PARTY_PACKAGES.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 bg-white border flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'border-[#FF8B24] ring-2 ring-[#FF8B24]/20 shadow-xl'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF8B24] text-white text-[10px] font-heading font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Up to {pkg.includedGuests} Children
                    </span>
                    <h3 className="font-heading font-black text-2xl text-slate-900">
                      {pkg.title}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-1 py-1">
                    <span className="font-heading font-black text-5xl text-[#174A91]">
                      ${pkg.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      / package
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#174A91]" />
                      <span>{pkg.durationMinutes} Total Min</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#FF8B24]" />
                      <span>{pkg.includedGuests} Jumpers</span>
                    </span>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-100">
                  <a
                    href="#party-builder"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-[#174A91] text-white shadow-sm'
                        : pkg.popular
                        ? 'bg-[#FF8B24] hover:bg-[#e66c00] text-white shadow-sm'
                        : 'bg-blue-50 hover:bg-blue-100 text-[#174A91]'
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
      <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#FF8B24] uppercase tracking-wider">
            Custom Atmosphere
          </span>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
            Exciting Party Themes
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Choose your child’s dream theme! We prepare matching tableware, napkins, and room backdrops.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {
              id: 'Space Explorers',
              name: 'Space & Galaxy',
              desc: 'Rockets, astronauts & glowing cosmic stars',
              color: 'border-blue-300 bg-blue-50/50',
            },
            {
              id: 'Jungle Safari',
              name: 'Jungle Safari',
              desc: 'Tropical foliage, tigers & monkey fun',
              color: 'border-emerald-300 bg-emerald-50/50',
            },
            {
              id: 'Princess & Superheroes',
              name: 'Royalty & Heroes',
              desc: 'Capes, crowns, action shields & magic',
              color: 'border-purple-300 bg-purple-50/50',
            },
            {
              id: 'Neon Glow Extravaganza',
              name: 'Neon Glow Party',
              desc: 'Blacklights, neon balloons & glow sticks',
              color: 'border-amber-300 bg-amber-50/50',
            },
          ].map((theme) => {
            const isThemeSelected = selectedTheme === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all space-y-1.5 ${
                  theme.color
                } ${isThemeSelected ? 'ring-2 ring-[#FF8B24] border-[#FF8B24] scale-102 bg-white' : 'opacity-85 hover:opacity-100'}`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    {theme.name}
                  </h4>
                  {isThemeSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#FF8B24]" />
                  )}
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">{theme.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE PARTY BUILDER & RESERVATION INQUIRY */}
      <section
        id="party-builder"
        className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg space-y-8 scroll-mt-24"
      >
        <div className="border-b border-slate-100 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#174A91] uppercase tracking-wider">
              Step-by-Step Customizer
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mt-1">
              Customize Your Birthday Celebration
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select date, customize guest count, add pizzas or mascots, and receive an instant estimate.
            </p>
          </div>

          <div className="bg-blue-50 text-[#174A91] px-4 py-2 rounded-xl border border-blue-200/80 text-xs font-bold">
            Only $100 Deposit Required to Reserve
          </div>
        </div>

        {bookingSuccess ? (
          <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-black text-2xl text-emerald-950">
              Party Reservation Inquiry Received!
            </h4>
            <p className="text-sm text-emerald-800 max-w-lg mx-auto">
              Hooray! We have saved your requested date (<strong>{partyDate}</strong>) for {childName}'s {childAge}th Birthday Celebration! Our dedicated Party Director will call you at your provided phone number to confirm your private room time slot and deposit.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => setBookingSuccess(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50"
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
              {/* Package selector pill row */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
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
                          ? 'border-[#174A91] bg-blue-50 text-[#174A91] shadow-2xs'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <p className="font-heading truncate">{p.title}</p>
                      <p className="text-[11px] text-slate-500">${p.price}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Birthday Child info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Birthday Star’s Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="e.g. Liam, Emma"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Turning Age
                  </label>
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(parseInt(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#174A91]"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Target Celebration Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={partyDate}
                    onChange={(e) => setPartyDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Additional Children (+$18/child)
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setExtraKids(Math.max(0, extraKids - 1))}
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-800"
                    >
                      -
                    </button>
                    <span className="font-heading font-bold text-base w-8 text-center">
                      {extraKids}
                    </span>
                    <button
                      type="button"
                      onClick={() => setExtraKids(extraKids + 1)}
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-800"
                    >
                      +
                    </button>
                    <span className="text-xs text-slate-500">
                      Total: {activePackage.includedGuests + extraKids} kids
                    </span>
                  </div>
                </div>
              </div>

              {/* Addons Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Optional Add-Ons:
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addonPizza}
                      onChange={(e) => setAddonPizza(e.target.checked)}
                      className="w-4 h-4 text-[#FF8B24] rounded focus:ring-[#FF8B24]"
                    />
                    <div className="flex-1 flex justify-between text-xs">
                      <span className="font-medium text-slate-800">
                        2 Extra Large Pizzas (Cheese / Pepperoni)
                      </span>
                      <span className="font-bold text-slate-900">+$32</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addonMascot}
                      onChange={(e) => setAddonMascot(e.target.checked)}
                      className="w-4 h-4 text-[#FF8B24] rounded focus:ring-[#FF8B24]"
                    />
                    <div className="flex-1 flex justify-between text-xs">
                      <span className="font-medium text-slate-800">
                        Kids Planet Mascot Character Appearance (20 mins)
                      </span>
                      <span className="font-bold text-slate-900">+$45</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addonGoodieBags}
                      onChange={(e) => setAddonGoodieBags(e.target.checked)}
                      className="w-4 h-4 text-[#FF8B24] rounded focus:ring-[#FF8B24]"
                    />
                    <div className="flex-1 flex justify-between text-xs">
                      <span className="font-medium text-slate-800">
                        Souvenir Goodie Bags for every child ($4/each)
                      </span>
                      <span className="font-bold text-slate-900">
                        +${(activePackage.includedGuests + extraKids) * 4}
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h4 className="font-heading font-black text-lg text-slate-900 border-b border-slate-200 pb-3">
                  Reservation Summary
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Package:</span>
                    <strong className="text-slate-900 font-semibold">{activePackage.title}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Theme:</span>
                    <span className="text-slate-900 font-semibold">{selectedTheme}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Included Participants:</span>
                    <span>{activePackage.includedGuests} children</span>
                  </div>
                  {extraKids > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>Extra Guests ({extraKids} x $18):</span>
                      <span>+${extraKidsCost}</span>
                    </div>
                  )}
                  {addonPizza && (
                    <div className="flex justify-between text-slate-600">
                      <span>2 Extra Large Pizzas:</span>
                      <span>+$32</span>
                    </div>
                  )}
                  {addonMascot && (
                    <div className="flex justify-between text-slate-600">
                      <span>Mascot Appearance:</span>
                      <span>+$45</span>
                    </div>
                  )}
                  {addonGoodieBags && (
                    <div className="flex justify-between text-slate-600">
                      <span>Souvenir Goodie Bags:</span>
                      <span>+${goodieCost}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-heading font-bold text-sm text-slate-800">
                      Estimated Package Total:
                    </span>
                    <span className="font-heading font-black text-2xl text-[#174A91]">
                      ${estimatedTotal}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 pt-1">
                    <span>Deposit Due Today to Hold Room:</span>
                    <strong className="text-emerald-700 font-bold">$100.00</strong>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:from-[#f87807] hover:to-[#e66c00] shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Submit Birthday Inquiry</span>
                </button>
                <p className="text-[11px] text-center text-slate-500">
                  Questions? Call our party coordinator at {BUSINESS_INFO.phone}
                </p>
              </div>
            </div>
          </form>
        )}
      </section>

      {/* Birthday FAQ */}
      <section className="bg-blue-50/70 border border-blue-100 rounded-3xl p-6 sm:p-10 space-y-4">
        <h4 className="font-heading font-bold text-slate-900 text-lg">
          Birthday Party Frequently Asked Questions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
          <div className="p-4 bg-white rounded-xl border border-blue-100 space-y-1">
            <strong className="text-slate-900 block font-heading">Can I bring our own birthday cake?</strong>
            Yes! For booked party packages, you may bring a birthday cake, cupcakes, and fruit/veggie trays. Other outside prepared meals are not allowed.
          </div>
          <div className="p-4 bg-white rounded-xl border border-blue-100 space-y-1">
            <strong className="text-slate-900 block font-heading">What is the cancellation policy?</strong>
            Deposits are refundable up to 14 days prior to your reserved date. With at least 48 hours notice, deposits can be rescheduled to any available date within 6 months.
          </div>
          <div className="p-4 bg-white rounded-xl border border-blue-100 space-y-1">
            <strong className="text-slate-900 block font-heading">Do adults count towards the guest limit?</strong>
            No! Accompanying adults and grandparents are free to watch and celebrate in the party room. Only participating children jumping on structures count toward the total.
          </div>
          <div className="p-4 bg-white rounded-xl border border-blue-100 space-y-1">
            <strong className="text-slate-900 block font-heading">When can we arrive to set up?</strong>
            Your party host will welcome you 15 minutes before your scheduled reservation to place presents in the room and check in arriving guests.
          </div>
        </div>
      </section>
    </div>
  );
};

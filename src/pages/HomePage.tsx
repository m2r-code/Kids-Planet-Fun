/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, PricingItem, MultiPassItem } from '../types';
import {
  BUSINESS_INFO,
  ATTRACTIONS,
  GALLERY_IMAGES,
  FAQS,
  TESTIMONIALS,
} from '../data/mockData';
import {
  Ticket,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  ChevronDown,
  Gift,
  FileCheck2,
  Baby,
  Smile,
  Gamepad2,
  Calendar,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  pricing: PricingItem[];
  multiPasses: MultiPassItem[];
  onOpenLightbox: (index: number) => void;
  onOpenReopeningModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  pricing,
  multiPasses,
  onOpenLightbox,
  onOpenReopeningModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');

  const filteredFaqs =
    selectedFaqCategory === 'all'
      ? FAQS
      : FAQS.filter((f) => f.category === selectedFaqCategory);

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 2026 Reopening Notification Bar */}
      <div className="bg-gradient-to-r from-[#174A91] via-[#1b55a1] to-[#FF8B24] text-white py-3 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="p-1 rounded-md bg-[#FFD447] text-slate-900 font-bold text-[10px] uppercase">
              Notice
            </span>
            <p className="text-xs sm:text-sm font-medium">
              <span className="font-bold text-[#FFD447]">2026 Grand Reopening Update:</span> Rebuilding with brand-new 4-story play structures following tornado restoration.
            </p>
          </div>
          <button
            onClick={onOpenReopeningModal}
            className="text-xs font-bold text-white bg-white/20 hover:bg-white/30 px-3.5 py-1.5 rounded-lg transition-colors shrink-0"
          >
            VIP Reopening Pass & Info &rarr;
          </button>
        </div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative -mt-6 sm:-mt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[520px] lg:min-h-[620px] flex items-center">
            {/* Background Image */}
            <img
              src="/src/assets/images/hero_indoor_playground_1794027338444.jpg"
              alt="Kids Planet Fun Multi-Level Indoor Playground"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Scrim for high contrast readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-transparent sm:to-black/30" />

            {/* Hero Copy Content */}
            <div className="relative z-10 max-w-2xl px-6 sm:px-12 py-12 space-y-6 text-white">
              {/* Trust Signal / Location */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFD447] bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <MapPin className="w-3.5 h-3.5" />
                <span>Brownsburg, Indiana · Premier Family Entertainment</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-balance">
                BIG FUN.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD447] via-[#FF8B24] to-[#FF8B24]">
                  BIGGER SMILES.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                Adventure, laughter, and unforgettable memories start here. Explore our multi-level climbing maze, high-speed wave slides, deep ball pits, dedicated toddler haven, and private birthday party rooms.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('tickets')}
                  className="px-7 py-3.5 rounded-2xl font-heading font-bold text-base text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:from-[#f87807] hover:to-[#e66c00] shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5"
                >
                  <Ticket className="w-5 h-5" />
                  <span>BUY TICKETS NOW</span>
                </button>

                <button
                  onClick={() => onNavigate('playground')}
                  className="px-6 py-3.5 rounded-2xl font-heading font-bold text-sm text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 transition-all flex items-center gap-2 hover:scale-105"
                >
                  <span>EXPLORE OUR PLAYGROUND</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Key Highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD447]" />
                  <span>Ages 0–14 + Accompanying Adults</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD447]" />
                  <span>Hospital-Grade Sanitization</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD447]" />
                  <span>Sign Waiver Online</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXPERIENCE HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Play Experiences
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
            Six Epic Adventure Zones
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From towering climbing labyrinths to gentle baby soft-play, every corner of Kids Planet is engineered for safe, high-energy joy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ATTRACTIONS.map((attr) => (
            <div
              key={attr.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#174A91]/40 transition-all duration-300 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={attr.image}
                  alt={attr.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#174A91] shadow-xs">
                  {attr.badge}
                </div>
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-white">
                  {attr.ageRange}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-[#174A91] transition-colors">
                    {attr.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {attr.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('playground')}
                    className="text-xs font-bold text-[#FF8B24] group-hover:text-[#e66c00] flex items-center gap-1 transition-colors"
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Grip socks required
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: WHY FAMILIES LOVE KIDS PLANET */}
      <section className="bg-gradient-to-b from-[#FFF8EC] to-white py-16 sm:py-20 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF8B24] bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
                Safe & Certified Fun
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 leading-tight">
                Why Hendricks County Families Choose Kids Planet
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We designed Kids Planet Fun to be the cleanest, safest, and most exhilarating family entertainment center in Indiana. Parents relax with comfortable seating and free Wi-Fi, while children build confidence, physical agility, and lifelong friendships.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#174A91] text-white shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">
                      Commercial Safety Engineered
                    </h4>
                    <p className="text-xs text-slate-500">
                      Padded steel framework, impact absorbing foam, and certified anti-fall mesh barriers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#FF8B24] text-white shrink-0 mt-0.5">
                    <Baby className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">
                      Separate Gated Toddler Sanctuary
                    </h4>
                    <p className="text-xs text-slate-500">
                      Safe, gentle area restricted strictly to ages 0–3 to protect little crawlers from bigger kids.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#FFD447] text-slate-900 shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">
                      Pristine Cleanliness Protocol
                    </h4>
                    <p className="text-xs text-slate-500">
                      Ball pits and play zones sanitized with child-safe antibacterial hospital-grade systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials & Proof Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TESTIMONIALS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3"
                  >
                    <div className="flex items-center gap-1 text-[#FF8B24]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 italic leading-relaxed">
                      "{item.quote}"
                    </p>
                    <div className="pt-2 border-t border-slate-100">
                      <p className="font-heading font-bold text-xs text-slate-900">{item.author}</p>
                      <p className="text-[11px] text-slate-400">{item.role}</p>
                    </div>
                  </div>
                ))}

                {/* Stat Box */}
                <div className="p-6 rounded-3xl bg-[#174A91] text-white flex flex-col justify-center space-y-2">
                  <span className="font-heading font-black text-3xl text-[#FFD447]">100%</span>
                  <h4 className="font-heading font-bold text-sm">Parent Approved</h4>
                  <p className="text-xs text-blue-100">
                    Thousands of memorable birthday parties and rainy-day adventures hosted in Brownsburg.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BIRTHDAY PARTY PROMOTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#174A91] via-[#1a5ab3] to-[#FF8B24] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFD447] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Unforgettable Celebrations</span>
              </span>

              <h2 className="font-heading font-black text-3xl sm:text-5xl leading-tight">
                MAKE THEIR DAY <br className="hidden sm:inline" />
                EXTRA SPECIAL!
              </h2>

              <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-lg">
                Celebrate stress-free birthdays with private decorated party suites, dedicated party hosts, fresh pizza, grip socks, and unlimited play time. We handle setup, food, and cleanup!
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('parties')}
                  className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-slate-900 bg-[#FFD447] hover:bg-[#ffcf33] shadow-md shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>EXPLORE PARTY PACKAGES</span>
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-colors"
                >
                  <span>Inquire Private Rental</span>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative aspect-4/3 lg:aspect-auto lg:h-full min-h-[300px]">
              <img
                src="/src/assets/images/birthday_party_room_1794027339445.jpg"
                alt="Kids Birthday Celebration Party Room"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#174A91] via-transparent to-transparent opacity-60 lg:opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Admission Rates
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mt-2">
              Simple, Transparent Play Rates
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              90-minute sessions packed with limitless climbing, sliding, and jumping.
            </p>
          </div>

          <button
            onClick={() => onNavigate('pricing')}
            className="text-sm font-bold text-[#FF8B24] hover:text-[#e66c00] flex items-center gap-1.5"
          >
            <span>View Full Pricing & Multi-Passes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pricing.slice(0, 3).map((plan) => (
            <div
              key={plan.id}
              className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between ${
                plan.category === 'weekend'
                  ? 'border-[#FF8B24] ring-2 ring-[#FF8B24]/20 shadow-lg'
                  : 'border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {plan.ageRange}
                  </span>
                  {plan.category === 'weekend' && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FF8B24] text-white">
                      WEEKEND FAVORITE
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1">
                  <span className="font-heading font-black text-4xl text-[#174A91]">
                    ${plan.price}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    / 90-minute session
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  onClick={() => onNavigate('tickets')}
                  className={`w-full py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all ${
                    plan.category === 'weekend'
                      ? 'bg-[#FF8B24] hover:bg-[#e66c00] text-white shadow-sm'
                      : 'bg-blue-50 hover:bg-blue-100 text-[#174A91]'
                  }`}
                >
                  Book This Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Pass Banner Strip */}
        <div className="mt-8 p-6 rounded-3xl bg-blue-50/80 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#174A91] text-white shrink-0">
              <Ticket className="w-5 h-5 text-[#FFD447]" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-slate-900 text-sm">
                Frequent Explorer Multi-Pass Packages
              </h4>
              <p className="text-xs text-slate-600">
                Save up to $180 with 10, 20, or 30-visit shareable punch cards. Never expire!
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('pricing')}
            className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs text-white bg-[#174A91] hover:bg-[#113a73] transition-colors shrink-0"
          >
            Explore Pass Savings &rarr;
          </button>
        </div>
      </section>

      {/* SECTION 6: PHOTO GALLERY WITH LIGHTBOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Inside the Planet
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
            Adventure Gallery
          </h2>
          <p className="text-slate-600 text-sm">
            Click any photograph to view high-resolution facility views, party setups, and play zones.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox(idx)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-16/9' : 'aspect-4/3'
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#FFD447]">{img.category}</span>
                <h4 className="font-heading font-bold text-lg">{img.title}</h4>
                <p className="text-xs text-slate-200 line-clamp-1">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: VISIT US & LOCATION */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 rounded-3xl max-w-7xl mx-auto px-6 sm:px-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#FFD447] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10">
              Find Us In Brownsburg
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl leading-tight">
              Plan Your Visit To Kids Planet
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Conveniently located off Southpoint Circle in Brownsburg with ample free family parking. Just 15 minutes from Indianapolis and Avon!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF8B24] shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-white text-sm">
                    {BUSINESS_INFO.fullAddress}
                  </p>
                  <p className="text-xs text-slate-400">
                    Free parking available right in front of the main entrance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FF8B24] shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-white text-sm">
                    {BUSINESS_INFO.phone}
                  </p>
                  <p className="text-xs text-slate-400">
                    Call our guest service desk during operating hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FFD447] shrink-0 mt-0.5" />
                <div className="w-full max-w-sm">
                  <p className="font-heading font-bold text-white text-sm mb-1">
                    Standard Operating Hours:
                  </p>
                  <div className="space-y-1 text-xs text-slate-300">
                    {BUSINESS_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between border-b border-slate-800 pb-1">
                        <span>{h.days}</span>
                        <span className="font-mono text-slate-200">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={BUSINESS_INFO.socials.google}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs bg-[#FF8B24] hover:bg-[#e66c00] text-white transition-colors"
              >
                Open in Google Maps &rarr;
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
              >
                Directions & Parking Info
              </button>
            </div>
          </div>

          {/* Interactive Simulated Map Card */}
          <div className="lg:col-span-6 bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-lg">
            <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-slate-950 flex flex-col justify-between p-6">
              {/* Stylized Map Backdrop Graphic */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#69C7F0_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-[#FFD447]">Kids Planet Fun Navigation</span>
                <span>Brownsburg, IN 46112</span>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2 py-8">
                <div className="w-12 h-12 rounded-full bg-[#174A91] text-[#FFD447] border-2 border-[#FF8B24] flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-heading font-extrabold text-white text-base">
                  499 Southpoint Circle, Suite 101–102
                </h4>
                <p className="text-xs text-slate-300 max-w-xs">
                  Near Ronald Reagan Pkwy & E Main St. Plenty of parking space.
                </p>
              </div>

              <div className="relative z-10 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-700 flex items-center justify-between text-xs">
                <span className="text-slate-300">Lat: 39.8248° N · Lng: 86.3951° W</span>
                <a
                  href="https://maps.google.com/?q=499+Southpoint+Circle+Brownsburg+IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#69C7F0] font-bold hover:underline"
                >
                  Start Turn-by-Turn GPS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
            Everything You Need To Know
          </h2>
          <p className="text-slate-600 text-sm">
            Answers to common questions about admission, safety socks, waivers, and birthday parties.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'waivers', label: 'Waivers & Entry' },
              { id: 'safety', label: 'Safety & Socks' },
              { id: 'tickets', label: 'Tickets & Pricing' },
              { id: 'parties', label: 'Birthdays' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFaqCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedFaqCategory === tab.id
                    ? 'bg-[#174A91] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-slate-900 hover:text-[#174A91] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#174A91]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#174A91] via-[#1c59ab] to-[#FF8B24] p-10 sm:p-16 text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFD447] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Your Playground Awaits</span>
            </span>

            <h2 className="font-heading font-black text-3xl sm:text-5xl leading-tight">
              READY FOR YOUR NEXT ADVENTURE?
            </h2>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Book your play passes online now, fill out your digital waiver ahead of time, and get ready for BIG FUN and BIGGER SMILES!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('tickets')}
                className="px-8 py-4 rounded-2xl font-heading font-black text-sm uppercase tracking-wider text-white bg-[#FF8B24] hover:bg-[#e66c00] shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Ticket className="w-5 h-5" />
                <span>BUY TICKETS NOW</span>
              </button>

              <button
                onClick={() => onNavigate('waiver')}
                className="px-7 py-4 rounded-2xl font-heading font-bold text-sm text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all flex items-center gap-2 hover:scale-105"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>SIGN WAIVER IN ADVANCE</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

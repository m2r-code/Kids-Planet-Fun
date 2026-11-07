/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { triggerConfetti } from '../utils/confetti';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Car,
  MessageSquare,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      triggerConfetti();
    }, 600);
  };

  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/10 px-3.5 py-1.5 rounded-full border border-[#38BDF8]/30">
          COMMUNICATION HUB // CONTACT US
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white leading-tight">
          We’re Here to Help!
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Have a question about birthday party packages, group admission, or our 2026 reopening? Reach out to our Brownsburg guest operations team.
        </p>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info & Hours */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-[#0B1323] border border-white/10 shadow-xl space-y-6">
            <h3 className="font-heading font-bold text-xl text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <span className="text-[#38BDF8] font-mono text-xs">01 //</span>
              <span>Facility Command Information</span>
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#FF8B24]/10 text-[#FF8B24] border border-[#FF8B24]/20 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">Our Location</h4>
                  <p className="text-slate-400 text-xs mt-0.5">{BUSINESS_INFO.address}</p>
                  <p className="text-slate-400 text-xs">{BUSINESS_INFO.cityStateZip}</p>
                  <a
                    href={BUSINESS_INFO.socials.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#38BDF8] hover:underline mt-1.5"
                  >
                    <span>OPEN IN GOOGLE MAPS &rarr;</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">Direct Phone Line</h4>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-xs font-mono text-slate-300 hover:text-[#38BDF8] block mt-0.5"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-slate-500">Available during operating hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">Email Inquiries</h4>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-xs font-mono text-slate-300 hover:text-[#38BDF8] block mt-0.5"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-500">Replies typically within 24 business hours</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 font-mono font-bold text-white text-xs mb-3">
                  <Clock className="w-4 h-4 text-[#FFD447]" />
                  <span>FACILITY OPERATING SCHEDULE</span>
                </div>
                <div className="space-y-2 text-xs text-slate-400">
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between py-1 border-b border-white/5">
                      <span>{h.days}</span>
                      <span className="font-mono text-slate-200">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Parking & Accessibility Card */}
          <div className="p-6 rounded-2xl bg-[#0B1323] border border-white/10 space-y-2 text-xs text-slate-400">
            <h4 className="font-heading font-bold text-white text-sm flex items-center gap-2">
              <Car className="w-4 h-4 text-[#38BDF8]" />
              <span>Free Parking & Accessible Entrance</span>
            </h4>
            <p>
              Free surface parking surrounds Suites 101–102. Flat entry ramps and wide automated double doors provide simple stroller and wheelchair access.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#0B1323] rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-black text-2xl text-white">
                Message Transmitted Successfully!
              </h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Thank you for contacting Kids Planet Fun! Our guest operations team will review your message and reply promptly to <strong className="text-white font-mono">{formData.email}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: 'General Question',
                    message: '',
                  });
                }}
                className="px-6 py-2.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <h3 className="font-heading font-black text-2xl text-white">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out the parameters below and our concierge team will respond quickly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Miller"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(317) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Subject / Category
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white text-sm focus:outline-none focus:border-[#38BDF8]"
                  >
                    <option value="General Question">General Question</option>
                    <option value="Birthday Party Inquiry">Birthday Party Inquiry</option>
                    <option value="Group / Field Trip Reservation">Group / School Field Trip</option>
                    <option value="2026 Reopening VIP List">2026 Reopening VIP List</option>
                    <option value="Waiver Assistance">Waiver Assistance</option>
                    <option value="Employment Question">Employment Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we assist your family or group event?"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#38BDF8]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:brightness-110 shadow-lg shadow-[#FF8B24]/20 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>TRANSMITTING MESSAGE...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-[#38BDF8]">RADAR // SATELLITE MAP</span>
            <h3 className="font-heading font-black text-2xl text-white">
              Interactive Location Radar
            </h3>
          </div>
          <a
            href={BUSINESS_INFO.socials.google}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-bold text-[#FF8B24] hover:underline flex items-center gap-1"
          >
            <span>OPEN MAPS APP</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-96 relative bg-[#070B14]">
          <iframe
            title="Kids Planet Fun Location Map"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=499+Southpoint+Circle+Brownsburg+IN+46112&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>
    </div>
  );
};

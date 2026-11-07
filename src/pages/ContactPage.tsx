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
  Accessibility,
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
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Get in Touch
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight">
          We’re Here to Help!
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Have a question about birthday party packages, group admission, or our 2026 reopening? Reach out to our friendly Brownsburg team.
        </p>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info & Hours */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
            <h3 className="font-heading font-bold text-xl text-slate-900 border-b border-slate-100 pb-3">
              Facility Information
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-orange-50 text-[#FF8B24] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">Our Location</h4>
                  <p className="text-slate-600 text-xs mt-0.5">{BUSINESS_INFO.address}</p>
                  <p className="text-slate-600 text-xs">{BUSINESS_INFO.cityStateZip}</p>
                  <a
                    href={BUSINESS_INFO.socials.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#174A91] hover:underline mt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#174A91] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">Phone Support</h4>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-xs font-semibold text-slate-700 hover:text-[#174A91] block mt-0.5"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-slate-400">Available during operating hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">Email Inquiries</h4>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-xs font-semibold text-slate-700 hover:text-[#174A91] block mt-0.5"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-400">We respond within 24 business hours</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 font-heading font-bold text-slate-900 text-xs mb-2">
                  <Clock className="w-4 h-4 text-[#FF8B24]" />
                  <span>Standard Operating Hours:</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600">
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between py-0.5 border-b border-slate-100">
                      <span>{h.days}</span>
                      <span className="font-mono font-semibold text-slate-800">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Parking & Accessibility Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-600">
            <h4 className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
              <Car className="w-4 h-4 text-[#174A91]" />
              <span>Parking & Accessibility</span>
            </h4>
            <p>
              Free surface parking is available directly surrounding Suites 101–102. Accessible ramps and wide automatic front doors provide easy stroller and wheelchair access.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-black text-2xl text-slate-900">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for contacting Kids Planet Fun! A member of our management team will review your message and reach out to you shortly at <strong>{formData.email}</strong>.
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
                className="px-6 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <h3 className="font-heading font-black text-2xl text-slate-900">
                  Send Us a Message
                </h3>
                <p className="text-xs text-slate-500">
                  Fill out the form below and we'll reply promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Miller"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(317) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Subject / Department
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help make your family's visit memorable?"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:from-[#f87807] hover:to-[#e66c00] shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
          <h3 className="font-heading font-black text-2xl text-slate-900">
            Interactive Location Map
          </h3>
          <a
            href={BUSINESS_INFO.socials.google}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#FF8B24] hover:underline flex items-center gap-1"
          >
            <span>Open in Google Maps App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-96 relative bg-slate-100">
          <iframe
            title="Kids Planet Fun Location Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=499+Southpoint+Circle+Brownsburg+IN+46112&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>
    </div>
  );
};

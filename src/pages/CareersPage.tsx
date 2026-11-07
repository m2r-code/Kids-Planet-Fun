/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, JobApplication } from '../types';
import { triggerConfetti } from '../utils/confetti';
import {
  Briefcase,
  Smile,
  Clock,
  Heart,
  CheckCircle2,
  Upload,
  Send,
  Star,
  Users,
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Playground Attendant',
    experience: '',
    availability: 'Flexible (Weekdays & Weekends)',
    fileName: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('Playground Attendant');

  const openPositions = [
    {
      title: 'Playground Safety Attendant',
      type: 'Part-Time / Full-Time',
      pay: '$13.50 – $15.50 / hr + perks',
      summary:
        'Help keep our adventure mazes, ball pits, and wave slides fun and 100% safe. Welcome kids, enforce safety rules with a smile, and maintain our hospital-grade cleanliness standards.',
      responsibilities: [
        'Monitor active play structures, slides, and trampoline areas',
        'Verify grip socks and ensure children are following height & age guidelines',
        'Assist children with positive encouragement and first aid if needed',
        'Conduct routine clean-sweep hygiene passes across all zones',
      ],
      qualifications: [
        'Energetic, dependable, and loves working with children and families',
        'CPR/First Aid certification is a plus (we provide paid training)',
        'Ability to stand, walk, and stay active during scheduled shifts',
        'Weekend availability preferred',
      ],
    },
    {
      title: 'Birthday Party Host / Hostess',
      type: 'Part-Time (High Weekend Hours)',
      pay: '$14.00 – $16.00 / hr + Tips (Generous tip pool)',
      summary:
        'Be the rockstar host who turns every birthday into an unforgettable core memory! Guide families to private rooms, serve pizza and cake, organize games, and handle party setup and cleanup.',
      responsibilities: [
        'Set up personalized party room decor, tableware, and gift tables',
        'Greet birthday family VIPs and coordinate timeline with parents',
        'Serve pizza, drinks, and assist with cake presentation and singing',
        'Complete full sanitization turnaround between party reservations',
      ],
      qualifications: [
        'Outgoing, high-energy personality who brings joy to a room',
        'Strong organization skills and attention to detail',
        'Comfortable speaking with parents and coordinating groups',
        'Must be available on Fridays, Saturdays, and Sundays',
      ],
    },
    {
      title: 'Front Desk & Guest Services',
      type: 'Part-Time / Full-Time',
      pay: '$14.50 – $16.50 / hr',
      summary:
        'The welcoming smile of Kids Planet Fun! Check in arriving families, verify digital waivers, sell admission passes, and answer guest inquiries with warmth.',
      responsibilities: [
        'Operate POS system for ticket admissions, multi-passes, and grip socks',
        'Verify digital liability waivers on staff iPads',
        'Answer phone calls regarding hours, parties, and policies',
        'Manage arcade prize redemption counter and card reloads',
      ],
      qualifications: [
        'Customer-first mindset with exceptional communication skills',
        'Comfortable with touchscreen point-of-sale software',
        'Organized, friendly, and trustworthy',
      ],
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please complete all required fields.');
      return;
    }
    setSubmitted(true);
    triggerConfetti();
  };

  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF8B24] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
          We’re Hiring for our 2026 Reopening!
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight">
          JOIN OUR FUN TEAM!
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Looking for a fun, uplifting, and flexible job where your workday is filled with smiles and high fives? Kids Planet Fun is looking for enthusiastic individuals to join our Brownsburg family!
        </p>
      </section>

      {/* Perks & Culture Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
          <Smile className="w-6 h-6 text-[#FF8B24]" />
          <h4 className="font-heading font-bold text-slate-900 text-sm">Fun Work Environment</h4>
          <p className="text-xs text-slate-500">
            Say goodbye to boring desks. Work in an upbeat, cheerful, family-centered atmosphere.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
          <Clock className="w-6 h-6 text-[#174A91]" />
          <h4 className="font-heading font-bold text-slate-900 text-sm">Flexible Scheduling</h4>
          <p className="text-xs text-slate-500">
            Great shifts for students, second jobs, and parents looking for weekend or weekday hours.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
          <Star className="w-6 h-6 text-amber-500" />
          <h4 className="font-heading font-bold text-slate-900 text-sm">Competitive Pay + Tips</h4>
          <p className="text-xs text-slate-500">
            Great hourly wages, performance bonuses, and party host tips from delighted parents.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
          <Heart className="w-6 h-6 text-rose-500" />
          <h4 className="font-heading font-bold text-slate-900 text-sm">Free Play Passes</h4>
          <p className="text-xs text-slate-500">
            Complimentary admission passes for your immediate family and siblings, plus café discounts.
          </p>
        </div>
      </section>

      {/* Available Positions */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
            Open Opportunities
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Click a role to view responsibilities and pre-fill your application below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {openPositions.map((job, idx) => {
            const isSelected = selectedJob === job.title;
            return (
              <div
                key={idx}
                onClick={() => {
                  setSelectedJob(job.title);
                  setFormData({ ...formData, position: job.title });
                  const el = document.getElementById('application-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#174A91] ring-2 ring-[#174A91]/20 shadow-lg'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8B24] bg-orange-50 px-2.5 py-0.5 rounded-full">
                      {job.type}
                    </span>
                    <h4 className="font-heading font-bold text-xl text-slate-900 mt-2">
                      {job.title}
                    </h4>
                    <p className="text-xs font-semibold text-[#174A91] mt-0.5 font-mono">
                      {job.pay}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {job.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <p className="font-bold text-slate-800">Key Duties:</p>
                    {job.responsibilities.slice(0, 3).map((r, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-1.5 text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <span
                    className={`w-full py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#174A91] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>{isSelected ? 'Selected' : 'Apply for this Role'}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Online Application Form */}
      <section
        id="application-form"
        className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md scroll-mt-24"
      >
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#174A91]">
            Quick Online Application
          </span>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
            Submit Your Application
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Takes less than 2 minutes. We review applications daily and schedule interviews quickly.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-black text-2xl text-emerald-950">
              Application Submitted Successfully!
            </h4>
            <p className="text-sm text-emerald-800 max-w-md mx-auto">
              Thank you, <strong>{formData.fullName}</strong>! We have received your application for the <strong>{formData.position}</strong> position. Our hiring manager will contact you at {formData.email} or {formData.phone}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  position: 'Playground Attendant',
                  experience: '',
                  availability: 'Flexible (Weekdays & Weekends)',
                  fileName: '',
                });
              }}
              className="px-6 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-700 bg-white border border-slate-200 hover:bg-slate-50"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Jordan Miller"
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
                  placeholder="jordan@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(317) 000-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Position Applied For
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                >
                  <option value="Playground Safety Attendant">Playground Safety Attendant</option>
                  <option value="Birthday Party Host / Hostess">Birthday Party Host / Hostess</option>
                  <option value="Front Desk & Guest Services">Front Desk & Guest Services</option>
                  <option value="Shift Supervisor / Manager">Shift Supervisor / Manager</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Weekly Availability
                </label>
                <select
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                >
                  <option value="Flexible (Weekdays & Weekends)">Flexible (Weekdays & Weekends)</option>
                  <option value="Weekends Only (Fri, Sat, Sun)">Weekends Only (Fri, Sat, Sun)</option>
                  <option value="Weekday Mornings & Afternoons">Weekday Mornings & Afternoons</option>
                  <option value="Full-Time (35-40 hrs/wk)">Full-Time (35-40 hrs/wk)</option>
                  <option value="Part-Time (15-25 hrs/wk)">Part-Time (15-25 hrs/wk)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Resume Upload (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="resume"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-dashed border-slate-300 text-xs text-slate-600 bg-slate-50 hover:bg-slate-100 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className="truncate">
                      {formData.fileName || 'Upload PDF/Doc resume...'}
                    </span>
                    <Upload className="w-4 h-4 text-slate-400 shrink-0" />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Tell Us About Your Work Experience / Why Kids Planet? *
              </label>
              <textarea
                required
                rows={3}
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="Share any past jobs, babysitting, sports coaching, or why you’d love working with kids..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:from-[#f87807] hover:to-[#e66c00] shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Job Application</span>
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

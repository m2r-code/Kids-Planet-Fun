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
    position: 'Playground Safety Attendant',
    experience: '',
    availability: 'Flexible (Weekdays & Weekends)',
    fileName: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('Playground Safety Attendant');

  const openPositions = [
    {
      code: '01',
      title: 'Playground Safety Attendant',
      type: 'PART-TIME / FULL-TIME',
      pay: '$13.50 – $15.50 / hr + perks',
      summary:
        'Help keep our adventure mazes, ball pits, and wave slides fun and 100% safe. Welcome kids, enforce safety rules with high energy, and maintain our hospital-grade cleanliness standards.',
      responsibilities: [
        'Monitor active play structures, slides, and trampoline zones',
        'Verify grip socks and ensure children follow age guidelines',
        'Assist children with positive encouragement and first aid if needed',
        'Conduct routine clean-sweep hygiene passes across arenas',
      ],
      qualifications: [
        'Energetic, dependable, and loves working with children and families',
        'CPR/First Aid certification is a plus (we provide paid training)',
        'Ability to stand, walk, and stay active during shifts',
        'Weekend availability preferred',
      ],
    },
    {
      code: '02',
      title: 'Birthday Party Host / Hostess',
      type: 'PART-TIME (HIGH WEEKEND HOURS)',
      pay: '$14.00 – $16.00 / hr + Tips (Generous tip pool)',
      summary:
        'Be the rockstar host who turns every birthday into an unforgettable core memory! Guide families to private suites, serve refreshments, organize activities, and manage setup.',
      responsibilities: [
        'Set up personalized party room decor, tableware, and gift tables',
        'Greet birthday family VIPs and coordinate timeline with parents',
        'Serve pizza, drinks, and assist with cake ceremony and celebration',
        'Complete sanitization turnaround between party reservations',
      ],
      qualifications: [
        'Outgoing, high-energy personality who brings joy to a room',
        'Strong organization skills and attention to detail',
        'Comfortable speaking with parents and coordinating groups',
        'Must be available on Fridays, Saturdays, and Sundays',
      ],
    },
    {
      code: '03',
      title: 'Front Desk & Guest Concierge',
      type: 'PART-TIME / FULL-TIME',
      pay: '$14.50 – $16.50 / hr',
      summary:
        'The welcoming ambassador of Kids Planet Fun! Check in arriving families, verify digital waivers, issue RFID/admission passes, and assist guest inquiries with warmth.',
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
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8B24] bg-[#FF8B24]/10 px-3.5 py-1.5 rounded-full border border-[#FF8B24]/30">
          TEAM RECRUITMENT // 2026 GRAND REOPENING
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white leading-tight">
          JOIN OUR ADVENTURE SQUAD!
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Looking for an energetic, uplifting, and flexible career where your workday is filled with smiles, laughter, and high-fives? Kids Planet Fun is hiring for our Brownsburg flagship park!
        </p>
      </section>

      {/* Perks & Culture Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-2xl bg-[#0B1323] border border-white/10 space-y-2">
          <Smile className="w-6 h-6 text-[#FF8B24]" />
          <h4 className="font-heading font-bold text-white text-sm">High-Vibe Atmosphere</h4>
          <p className="text-xs text-slate-400">
            Say goodbye to boring desks. Work in an upbeat, active, family-centered entertainment facility.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#0B1323] border border-white/10 space-y-2">
          <Clock className="w-6 h-6 text-[#38BDF8]" />
          <h4 className="font-heading font-bold text-white text-sm">Flexible Scheduling</h4>
          <p className="text-xs text-slate-400">
            Great shifts for students, second jobs, and parents looking for weekend or weekday hours.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#0B1323] border border-white/10 space-y-2">
          <Star className="w-6 h-6 text-[#FFD447]" />
          <h4 className="font-heading font-bold text-white text-sm">Competitive Pay + Tips</h4>
          <p className="text-xs text-slate-400">
            Competitive hourly wages, performance incentives, and party host tip-pooling from thrilled parents.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#0B1323] border border-white/10 space-y-2">
          <Heart className="w-6 h-6 text-rose-400" />
          <h4 className="font-heading font-bold text-white text-sm">Complimentary Play Passes</h4>
          <p className="text-xs text-slate-400">
            Free admission passes for your immediate family and siblings, plus café and arcade discounts.
          </p>
        </div>
      </section>

      {/* Available Positions */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono text-[#38BDF8]">CAREER ROLES</span>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
            Open Positions & Squads
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Click a role to view specifications and pre-fill your application below.
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
                className={`p-6 sm:p-8 rounded-3xl bg-[#0B1323] border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#38BDF8] ring-2 ring-[#38BDF8]/20 shadow-xl shadow-[#38BDF8]/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF8B24] bg-[#FF8B24]/10 border border-[#FF8B24]/20 px-2.5 py-0.5 rounded-full">
                        {job.type}
                      </span>
                      <span className="font-mono text-xs text-slate-500">ROLE // {job.code}</span>
                    </div>
                    <h4 className="font-heading font-bold text-xl text-white mt-1">
                      {job.title}
                    </h4>
                    <p className="text-xs font-semibold text-[#38BDF8] mt-1 font-mono">
                      {job.pay}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {job.summary}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/10 text-xs">
                    <p className="font-mono text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                      Core Responsibilities:
                    </p>
                    {job.responsibilities.slice(0, 3).map((r, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-1.5 text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10">
                  <span
                    className={`w-full py-2.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#174A91] to-[#38BDF8] text-white shadow-md'
                        : 'bg-[#070B14] border border-white/10 text-slate-300 hover:text-white hover:border-white/25'
                    }`}
                  >
                    <span>{isSelected ? 'SELECTED FOR APPLICATION' : 'APPLY FOR THIS ROLE'}</span>
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
        className="max-w-3xl mx-auto bg-[#0B1323] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl scroll-mt-24"
      >
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8]">
            DIRECT APPLICATION FORM
          </span>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
            Submit Your Application
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Takes less than 2 minutes. We review applications daily and schedule interviews promptly.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-black text-2xl text-white">
              Application Transmitted Successfully!
            </h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.fullName}</strong>! We have received your candidacy for the <strong className="text-[#38BDF8]">{formData.position}</strong> role. Our hiring supervisor will contact you at {formData.email}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  position: 'Playground Safety Attendant',
                  experience: '',
                  availability: 'Flexible (Weekdays & Weekends)',
                  fileName: '',
                });
              }}
              className="px-6 py-2.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Jordan Miller"
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
                  placeholder="jordan@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#38BDF8]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(317) 000-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#38BDF8]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Position Applied For
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white text-sm focus:outline-none focus:border-[#38BDF8]"
                >
                  <option value="Playground Safety Attendant">Playground Safety Attendant</option>
                  <option value="Birthday Party Host / Hostess">Birthday Party Host / Hostess</option>
                  <option value="Front Desk & Guest Concierge">Front Desk & Guest Concierge</option>
                  <option value="Shift Supervisor / Manager">Shift Supervisor / Manager</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Weekly Availability
                </label>
                <select
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white text-sm focus:outline-none focus:border-[#38BDF8]"
                >
                  <option value="Flexible (Weekdays & Weekends)">Flexible (Weekdays & Weekends)</option>
                  <option value="Weekends Only (Fri, Sat, Sun)">Weekends Only (Fri, Sat, Sun)</option>
                  <option value="Weekday Mornings & Afternoons">Weekday Mornings & Afternoons</option>
                  <option value="Full-Time (35-40 hrs/wk)">Full-Time (35-40 hrs/wk)</option>
                  <option value="Part-Time (15-25 hrs/wk)">Part-Time (15-25 hrs/wk)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-dashed border-white/20 text-xs text-slate-400 bg-[#070B14] hover:bg-white/5 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className="truncate">
                      {formData.fileName || 'Upload PDF/Doc resume...'}
                    </span>
                    <Upload className="w-4 h-4 text-slate-500 shrink-0" />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Tell Us About Your Work Experience / Why Kids Planet? *
              </label>
              <textarea
                required
                rows={3}
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="Share any past jobs, babysitting, sports coaching, or why you'd love working with kids..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#38BDF8]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:brightness-110 shadow-lg shadow-[#FF8B24]/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>SUBMIT APPLICATION</span>
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

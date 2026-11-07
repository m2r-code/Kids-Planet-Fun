/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { PageId, WaiverSubmission } from '../types';
import { triggerConfetti } from '../utils/confetti';
import {
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Plus,
  Trash2,
  RotateCcw,
  QrCode,
  User,
  Baby,
} from 'lucide-react';

interface SignWaiverPageProps {
  onNavigate: (page: PageId) => void;
  onAddWaiver: (waiver: WaiverSubmission) => void;
  onOpenWaiverLookup: () => void;
}

export const SignWaiverPage: React.FC<SignWaiverPageProps> = ({
  onNavigate,
  onAddWaiver,
  onOpenWaiverLookup,
}) => {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [children, setChildren] = useState<Array<{ name: string; dob: string; relationship: string }>>([
    { name: '', dob: '', relationship: 'Child' },
  ]);

  const [agreed, setAgreed] = useState(false);
  const [submittedWaiver, setSubmittedWaiver] = useState<WaiverSubmission | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#38BDF8'; // High contrast cyan stroke for dark theme
  }, [submittedWaiver]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setHasSignature(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const addChild = () => {
    setChildren([...children, { name: '', dob: '', relationship: 'Child' }]);
  };

  const removeChild = (index: number) => {
    if (children.length <= 1) return;
    setChildren(children.filter((_, idx) => idx !== index));
  };

  const updateChild = (index: number, field: string, value: string) => {
    const updated = [...children];
    (updated[index] as any)[field] = value;
    setChildren(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!parentName || !email || !phone) {
      alert('Please fill out parent contact details.');
      return;
    }

    if (children.some((c) => !c.name || !c.dob)) {
      alert('Please provide the full name and date of birth for each child.');
      return;
    }

    if (!agreed) {
      alert('You must review and check the agreement box.');
      return;
    }

    if (!hasSignature) {
      alert('Please provide your digital signature using your mouse or finger on the signature pad.');
      return;
    }

    const waiverId = `KP-WAV-${Math.floor(10000 + Math.random() * 90000)}`;
    const newSubmission: WaiverSubmission = {
      id: waiverId,
      parentName,
      email,
      phone,
      address,
      children,
      signedAt: new Date().toISOString(),
      signatureDataUrl: canvasRef.current?.toDataURL() || '',
      agreeToTerms: true,
    };

    onAddWaiver(newSubmission);
    setSubmittedWaiver(newSubmission);
    triggerConfetti();
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto px-4 sm:px-6 py-8 text-slate-100">
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
          Official Digital Waiver
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-white leading-tight">
          Sign Participant Liability Waiver
        </h1>
        <p className="text-slate-300 text-sm sm:text-base">
          All guests entering Kids Planet Fun play structures must have a signed waiver on file. Valid for 12 full months for all listed children.
        </p>
      </section>

      {submittedWaiver ? (
        <div className="bg-[#0B1323] rounded-3xl border border-white/10 shadow-2xl p-8 sm:p-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Waiver Successfully Submitted & Stored!
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              Thank you, <strong>{submittedWaiver.parentName}</strong>. Your waiver is now active in our front-desk system for the next 12 months.
            </p>
          </div>

          <div className="max-w-md mx-auto p-6 bg-white/5 rounded-2xl border-2 border-dashed border-[#38BDF8] space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Verification Code
                </p>
                <p className="font-heading font-black text-2xl text-[#38BDF8]">
                  {submittedWaiver.id}
                </p>
              </div>
              <QrCode className="w-10 h-10 text-white" />
            </div>

            <div className="space-y-1.5 text-xs text-slate-300">
              <p>
                <strong className="text-white">Parent/Guardian:</strong> {submittedWaiver.parentName}
              </p>
              <p>
                <strong className="text-white">Contact:</strong> {submittedWaiver.phone} · {submittedWaiver.email}
              </p>
              <p>
                <strong className="text-white">Registered Minors ({submittedWaiver.children.length}):</strong>
              </p>
              <ul className="list-disc list-inside pl-1 text-slate-300">
                {submittedWaiver.children.map((c, i) => (
                  <li key={i}>
                    {c.name} (DOB: {c.dob})
                  </li>
                ))}
              </ul>
              <p className="pt-2 text-[11px] text-slate-500">
                Timestamp: {new Date(submittedWaiver.signedAt).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('tickets')}
              className="px-6 py-3 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] shadow-lg shadow-orange-500/25 hover:scale-105 transition-all"
            >
              Purchase Admission Passes &rarr;
            </button>
            <button
              onClick={onOpenWaiverLookup}
              className="px-5 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-white/10 border border-white/15 hover:bg-white/20 transition-colors"
            >
              Verify Waiver in Staff Lookup
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-[#0B1323] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl space-y-8"
        >
          {/* Section 1: Parent Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <User className="w-5 h-5 text-[#38BDF8]" />
              <h3 className="font-heading font-black text-xl text-white">
                1. Parent / Legal Guardian Information
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Amanda Clark"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="amanda@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(317) 000-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Home Address & City
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street, City, State, ZIP"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Minor Participants */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Baby className="w-5 h-5 text-[#FF8B24]" />
                <h3 className="font-heading font-black text-xl text-white">
                  2. Minor Participants Under 18
                </h3>
              </div>
              <button
                type="button"
                onClick={addChild}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Another Child</span>
              </button>
            </div>

            <div className="space-y-3">
              {children.map((child, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
                >
                  <div className="sm:col-span-5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Child Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={child.name}
                      onChange={(e) => updateChild(index, 'name', e.target.value)}
                      placeholder="First and last name"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-white/15 bg-[#0F172A] text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                    />
                  </div>

                  <div className="sm:col-span-4">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={child.dob}
                      onChange={(e) => updateChild(index, 'dob', e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-white/15 bg-[#0F172A] text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Relationship
                    </label>
                    <select
                      value={child.relationship}
                      onChange={(e) => updateChild(index, 'relationship', e.target.value)}
                      className="w-full px-2 py-2 text-xs rounded-lg border border-white/15 bg-[#0F172A] text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                    >
                      <option value="Child">Child</option>
                      <option value="Grandchild">Grandchild</option>
                      <option value="Ward">Ward</option>
                    </select>
                  </div>

                  <div className="sm:col-span-1 flex justify-end">
                    {children.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeChild(index)}
                        className="p-2 text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Legal Terms */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="font-heading font-black text-xl text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>3. Legal Assumption of Risk & Release</span>
            </h3>

            <div className="h-44 overflow-y-auto p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-3 leading-relaxed">
              <p className="font-bold text-white uppercase">
                PLEASE READ CAREFULLY. THIS IS A LEGALLY BINDING DOCUMENT.
              </p>
              <p>
                In consideration of being allowed to enter the facilities and participate in activities provided by Kids Planet Fun LLC ("Kids Planet Fun"), located at 499 Southpoint Circle, Brownsburg, Indiana:
              </p>
              <p>
                1. <strong>Assumption of Risk:</strong> I acknowledge that active play on indoor climbing mazes, ball pits, high wave slides, and trampolines involves physical motion and inherent risks of slips, falls, and contact with other participants. I voluntarily assume all known and unknown risks on behalf of myself and the minor participants listed above.
              </p>
              <p>
                2. <strong>Rules & Supervision:</strong> I agree to strictly observe all posted safety guidelines, socks requirements, and verbal instructions provided by Kids Planet staff. Children under 14 must have an adult guardian present on the premises.
              </p>
              <p>
                3. <strong>Release & Indemnification:</strong> I release, waive, and hold harmless Kids Planet Fun LLC, its owners, and employees from any and all claims or injuries arising from participation in playground activities, to the fullest extent permitted by Indiana law.
              </p>
            </div>

            <label className="flex items-start gap-3 p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 text-[#38BDF8] rounded mt-0.5"
              />
              <span className="text-xs text-sky-100 font-semibold leading-relaxed">
                I certify that I am the parent or legal guardian of the participants listed above, that I am at least 18 years of age, and that I have read, understood, and agreed to this liability release.
              </span>
            </label>
          </div>

          {/* Section 4: Signature Canvas */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Digital Signature *
                </label>
                <p className="text-[11px] text-slate-400">
                  Draw with your mouse, trackpad, or finger
                </p>
              </div>

              <button
                type="button"
                onClick={clearSignature}
                className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            </div>

            <div className="border-2 border-dashed border-white/20 rounded-2xl overflow-hidden bg-[#070D1A] relative">
              <canvas
                ref={canvasRef}
                width={700}
                height={160}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full h-40 cursor-crosshair touch-none"
              />
              {!hasSignature && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-xs text-slate-500 font-medium">
                  ✍️ Draw your digital signature here
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-500">
              Submitted at {new Date().toLocaleDateString()} · Electronic signature enforceable under Indiana law.
            </p>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl font-heading font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#174A91] via-[#0284c7] to-[#FF8B24] hover:scale-102 transition-all flex items-center justify-center gap-2 shadow-xl shadow-sky-500/20"
            >
              <FileCheck2 className="w-5 h-5" />
              <span>SUBMIT DIGITAL WAIVER</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

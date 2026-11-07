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
  Download,
  AlertTriangle,
  Info,
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
  // Parent Form Info
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // Children Participants
  const [children, setChildren] = useState<Array<{ name: string; dob: string; relationship: string }>>([
    { name: '', dob: '', relationship: 'Child' },
  ]);

  // Agreement
  const [agreed, setAgreed] = useState(false);
  const [submittedWaiver, setSubmittedWaiver] = useState<WaiverSubmission | null>(null);

  // Digital Signature Canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  // Setup canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#174A91';
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
    <div className="space-y-12 max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Official Digital Waiver
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 leading-tight">
          Sign Participant Liability Waiver
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          All guests entering Kids Planet Fun play structures must have a signed waiver on file. Valid for 12 full months for all listed children.
        </p>
      </section>

      {submittedWaiver ? (
        /* Success Screen */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Waiver Successfully Submitted & Stored!
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Thank you, <strong>{submittedWaiver.parentName}</strong>. Your waiver is now active in our front-desk system for the next 12 months.
            </p>
          </div>

          {/* Confirmation Voucher Box */}
          <div className="max-w-md mx-auto p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-[#174A91] space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Verification Code
                </p>
                <p className="font-heading font-black text-2xl text-[#174A91]">
                  {submittedWaiver.id}
                </p>
              </div>
              <QrCode className="w-10 h-10 text-slate-700" />
            </div>

            <div className="space-y-1.5 text-xs text-slate-600">
              <p>
                <strong className="text-slate-900">Parent/Guardian:</strong> {submittedWaiver.parentName}
              </p>
              <p>
                <strong className="text-slate-900">Contact:</strong> {submittedWaiver.phone} · {submittedWaiver.email}
              </p>
              <p>
                <strong className="text-slate-900">Registered Minors ({submittedWaiver.children.length}):</strong>
              </p>
              <ul className="list-disc list-inside pl-1 text-slate-700">
                {submittedWaiver.children.map((c, i) => (
                  <li key={i}>
                    {c.name} (DOB: {c.dob})
                  </li>
                ))}
              </ul>
              <p className="pt-2 text-[11px] text-slate-400">
                Timestamp: {new Date(submittedWaiver.signedAt).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('tickets')}
              className="px-6 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] shadow-md hover:scale-105 transition-all"
            >
              Purchase Admission Passes &rarr;
            </button>
            <button
              onClick={onOpenWaiverLookup}
              className="px-5 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-[#174A91] bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              Verify Waiver in Staff Lookup
            </button>
            <button
              onClick={() => {
                setSubmittedWaiver(null);
                setChildren([{ name: '', dob: '', relationship: 'Child' }]);
                clearSignature();
              }}
              className="px-5 py-3 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900"
            >
              Submit Another Waiver
            </button>
          </div>
        </div>
      ) : (
        /* Waiver Submission Form */
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8"
        >
          {/* Section 1: Parent / Guardian Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <User className="w-5 h-5 text-[#174A91]" />
              <h3 className="font-heading font-black text-xl text-slate-900">
                1. Parent / Legal Guardian Information
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Amanda Clark"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="amanda@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(317) 000-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Home Address & City
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street, City, State, ZIP"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Minor Participants Info */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Baby className="w-5 h-5 text-[#FF8B24]" />
                <h3 className="font-heading font-black text-xl text-slate-900">
                  2. Minor Participants Under 18
                </h3>
              </div>
              <button
                type="button"
                onClick={addChild}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#174A91] bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Another Child</span>
              </button>
            </div>

            <div className="space-y-3">
              {children.map((child, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
                >
                  <div className="sm:col-span-5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Child Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={child.name}
                      onChange={(e) => updateChild(index, 'name', e.target.value)}
                      placeholder="First and last name"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                    />
                  </div>

                  <div className="sm:col-span-4">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={child.dob}
                      onChange={(e) => updateChild(index, 'dob', e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Relationship
                    </label>
                    <select
                      value={child.relationship}
                      onChange={(e) => updateChild(index, 'relationship', e.target.value)}
                      className="w-full px-2 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                    >
                      <option value="Child">Child</option>
                      <option value="Grandchild">Grandchild</option>
                      <option value="Ward">Ward</option>
                      <option value="Relative">Relative</option>
                    </select>
                  </div>

                  <div className="sm:col-span-1 flex justify-end">
                    {children.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeChild(index)}
                        className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Remove child"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Legal Terms & Scrollable Agreement */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="font-heading font-black text-xl text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>3. Legal Assumption of Risk & Liability Release</span>
            </h3>

            <div className="h-44 overflow-y-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-3 leading-relaxed">
              <p className="font-bold text-slate-900 uppercase">
                PLEASE READ CAREFULLY. THIS IS A LEGALLY BINDING DOCUMENT.
              </p>
              <p>
                In consideration of being allowed to enter the playground facilities and participate in activities provided by Kids Planet Fun LLC ("Kids Planet Fun"), located at 499 Southpoint Circle, Brownsburg, Indiana:
              </p>
              <p>
                1. <strong>Assumption of Risk:</strong> I acknowledge that active play on indoor climbing mazes, ball pits, high wave slides, and trampolines involves physical motion and inherent risks of slips, falls, and contact with other participants. I voluntarily assume all known and unknown risks on behalf of myself and the minor participants listed above.
              </p>
              <p>
                2. <strong>Rules & Supervision:</strong> I agree to strictly observe all posted safety guidelines, socks requirements, and verbal instructions provided by Kids Planet staff. I understand that children under 14 must have an adult guardian present on the premises.
              </p>
              <p>
                3. <strong>Release & Indemnification:</strong> I release, waive, and hold harmless Kids Planet Fun LLC, its owners, operators, and employees from any and all claims, liabilities, or injuries arising from participation in playground activities, to the fullest extent permitted by Indiana law.
              </p>
              <p>
                4. <strong>Medical Consent:</strong> In the event of an emergency, I authorize staff to obtain professional medical treatment for the participants if I cannot be immediately reached.
              </p>
            </div>

            {/* Agreement Checkbox */}
            <label className="flex items-start gap-3 p-4 rounded-2xl bg-blue-50/80 border border-blue-200 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 text-[#174A91] rounded focus:ring-[#174A91] mt-0.5"
              />
              <span className="text-xs text-blue-950 font-semibold leading-relaxed">
                I certify that I am the parent or legal guardian of the participants listed above, that I am at least 18 years of age, and that I have read, understood, and agreed to this liability release.
              </span>
            </label>
          </div>

          {/* Section 4: Digital Signature Canvas */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800">
                  Digital Signature *
                </label>
                <p className="text-[11px] text-slate-400">
                  Sign with your mouse, trackpad, or finger on touch screens
                </p>
              </div>

              <button
                type="button"
                onClick={clearSignature}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-lg"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Signature</span>
              </button>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-2xl overflow-hidden bg-slate-50/50 relative">
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
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-xs text-slate-400 font-medium">
                  ✍️ Draw your signature here
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-400">
              Submitted at {new Date().toLocaleDateString()} · Electronic signature enforceable under the Indiana Electronic Transactions Act.
            </p>
          </div>

          {/* Submit Action */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl font-heading font-black text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#174A91] via-[#1b55a1] to-[#FF8B24] hover:from-[#133d77] hover:to-[#e66c00] shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
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

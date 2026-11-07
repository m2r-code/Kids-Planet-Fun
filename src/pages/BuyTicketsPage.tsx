/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, PricingItem, TicketOrder } from '../types';
import { triggerConfetti } from '../utils/confetti';
import {
  Calendar,
  Clock,
  Ticket,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  QrCode,
  Download,
  Share2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Printer,
  ChevronRight,
  Info,
} from 'lucide-react';

interface BuyTicketsPageProps {
  onNavigate: (page: PageId) => void;
  pricing: PricingItem[];
}

export const BuyTicketsPage: React.FC<BuyTicketsPageProps> = ({ onNavigate, pricing }) => {
  // Step state (1 to 4 in a smooth progressive stepper)
  const [step, setStep] = useState<number>(1);

  // Form selections
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [visitDate, setVisitDate] = useState<string>(defaultDateStr);
  const [timeSlot, setTimeSlot] = useState<string>('12:00 PM – 1:30 PM');

  // Quantities
  const [qtyRegular, setQtyRegular] = useState<number>(2); // 4-14
  const [qtyToddlerAdult, setQtyToddlerAdult] = useState<number>(1); // Under 3 or adult
  const [qtySocks, setQtySocks] = useState<number>(2); // $2.50 each

  // Customer Details
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  // Payment simulated fields
  const [cardNumber, setCardNumber] = useState<string>('•••• •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState<string>('12/28');
  const [cardCvc, setCardCvc] = useState<string>('888');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Generated Order
  const [completedOrder, setCompletedOrder] = useState<TicketOrder | null>(null);

  // Pricing calculations
  const selectedDay = new Date(visitDate + 'T00:00:00').getDay();
  const isWeekend = selectedDay === 0 || selectedDay === 6 || selectedDay === 5; // Fri, Sat, Sun
  const regularRate = isWeekend
    ? pricing.find((p) => p.id === 'weekend-child')?.price || 18
    : pricing.find((p) => p.id === 'weekday-child')?.price || 16;
  const toddlerAdultRate =
    pricing.find((p) => p.id === 'toddler-adult')?.price || 10;
  const sockRate = pricing.find((p) => p.id === 'grip-socks')?.price || 2.5;

  const ticketsSubtotal = qtyRegular * regularRate + qtyToddlerAdult * toddlerAdultRate;
  const socksSubtotal = qtySocks * sockRate;
  const subtotal = ticketsSubtotal + socksSubtotal;
  const tax = Math.round(subtotal * 0.07 * 100) / 100; // 7% Indiana sales tax
  const total = Math.round((subtotal + tax) * 100) / 100;

  const availableTimeSlots = [
    '10:00 AM – 11:30 AM',
    '12:00 PM – 1:30 PM',
    '2:00 PM – 3:30 PM',
    '4:00 PM – 5:30 PM',
    '6:00 PM – 7:30 PM',
  ];

  const handleNextToCustomer = () => {
    if (qtyRegular + qtyToddlerAdult < 1) {
      alert('Please select at least 1 participant pass.');
      return;
    }
    setStep(2);
  };

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert('Please fill out customer contact details.');
      return;
    }
    setStep(3);
  };

  const handleCompletePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const newOrder: TicketOrder = {
        orderId: `KP-${Math.floor(100000 + Math.random() * 900000)}`,
        visitDate,
        timeSlot,
        items: {
          regular: qtyRegular,
          toddlerAdult: qtyToddlerAdult,
          socks: qtySocks,
        },
        subtotal,
        tax,
        total,
        customer: { fullName, email, phone },
        createdAt: new Date().toISOString(),
      };
      setCompletedOrder(newOrder);
      setStep(4);
      triggerConfetti();
    }, 1200);
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#174A91] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Fast Online Booking
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 leading-tight">
          Book Play Session Passes
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Skip the lobby ticket queue! Select your date, choose your 90-minute session, and receive instant digital QR passes on your smartphone.
        </p>
      </section>

      {/* Stepper Progress Bar */}
      <div className="flex items-center justify-between max-w-md mx-auto text-xs font-bold">
        {[
          { num: 1, label: 'Date & Passes' },
          { num: 2, label: 'Guest Details' },
          { num: 3, label: 'Review & Pay' },
          { num: 4, label: 'Digital Passes' },
        ].map((s, idx) => (
          <React.Fragment key={s.num}>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-xs transition-colors ${
                  step === s.num
                    ? 'bg-[#174A91] text-white ring-4 ring-blue-100 shadow-sm'
                    : step > s.num
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
              </div>
              <span
                className={`text-[10px] hidden sm:inline ${
                  step === s.num ? 'text-[#174A91] font-bold' : 'text-slate-400'
                }`}
              >
                {s.label}
              </span>
            </div>
            {idx < 3 && (
              <div
                className={`flex-1 h-0.5 mx-2 ${
                  step > s.num ? 'bg-emerald-500' : 'bg-slate-200'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* STEP 1: DATE, TIME & TICKET QUANTITY */}
      {step === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Date & Quantity */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading font-black text-xl text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#174A91]" />
                <span>1. Select Visit Date & Time Slot</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Visit Date
                  </label>
                  <input
                    type="date"
                    value={visitDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91] font-semibold"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    {isWeekend ? 'Weekend rate applies ($18/child)' : 'Weekday rate applies ($16/child)'}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    90-Min Play Session Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                  >
                    {availableTimeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Ticket Quantities */}
            <div className="space-y-4 pt-2">
              <h3 className="font-heading font-black text-xl text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Ticket className="w-5 h-5 text-[#FF8B24]" />
                <span>2. Select Ticket Categories</span>
              </h3>

              {/* Item: Ages 4-14 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-sm text-slate-900">
                      Child Admission (Ages 4–14)
                    </span>
                    <span className="text-[10px] font-bold bg-blue-100 text-[#174A91] px-2 py-0.5 rounded-full">
                      90 Min
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Full access to 4-story maze, wave slides, ball pit blasters, trampolines
                  </p>
                  <p className="text-xs font-bold text-[#174A91] mt-1 font-mono">
                    ${regularRate}.00 each
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setQtyRegular(Math.max(0, qtyRegular - 1))}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-300 font-bold hover:bg-slate-100 text-slate-800"
                  >
                    -
                  </button>
                  <span className="w-7 text-center font-heading font-bold text-base">
                    {qtyRegular}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQtyRegular(qtyRegular + 1)}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-300 font-bold hover:bg-slate-100 text-slate-800"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Item: Toddler or Adult */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-sm text-slate-900">
                      Toddler (Under 3) or Accompanying Adult
                    </span>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                      Discounted
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Little crawlers (includes Toddler Zone) or adults entering equipment
                  </p>
                  <p className="text-xs font-bold text-[#174A91] mt-1 font-mono">
                    ${toddlerAdultRate}.00 each
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setQtyToddlerAdult(Math.max(0, qtyToddlerAdult - 1))}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-300 font-bold hover:bg-slate-100 text-slate-800"
                  >
                    -
                  </button>
                  <span className="w-7 text-center font-heading font-bold text-base">
                    {qtyToddlerAdult}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQtyToddlerAdult(qtyToddlerAdult + 1)}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-300 font-bold hover:bg-slate-100 text-slate-800"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Item: Non-Slip Grip Socks */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-sm text-slate-900">
                      Kids Planet Grip Socks
                    </span>
                    <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full">
                      Safety Required
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Mandatory for all jumpers. Reusable on your next visit!
                  </p>
                  <p className="text-xs font-bold text-[#FF8B24] mt-1 font-mono">
                    ${sockRate.toFixed(2)} / pair
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setQtySocks(Math.max(0, qtySocks - 1))}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-300 font-bold hover:bg-slate-100 text-slate-800"
                  >
                    -
                  </button>
                  <span className="w-7 text-center font-heading font-bold text-base">
                    {qtySocks}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQtySocks(qtySocks + 1)}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-300 font-bold hover:bg-slate-100 text-slate-800"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
            <h4 className="font-heading font-black text-xl text-slate-900 border-b border-slate-100 pb-3">
              Order Summary
            </h4>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span className="font-semibold text-slate-900 text-right">
                  {visitDate} ({timeSlot})
                </span>
              </div>
              {qtyRegular > 0 && (
                <div className="flex justify-between">
                  <span>Ages 4–14 ({qtyRegular}x ${regularRate}):</span>
                  <span className="font-mono text-slate-900">${qtyRegular * regularRate}.00</span>
                </div>
              )}
              {qtyToddlerAdult > 0 && (
                <div className="flex justify-between">
                  <span>Toddler/Adult ({qtyToddlerAdult}x ${toddlerAdultRate}):</span>
                  <span className="font-mono text-slate-900">${qtyToddlerAdult * toddlerAdultRate}.00</span>
                </div>
              )}
              {qtySocks > 0 && (
                <div className="flex justify-between">
                  <span>Grip Socks ({qtySocks}x ${sockRate.toFixed(2)}):</span>
                  <span className="font-mono text-slate-900">${(qtySocks * sockRate).toFixed(2)}</span>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal:</span>
                  <span className="font-mono">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>IN Sales Tax (7%):</span>
                  <span className="font-mono">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-slate-200">
                  <span className="font-heading font-bold text-base text-slate-900">
                    Grand Total:
                  </span>
                  <span className="font-heading font-black text-3xl text-[#174A91]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleNextToCustomer}
              className="w-full py-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:from-[#f87807] hover:to-[#e66c00] shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Continue to Customer Info</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-100 flex items-start gap-2 text-[11px] text-blue-900">
              <Info className="w-4 h-4 text-[#174A91] shrink-0 mt-0.5" />
              <span>
                Remember to fill out your liability waiver before entry. Digital passes are emailed immediately.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: CUSTOMER CONTACT DETAILS */}
      {step === 2 && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="space-y-1 border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#174A91]">
              Step 2 of 4
            </span>
            <h3 className="font-heading font-black text-2xl text-slate-900">
              Customer Contact Information
            </h3>
            <p className="text-xs text-slate-500">
              Where should we send your digital ticket QR code and order receipt?
            </p>
          </div>

          <form onSubmit={handleNextToPayment} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Parent / Guardian Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Jessica Taylor"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address (for QR pass) *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jessica@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(317) 555-0192"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center text-xs">
              <span className="text-slate-600">Total Due at Checkout:</span>
              <span className="font-heading font-black text-xl text-[#174A91]">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Session Selection</span>
              </button>

              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-[#174A91] hover:bg-[#113a73] shadow-md transition-all flex items-center gap-2"
              >
                <span>Proceed to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* STEP 3: PAYMENT / CHECKOUT SIMULATION */}
      {step === 3 && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="space-y-1 border-b border-slate-100 pb-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF8B24]">
                Step 3 of 4: Checkout
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                <span>Test Mode / Sandbox Checkout</span>
              </span>
            </div>
            <h3 className="font-heading font-black text-2xl text-slate-900">
              Payment Information
            </h3>
            <p className="text-xs text-slate-500">
              In accordance with safety guidelines, real credit cards are simulated in sandbox mode without external transaction processing.
            </p>
          </div>

          <form onSubmit={handleCompletePayment} className="space-y-5">
            {/* Quick Apple Pay / Google Pay button */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleCompletePayment({ preventDefault: () => {} } as any)}
                className="py-3 px-4 rounded-xl bg-black text-white text-xs font-bold font-heading hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span> Pay</span>
              </button>
              <button
                type="button"
                onClick={() => handleCompletePayment({ preventDefault: () => {} } as any)}
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold font-heading transition-colors flex items-center justify-center gap-1.5 border border-slate-300 shadow-xs"
              >
                <span className="text-blue-600 font-black">G</span>
                <span>Pay</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-white px-3 text-[11px] font-semibold text-slate-400 absolute">
                or pay with card
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
                <CreditCard className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Expires (MM/YY)
                </label>
                <input
                  type="text"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  CVC / Security Code
                </label>
                <input
                  type="text"
                  value={cardCvc}
                  onChange={(e) => setCardCvc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                />
              </div>
            </div>

            {/* Total Charge callout */}
            <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-200 flex justify-between items-center text-xs">
              <span className="text-blue-950 font-semibold">Total Authorized Amount:</span>
              <span className="font-heading font-black text-2xl text-[#174A91]">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={isProcessing}
                className="px-8 py-3.5 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8B24] to-[#f87807] hover:from-[#f87807] hover:to-[#e66c00] shadow-md shadow-orange-500/20 transition-all flex items-center gap-2"
              >
                {isProcessing ? (
                  <span>Generating Digital Pass...</span>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>Pay ${total.toFixed(2)} & Get Passes</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* STEP 4: ORDER CONFIRMATION & DIGITAL PASS */}
      {step === 4 && completedOrder && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-black text-2xl text-emerald-950">
              Booking Confirmed! You're Ready to Play!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800">
              Your passes have been confirmed and sent to <strong>{completedOrder.customer.email}</strong>. Present this digital pass or mention your confirmation number at the front desk upon arrival.
            </p>
          </div>

          {/* Digital Ticket Pass Card */}
          <div className="bg-white rounded-3xl border-2 border-dashed border-[#174A91] overflow-hidden shadow-xl">
            {/* Ticket Header */}
            <div className="bg-[#174A91] text-white p-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#FFD447] uppercase">
                  Official Admission Pass
                </span>
                <h4 className="font-heading font-black text-xl text-white">
                  KIDS PLANET FUN
                </h4>
                <p className="text-xs text-blue-100">Brownsburg, IN · 90-Min Play Session</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase text-blue-200">Confirmation</span>
                <p className="font-mono font-bold text-sm text-[#FFD447]">{completedOrder.orderId}</p>
              </div>
            </div>

            {/* Ticket Body with QR & Details */}
            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* QR Code Simulation */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <div className="w-36 h-36 bg-white p-2 rounded-xl shadow-xs border border-slate-200 flex flex-col items-center justify-center relative">
                  {/* Decorative QR Pattern */}
                  <div className="w-full h-full bg-[radial-gradient(#174A91_2px,transparent_2px)] [background-size:8px_8px] rounded flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md border border-slate-200">
                      <QrCode className="w-8 h-8 text-[#174A91]" />
                    </div>
                  </div>
                </div>
                <p className="font-mono text-[11px] font-bold text-slate-700 mt-2">
                  {completedOrder.orderId}
                </p>
                <span className="text-[10px] text-slate-400">Scan at entrance kiosk</span>
              </div>

              {/* Order Info */}
              <div className="sm:col-span-7 space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 font-bold uppercase text-[10px]">
                    Guest Name:
                  </span>
                  <p className="font-heading font-bold text-sm text-slate-900">
                    {completedOrder.customer.fullName}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px]">
                      Visit Date:
                    </span>
                    <p className="font-semibold text-slate-800">{completedOrder.visitDate}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px]">
                      Session Time:
                    </span>
                    <p className="font-semibold text-slate-800">{completedOrder.timeSlot}</p>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 font-bold uppercase text-[10px]">
                    Passes Included:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-0.5">
                    {completedOrder.items.regular > 0 && (
                      <span className="bg-blue-50 text-[#174A91] font-bold px-2 py-0.5 rounded text-[11px]">
                        {completedOrder.items.regular}x Child (4-14)
                      </span>
                    )}
                    {completedOrder.items.toddlerAdult > 0 && (
                      <span className="bg-amber-50 text-amber-800 font-bold px-2 py-0.5 rounded text-[11px]">
                        {completedOrder.items.toddlerAdult}x Toddler/Adult
                      </span>
                    )}
                    {completedOrder.items.socks > 0 && (
                      <span className="bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded text-[11px]">
                        {completedOrder.items.socks}x Grip Socks
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex justify-between text-slate-500">
                  <span>Paid Total:</span>
                  <strong className="text-slate-900 font-mono text-sm">
                    ${completedOrder.total.toFixed(2)}
                  </strong>
                </div>
              </div>
            </div>

            {/* Actions Toolbar */}
            <div className="bg-slate-50 p-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100 flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Pass</span>
                </button>
                <button
                  onClick={() => alert(`Simulated: Pass added to your mobile Apple/Google Wallet!`)}
                  className="px-3.5 py-1.5 rounded-lg bg-black text-white font-semibold hover:bg-slate-800 flex items-center gap-1.5"
                >
                  <span>Add to Apple Wallet</span>
                </button>
              </div>

              <button
                onClick={() => onNavigate('waiver')}
                className="text-xs font-bold text-[#FF8B24] hover:underline"
              >
                Sign Liability Waiver Next &rarr;
              </button>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                setStep(1);
                setCompletedOrder(null);
              }}
              className="text-xs text-slate-500 hover:text-slate-800 underline"
            >
              Book Another Play Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

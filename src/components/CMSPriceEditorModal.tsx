/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PricingItem, MultiPassItem } from '../types';
import { X, Save, RotateCcw, Check, DollarSign, Sliders, AlertCircle } from 'lucide-react';

interface CMSPriceEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  pricing: PricingItem[];
  multiPasses: MultiPassItem[];
  onUpdatePricing: (pricing: PricingItem[], multiPasses: MultiPassItem[]) => void;
  onResetPricing: () => void;
}

export const CMSPriceEditorModal: React.FC<CMSPriceEditorModalProps> = ({
  isOpen,
  onClose,
  pricing,
  multiPasses,
  onUpdatePricing,
  onResetPricing,
}) => {
  const [localPricing, setLocalPricing] = useState<PricingItem[]>(pricing);
  const [localPasses, setLocalPasses] = useState<MultiPassItem[]>(multiPasses);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync state when opened
  React.useEffect(() => {
    setLocalPricing(pricing);
    setLocalPasses(multiPasses);
    setSavedSuccess(false);
  }, [pricing, multiPasses, isOpen]);

  if (!isOpen) return null;

  const handlePriceChange = (id: string, newPrice: number) => {
    setLocalPricing((prev) =>
      prev.map((item) => (item.id === id ? { ...item, price: newPrice } : item))
    );
  };

  const handlePassChange = (passesCount: number, newPrice: number) => {
    setLocalPasses((prev) =>
      prev.map((item) =>
        item.passes === passesCount
          ? {
              ...item,
              price: newPrice,
              perVisit: Math.round((newPrice / item.passes) * 10) / 10,
            }
          : item
      )
    );
  };

  const handleSave = () => {
    onUpdatePricing(localPricing, localPasses);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    onResetPricing();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#174A91] text-[#FFD447]">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Content Management System (CMS) — Pricing Config
              </h3>
              <p className="text-xs text-slate-400">
                Staff & Manager portal: adjust live admission rates, passes & socks policies.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          <div className="flex items-start gap-2.5 p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-xs">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>
              All modifications apply in real time across the entire website, ticket checkout flow, and pricing calculators.
            </span>
          </div>

          {/* Standard Admission */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
              Single Session Admission Rates (90-Minute Play)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {localPricing.map((item) => (
                <div key={item.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-slate-900">{item.name}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-200 px-1.5 py-0.5 rounded">
                      {item.ageRange}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-bold">$</span>
                    <input
                      type="number"
                      step={item.category === 'socks' ? '0.50' : '1.00'}
                      min="0"
                      value={item.price}
                      onChange={(e) => handlePriceChange(item.id, parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 text-sm font-bold font-mono rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Multi-Pass Pricing */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
              Multi-Pass Bundle Pricing
            </h4>

            <div className="grid grid-cols-3 gap-3">
              {localPasses.map((pass) => (
                <div key={pass.passes} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-center space-y-2">
                  <span className="font-heading font-bold text-xs text-slate-800">
                    {pass.passes} Play Passes
                  </span>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-slate-500 font-bold">$</span>
                    <input
                      type="number"
                      value={pass.price}
                      onChange={(e) => handlePassChange(pass.passes, parseFloat(e.target.value) || 0)}
                      className="w-20 px-2 py-1 text-center font-mono font-bold text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#174A91]"
                    />
                  </div>
                  <p className="text-[10px] text-slate-500">${pass.perVisit}/visit</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Reference Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-[#174A91] hover:bg-[#113a73] rounded-xl shadow-xs transition-colors"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save CMS Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

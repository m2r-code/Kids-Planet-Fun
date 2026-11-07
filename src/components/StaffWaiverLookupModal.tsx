/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WaiverSubmission } from '../types';
import { X, Search, CheckCircle2, ShieldCheck, User, Calendar, FileText } from 'lucide-react';

interface StaffWaiverLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  waivers: WaiverSubmission[];
}

export const StaffWaiverLookupModal: React.FC<StaffWaiverLookupModalProps> = ({
  isOpen,
  onClose,
  waivers,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = waivers.filter((w) => {
    const q = searchTerm.toLowerCase();
    return (
      w.parentName.toLowerCase().includes(q) ||
      w.email.toLowerCase().includes(q) ||
      w.id.toLowerCase().includes(q) ||
      w.children.some((c) => c.name.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#174A91] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-[#FFD447]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Front Desk Waiver Verification
              </h3>
              <p className="text-xs text-blue-100">
                Search verified participant waivers by parent name, child name, or waiver code
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-6 border-b border-slate-100 bg-slate-50">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search parent name, child name, or waiver ID (e.g., KP-WAV)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#174A91]"
            />
          </div>
        </div>

        {/* Results List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <FileText className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-medium">No signed waivers found matching your search.</p>
              <p className="text-xs text-slate-400 mt-1">
                Have the parent submit a digital waiver on the Sign Waiver page.
              </p>
            </div>
          ) : (
            filtered.map((w) => (
              <div
                key={w.id}
                className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#174A91] transition-all space-y-3 shadow-xs"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-bold text-slate-900 text-sm">
                        {w.parentName}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Valid Waiver</span>
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {w.email} · {w.phone}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-1 rounded-lg">
                    {w.id}
                  </span>
                </div>

                {/* Children Registered */}
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Covered Participants ({w.children.length}):
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {w.children.map((child, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-slate-800 font-medium"
                      >
                        {child.name} <span className="text-slate-400">({child.dob})</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Signed: {new Date(w.signedAt).toLocaleDateString()} at {new Date(w.signedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  <span className="text-emerald-700 font-semibold">Terms Agreed & Signed</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>{waivers.length} Total Registered Waivers in System</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B1323] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/10 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#070B14] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#38BDF8]">GUEST VERIFICATION // WAIVER RADAR</div>
              <h3 className="font-heading font-bold text-lg text-white">
                Front Desk Waiver Registry
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-5 border-b border-white/10 bg-[#070B14]">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search parent name, child name, or waiver code (e.g., KP-WAV)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#0B1323] border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#38BDF8]"
            />
          </div>
        </div>

        {/* Results List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <FileText className="w-10 h-10 mx-auto text-slate-600 mb-2" />
              <p className="text-sm font-medium text-slate-400">No signed waivers found matching search query.</p>
              <p className="text-xs text-slate-500 mt-1">
                Have the parent submit a digital waiver on the Sign Waiver kiosk.
              </p>
            </div>
          ) : (
            filtered.map((w) => (
              <div
                key={w.id}
                className="p-4 rounded-2xl border border-white/10 bg-[#070B14] hover:border-[#38BDF8]/40 transition-all space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-bold text-white text-sm">
                        {w.parentName}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>ACTIVE WAIVER</span>
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 font-mono">
                      {w.email} · {w.phone}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-[#0B1323] border border-white/15 text-[#38BDF8] px-2.5 py-1 rounded-lg">
                    {w.id}
                  </span>
                </div>

                {/* Children Registered */}
                <div className="bg-[#0B1323] p-3 rounded-xl border border-white/10">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#FF8B24] mb-1.5 font-bold">
                    COVERED PARTICIPANTS ({w.children.length}):
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {w.children.map((child, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs bg-[#070B14] border border-white/15 px-2.5 py-1 rounded-lg text-slate-200 font-medium"
                      >
                        {child.name} <span className="text-slate-500 font-mono">({child.dob})</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-1">
                  <span>Signed: {new Date(w.signedAt).toLocaleDateString()} at {new Date(w.signedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  <span className="text-[#38BDF8]">LEGALLY EXECUTED</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#070B14] border-t border-white/10 flex justify-between items-center text-xs text-slate-400 font-mono">
          <span>{waivers.length} Total Verified Waivers in System</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/15 text-slate-200 font-mono font-semibold rounded-xl transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

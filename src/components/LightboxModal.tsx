/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    src: string;
    title: string;
    category: string;
    caption: string;
  }>;
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onSelectIndex,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onSelectIndex]);

  if (!isOpen) return null;

  const current = images[currentIndex] || images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div className="relative max-w-5xl w-full flex flex-col items-center">
        {/* Navigation Arrows */}
        <button
          onClick={() => onSelectIndex((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors shadow-lg"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => onSelectIndex((currentIndex + 1) % images.length)}
          className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors shadow-lg"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Big Image Display */}
        <div className="w-full bg-black/40 rounded-2xl overflow-hidden flex items-center justify-center max-h-[70vh]">
          <img
            src={current.src}
            alt={current.title}
            className="w-full h-auto max-h-[70vh] object-contain rounded-xl select-none"
          />
        </div>

        {/* Caption & Metadata */}
        <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 px-2">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#FFD447] font-bold">
              <span>{current.category}</span>
              <span>·</span>
              <span className="text-slate-400">Photo {currentIndex + 1} of {images.length}</span>
            </div>
            <h4 className="font-heading font-bold text-lg text-white mt-0.5">{current.title}</h4>
            <p className="text-xs text-slate-300">{current.caption}</p>
          </div>

          {/* Thumbnail list */}
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onSelectIndex(idx)}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  idx === currentIndex
                    ? 'border-[#FF8B24] scale-105'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

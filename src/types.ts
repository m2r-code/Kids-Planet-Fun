/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'about'
  | 'playground'
  | 'pricing'
  | 'parties'
  | 'rules'
  | 'careers'
  | 'contact'
  | 'tickets'
  | 'waiver'
  | 'gift-cards';

export interface PricingItem {
  id: string;
  name: string;
  price: number;
  durationMinutes: number;
  description: string;
  ageRange: string;
  category: 'weekday' | 'weekend' | 'toddler_adult' | 'socks' | 'multipass';
}

export interface MultiPassItem {
  passes: number;
  price: number;
  savings: string;
  perVisit: number;
  popular?: boolean;
}

export interface PartyPackage {
  id: string;
  title: string;
  badge?: string;
  price: number;
  durationMinutes: number;
  includedGuests: number;
  popular?: boolean;
  colorScheme: string;
  features: string[];
  recommendedAddons: string[];
}

export interface AttractionItem {
  id: string;
  title: string;
  ageRange: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  safetyNotes: string;
  badge: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'tickets' | 'waivers' | 'parties' | 'safety';
}

export interface WaiverSubmission {
  id: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
  children: Array<{
    name: string;
    dob: string;
    relationship: string;
  }>;
  signedAt: string;
  signatureDataUrl?: string;
  agreeToTerms: boolean;
}

export interface TicketOrder {
  orderId: string;
  visitDate: string;
  timeSlot: string;
  items: {
    regular: number; // 4-14
    toddlerAdult: number; // Under 3 or adult
    socks: number;
  };
  subtotal: number;
  tax: number;
  total: number;
  customer: {
    fullName: string;
    email: string;
    phone: string;
  };
  createdAt: string;
}

export interface GiftCardOrder {
  code: string;
  amount: number;
  theme: string;
  recipientName: string;
  recipientEmail: string;
  senderName: string;
  message: string;
  createdAt: string;
}

export interface JobApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  availability: string;
  fileName?: string;
  submittedAt: string;
}

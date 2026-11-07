/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  PricingItem,
  MultiPassItem,
  PartyPackage,
  AttractionItem,
  FAQItem,
} from '../types';
import { APP_IMAGES } from '../assets/images';

export const BUSINESS_INFO = {
  name: 'Kids Planet Fun',
  tagline: 'BIG FUN. BIGGER SMILES.',
  supportingMessage: 'Adventure, laughter and unforgettable memories start here.',
  address: '499 Southpoint Circle, Suite 101–102',
  cityStateZip: 'Brownsburg, IN 46112, USA',
  fullAddress: '499 Southpoint Circle, Suite 101–102, Brownsburg, IN 46112, USA',
  phone: '(317) 350-2095',
  email: 'info@kidsplanetfun.com',
  coords: { lat: 39.8248, lng: -86.3951 },
  hours: [
    { days: 'Monday – Thursday', time: '10:00 AM – 7:00 PM' },
    { days: 'Friday – Saturday', time: '10:00 AM – 8:30 PM' },
    { days: 'Sunday', time: '11:00 AM – 7:00 PM' },
  ],
  socials: {
    facebook: 'https://facebook.com/kidsplanetfun',
    instagram: 'https://instagram.com/kidsplanetfun',
    google: 'https://maps.google.com/?q=499+Southpoint+Circle+Brownsburg+IN',
  },
  reopeningNotice: {
    title: '2026 Grand Reopening & Facility Upgrade',
    subtitle: 'Rebuilding stronger, brighter, and more exciting than ever!',
    body: 'Following recovery and complete revitalization from tornado damage, Kids Planet Fun is preparing for our 2026 Grand Reopening in Brownsburg, Indiana! Experience our all-new 4-story playground, expanded toddler haven, and high-tech arcade.',
    reopeningYear: '2026',
  },
};

export const INITIAL_PRICING: PricingItem[] = [
  {
    id: 'weekday-child',
    name: 'Weekday Open Play (Ages 4–14)',
    price: 16,
    durationMinutes: 90,
    ageRange: 'Ages 4–14',
    category: 'weekday',
    description: 'Full 90 minutes of access to multi-level play maze, ball pit blasters, wave slides, and trampolines. Monday to Thursday.',
  },
  {
    id: 'weekend-child',
    name: 'Weekend Open Play (Ages 4–14)',
    price: 18,
    durationMinutes: 90,
    ageRange: 'Ages 4–14',
    category: 'weekend',
    description: 'High-energy 90-minute play session across all premier play zones. Friday, Saturday, Sunday and Holidays.',
  },
  {
    id: 'toddler-adult',
    name: 'Toddler (Under 3) or Adult Admission',
    price: 10,
    durationMinutes: 90,
    ageRange: 'Under 3 or 18+',
    category: 'toddler_adult',
    description: 'Special discounted admission for little explorers under 3 (includes dedicated Toddler Zone) or accompanying adults.',
  },
  {
    id: 'grip-socks',
    name: 'Kids Planet Grip Socks',
    price: 2.5,
    durationMinutes: 0,
    ageRange: 'All Guests',
    category: 'socks',
    description: 'Certified non-slip safety socks required for all play participants. Reusable on future visits!',
  },
];

export const MULTI_PASS_PACKAGES: MultiPassItem[] = [
  {
    passes: 10,
    price: 140,
    savings: 'Save $40',
    perVisit: 14.0,
    popular: false,
  },
  {
    passes: 20,
    price: 260,
    savings: 'Save $100',
    perVisit: 13.0,
    popular: true,
  },
  {
    passes: 30,
    price: 360,
    savings: 'Save $180',
    perVisit: 12.0,
    popular: false,
  },
];

export const PARTY_PACKAGES: PartyPackage[] = [
  {
    id: 'silver-planet',
    title: 'Silver Planet Package',
    price: 249,
    durationMinutes: 135,
    includedGuests: 10,
    colorScheme: 'border-blue-200 bg-white hover:border-blue-400',
    features: [
      'Up to 10 child participants (birthday child included)',
      '90 Minutes of unlimited playground access',
      '45 Minutes in private celebration room',
      'Kids Planet non-slip grip socks for all 10 kids',
      'Dedicated friendly Party Host for setup & cleanup',
      'Digital shareable invitation templates',
      'Paper plates, napkins, cups, and utensils included',
    ],
    recommendedAddons: ['Extra Child (+$18)', 'Whole Cheese/Pepperoni Pizza (+$16)'],
  },
  {
    id: 'gold-galaxy',
    title: 'Gold Galaxy Package',
    badge: 'MOST POPULAR',
    popular: true,
    price: 349,
    durationMinutes: 135,
    includedGuests: 15,
    colorScheme: 'border-[#FF8B24] bg-white ring-2 ring-[#FF8B24]/20 shadow-lg',
    features: [
      'Up to 15 child participants (birthday child included)',
      '90 Minutes of unlimited playground access',
      '45 Minutes in private celebration room',
      'Kids Planet grip socks for all 15 kids',
      'Dedicated Party Host guiding your celebration',
      '2 Large Fresh Pizzas (Cheese or Pepperoni)',
      '2 Pitchers of fruit juice / lemonade with free refills',
      '$15 Arcade Game Card for the Birthday VIP child',
      'Free return 90-minute pass for the Birthday child',
      'All themed party tableware and setup provided',
    ],
    recommendedAddons: ['Extra Arcade Cards', 'Goodie Bags (+$4/child)'],
  },
  {
    id: 'cosmic-vip',
    title: 'Cosmic VIP Galaxy',
    badge: 'ALL-INCLUSIVE',
    price: 469,
    durationMinutes: 180,
    includedGuests: 20,
    colorScheme: 'border-[#174A91] bg-white hover:border-[#174A91]/80',
    features: [
      'Up to 20 child participants (birthday child included)',
      '120 Minutes of unlimited playground access',
      '60 Minutes in our premier VIP Celebration Suite',
      'Kids Planet grip socks for all 20 children',
      '2 Dedicated Party Hosts for royal concierge care',
      '4 Large Fresh Baked Pizzas & ice cream cups',
      'Unlimited fountain beverage pitchers & juice',
      '$10 Arcade Card for EVERY child participant (20 cards)',
      'Special Kids Planet VIP souvenir gift for birthday star',
      'Customized digital photo collage keepsake',
      'Zero cleanup stress — our team handles everything',
    ],
    recommendedAddons: ['Mascot Appearance (+$45)', 'Cupcake Tower (+$35)'],
  },
];

export const ATTRACTIONS: AttractionItem[] = [
  {
    id: 'indoor-playground',
    title: '4-Story Mega Adventure Maze',
    ageRange: 'Ages 4–14',
    badge: 'Flagship Zone',
    shortDesc: 'A towering 4-level climbing labyrinth filled with suspension bridges, obstacle ropes, and hidden crawlways.',
    fullDesc: 'Our multi-tier indoor play maze is engineered with commercial padded safety posts, woven security netting, and exhilarating obstacles designed to build coordination, agility, and pure adventurous joy.',
    image: APP_IMAGES.hero,
    features: ['4 elevation levels', 'Padded balance obstacles', 'High-durability mesh bridges', 'Safe enclosed lookout decks'],
    safetyNotes: 'Kids must wear grip socks. No rough horseplay or climbing on outside nets.',
  },
  {
    id: 'ball-pit-cannons',
    title: 'Ball Pit Ocean & Air Blasters',
    ageRange: 'All Ages',
    badge: 'Fan Favorite',
    shortDesc: 'Tens of thousands of sanitized balls, suction vacuum chutes, and pneumatic soft ball blaster cannons.',
    fullDesc: 'Dive into an expansive sea of colorful balls! Kids can load balls into interactive suction chutes, watch them shoot into overhead collection buckets, and fire harmless soft foam spheres from the elevated blaster deck.',
    image: APP_IMAGES.ballPit,
    features: ['Over 50,000 sanitized balls', 'Pneumatic air cannon blasters', 'Dual drop chutes', 'Deep impact-cushioning base'],
    safetyNotes: 'No throwing balls directly at faces. Keep personal items in cubbies.',
  },
  {
    id: 'slides-tunnels',
    title: 'Giant Wave & Twister Tube Slides',
    ageRange: 'Ages 4–14',
    badge: 'High Thrills',
    shortDesc: 'Side-by-side triple wave slides for racing friends, plus high-speed spiral tube slides.',
    fullDesc: 'Experience the rush of sliding down our 20-foot tall wavy slides or zooming through covered twister tubes that empty smoothly onto safety-cushioned landing mats.',
    image: APP_IMAGES.ballPit,
    features: ['Triple-lane wave racing slide', '360-degree enclosed tube slide', 'Extra-deep landing safety zones', 'Smooth anti-friction polish'],
    safetyNotes: 'Always slide feet first, one child at a time. Do not climb up slides.',
  },
  {
    id: 'toddler-zone',
    title: 'Dedicated Soft Toddler Haven',
    ageRange: 'Ages 0–3 Only',
    badge: 'Safe & Gentle',
    shortDesc: 'Enclosed, ultra-gentle soft play paradise designed specifically for infants, crawlers, and early walkers.',
    fullDesc: 'Big kids have their playground, and tiny tots have their own sanctuary! Gated and strictly monitored for guests 3 and under, with memory foam climbing wedges, gentle mini-slides, interactive wall gears, and baby ball pond.',
    image: APP_IMAGES.toddler,
    features: ['Strictly ages 0–3 only', 'Gated perimeter with soft latch', 'Sensory tactile puzzle boards', 'Ultra-cushioned floor padding'],
    safetyNotes: 'Direct parent supervision is required at all times inside the toddler zone.',
  },
  {
    id: 'trampoline-zone',
    title: 'Neon Rebound Trampoline Court',
    ageRange: 'Ages 4–14',
    badge: 'High Energy',
    shortDesc: 'Seamless commercial trampolines with heavy-duty safety padding and springless security.',
    fullDesc: 'Burn off limitless energy! Our padded rebound trampoline court gives kids the bounce they love with high-grade safety netting, angled rebound walls, and strict one-jumper-per-square spacing.',
    image: APP_IMAGES.hero,
    features: ['High-tension bounce mats', '100% thick foam boundary padding', 'Angled boundary mats', 'Attendant supervision'],
    safetyNotes: 'One jumper per trampoline square. No inverted flips or dangerous stunts.',
  },
  {
    id: 'arcade-games',
    title: 'Galaxy Arcade & Redemption Center',
    ageRange: 'All Ages',
    badge: 'Prizes & Games',
    shortDesc: 'Family-friendly interactive arcade cabinets, air hockey, claw games, and ticket redemption prizes.',
    fullDesc: 'Take a play break and challenge mom, dad, or friends to intense air hockey showdowns, basketball hoops, racing simulators, and fun ticket games. Redeem electronic tickets at our dazzling prize showcase!',
    image: APP_IMAGES.arcade,
    features: ['Contactless tap-to-play cards', 'Classic & modern family games', 'Dual air hockey tables', 'Loaded prize redemption shop'],
    safetyNotes: 'Please treat machines respectfully. Card reloads available at kiosks.',
  },
];

export const GALLERY_IMAGES = [
  {
    src: APP_IMAGES.hero,
    title: 'Multi-Level Adventure Playground',
    category: 'Play Maze',
    caption: 'Towering multi-story climb maze with dual slides and ball pits',
  },
  {
    src: APP_IMAGES.ballPit,
    title: 'Ball Pit Blaster & Double Wave Slides',
    category: 'Ball Pit',
    caption: 'Joyful smiles sliding into our 50,000+ ball ocean with air blasters',
  },
  {
    src: APP_IMAGES.birthday,
    title: 'Private Birthday Celebration Suites',
    category: 'Parties',
    caption: 'Vibrant decorated party rooms with balloons, treats, and birthday cake',
  },
  {
    src: APP_IMAGES.toddler,
    title: 'Gentle Toddler Soft Play Sanctuary',
    category: 'Toddlers',
    caption: 'Enclosed, spotless safe play zone for infants and toddlers up to age 3',
  },
  {
    src: APP_IMAGES.arcade,
    title: 'Galaxy Family Arcade Center',
    category: 'Arcade',
    caption: 'Air hockey, basketball shootouts, and prize redemption games',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Are waivers required before entering Kids Planet Fun?',
    answer: 'Yes! Every participant (child and adult entering play structures) must have a signed liability waiver on file. Parents or legal guardians must sign for guests under 18. You can sign your waiver online from your phone in under 60 seconds before arrival to skip the line.',
    category: 'waivers',
  },
  {
    question: 'What kind of socks are required?',
    answer: 'For hygiene and safety, all children and participating adults must wear approved non-slip grip socks on all playground equipment, trampolines, and slides. Regular socks or bare feet are not permitted. Kids Planet grip socks can be purchased at the front desk for $2.50/pair and reused on future visits.',
    category: 'safety',
  },
  {
    question: 'Can parents go on the playground equipment with their kids?',
    answer: 'Absolutely! Accompanying adults with valid admission can explore the multi-level maze and guide younger children. Adult admission is just $10. We also feature a comfortable Parent Lounge with complimentary Wi-Fi and direct sightlines across all play areas.',
    category: 'general',
  },
  {
    question: 'How long are the open play sessions?',
    answer: 'Standard open play admission includes a generous 90-minute session. This provides plenty of time for kids to explore all 6 zones, conquer the wave slides, play ball blasters, and visit the arcade without exhaustion.',
    category: 'tickets',
  },
  {
    question: 'What is included in a Birthday Party package?',
    answer: 'Our party packages include 90–120 minutes of playground fun, 45–60 minutes in a private decorated party room, a dedicated party host to manage all setup and cleanup, grip socks for all guests, and digital invitations. Upgraded packages also include fresh pizzas, drinks, and arcade cards!',
    category: 'parties',
  },
  {
    question: 'Can I bring outside food or drinks?',
    answer: 'Outside food and drinks are strictly reserved for booked birthday party packages (birthday cake, cupcakes, and fruit platters). We do not permit outside fast food or coolers during standard open play. Bottled water and baby formula are always allowed, and our café offers kid-friendly snacks and drinks.',
    category: 'general',
  },
  {
    question: 'What is the age limit for the Toddler Zone?',
    answer: 'The Toddler Soft Play Zone is strictly reserved for children ages 0 to 3 years old. This ensures that little toddlers can crawl, climb, and explore safely without older children running around them.',
    category: 'safety',
  },
  {
    question: 'How do Multi-Pass packages work?',
    answer: 'Multi-Pass punch packages offer our steepest savings! A 10-pass pack is $140 ($14/visit), a 20-pass pack is $260 ($13/visit), and a 30-pass pack is $360 ($12/visit). Passes never expire and can be shared between siblings or friends in the same household.',
    category: 'tickets',
  },
];

export const SAFETY_RULES = [
  {
    title: 'Digital Waiver Required',
    desc: 'All children and participating adults must have a valid signed waiver on file before entry.',
    icon: 'FileText',
    badge: 'Mandatory',
  },
  {
    title: 'Non-Slip Grip Socks',
    desc: 'Approved rubber-tread grip socks must be worn by all jumpers and climbers at all times.',
    icon: 'ShieldCheck',
    badge: 'Hygiene & Safety',
  },
  {
    title: 'Active Adult Supervision',
    desc: 'Children under 14 must be accompanied by an adult guardian on premises at all times.',
    icon: 'Users',
    badge: 'Supervision',
  },
  {
    title: 'Toddler Zone Age Limits',
    desc: 'The Toddler Soft Zone is strictly restricted to children ages 3 and younger for safety.',
    icon: 'Baby',
    badge: 'Age Appropriate',
  },
  {
    title: 'Feet-First Slide Policy',
    desc: 'Always slide feet first in an upright seated position. One child per lane; never climb up slides.',
    icon: 'TrendingDown',
    badge: 'Slide Safety',
  },
  {
    title: 'Hospital-Grade Sanitization',
    desc: 'Play zones, ball pits, and high-touch rails are sanitized continuously with child-safe disinfectant.',
    icon: 'Sparkles',
    badge: 'Cleanliness Pledge',
  },
];

export const TESTIMONIALS = [
  {
    quote: "Kids Planet is hands-down the cleanest and most exciting indoor playground in the Hendricks County area. My 4 and 7-year-olds didn't want to leave!",
    author: 'Sarah Jenkins',
    role: 'Brownsburg Mom of 2',
    rating: 5,
  },
  {
    quote: 'We celebrated our son’s 6th birthday here. Our party host was phenomenal, took care of the pizza, cake timing, and cleanup. 100% stress-free for parents.',
    author: 'Marcus & Elena Vance',
    role: 'Avon, IN Parents',
    rating: 5,
  },
  {
    quote: 'The dedicated toddler soft play zone is a lifesaver. My 20-month-old had her own safe padded paradise away from the bigger kids running around.',
    author: 'Jessica Alvarez',
    role: 'Indianapolis, IN Mom',
    rating: 5,
  },
];

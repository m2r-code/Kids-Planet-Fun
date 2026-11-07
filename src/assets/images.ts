/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import images directly through Vite's asset pipeline so they are bundled,
// hashed, and resolved properly with relative paths on GitHub Pages.
import heroPlayground from './images/hero_indoor_playground_1794027338444.jpg';
import birthdayParty from './images/birthday_party_room_1794027339445.jpg';
import toddlerSoftPlay from './images/toddler_soft_play_1794027340007.jpg';
import ballPitSlides from './images/ball_pit_wave_slides_1794027339856.jpg';
import arcadeGames from './images/arcade_family_games_1794027340348.jpg';

export const APP_IMAGES = {
  hero: heroPlayground,
  birthday: birthdayParty,
  toddler: toddlerSoftPlay,
  ballPit: ballPitSlides,
  arcade: arcadeGames,
};

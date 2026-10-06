/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'John Paul Corpuz',
  firstName: 'John Paul',
  handle: '@jpaulcorpuz',
  role: 'CRM Developer · Workflow Automation',
  avatarSrc: 'avatar.webp',
  verifiedLabel: 'BS Information Technology, AMA Computer College',
  email: 'jpaul.corpuz@gmail.com',
  location: 'Caloocan City, Philippines',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: '10+ yrs', label: 'Customer-facing', Icon: Briefcase },
    { value: '2,200+', label: 'CE registrations', Icon: SealCheck },
    { value: 'GMT+8', label: 'Remote, US team', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'CRMs, automation,', line2: 'and real support.' },
  hero: {
    body: 'I build Google Apps Script CRMs and Stripe automations, and handle the admin and customer support around them.',
    portraitSrc: 'portrait.webp',
    portraitAlt: 'Portrait of John Paul Corpuz',
  },
  socials: [
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/john-paul-corpuz/', iconPath: 'icons/linkedin.svg' },
    { label: 'Facebook profile', href: 'https://www.facebook.com/paul.corpuzii.5', iconPath: 'icons/facebook.svg' },
  ],
}

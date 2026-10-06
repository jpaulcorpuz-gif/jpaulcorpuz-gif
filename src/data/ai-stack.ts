/**
 * The systems tree shown in the Projects "systems" pop-up (and as chips on
 * Home and in the Projects bento card).
 *
 * This file is the ONLY place node copy lives. AIStack.tsx and AIStackGrid.tsx
 * render whatever shape they find here, so swapping in content is a data edit
 * and never a JSX edit. Keep the exported names and types stable.
 *
 * Shape rules:
 * - The root is you. Its children are the categories (branches).
 * - A branch with `status` is itself a system; a branch without one is a
 *   group whose children are the systems.
 * - Status is what the thing actually does today: "Live" (in use by others),
 *   "Internal" (works, you use it), "Beta".
 * - Logo marks in AIStackGrid.tsx are keyed by the node `id` below.
 */

import {
  Sparkle,
  AddressBook,
  Browser,
  CreditCard,
  EnvelopeSimple,
  ListChecks,
  UsersThree,
  Article,
  SlidersHorizontal,
  UserCircle,
  ArrowsLeftRight,
} from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

/** A vendor mark, masked to a single ink colour so the row reads as one set
 *  rather than a rainbow of brand palettes. Only marks that already exist in
 *  public/icons are listed. */
export type StackLogo = { src: string; name: string }

export type StackNode = {
  id: string
  name: string
  /** One plain sentence a non-technical client understands. */
  what: string
  /** Real stack / model / where it runs. Rendered small and muted. */
  stack?: string
  status?: StackStatus
  /** Phosphor glyph for the card's mark tile. Every node has one. */
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

const APPS_SCRIPT: StackLogo = { src: '/icons/googleappsscript.svg', name: 'Google Apps Script' }
const SHEETS: StackLogo = { src: '/icons/googlesheets.svg', name: 'Google Sheets' }
const GMAIL: StackLogo = { src: '/icons/gmail.svg', name: 'Gmail' }
const STRIPE: StackLogo = { src: '/icons/stripe.svg', name: 'Stripe' }

/** Single root: you. Branches are the categories. */
export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'The CAL ACE Student Management System: a CRM, an enrollment website and a payment pipeline, built on Google Workspace.',
  stack: 'Google Apps Script · Google Sheets · Stripe · Google Drive API',
  children: [
    {
      id: 'tracker',
      Icon: AddressBook,
      name: 'Staff tracker',
      what: 'The CRM the office runs on.',
      children: [
        {
          id: 'rosters',
          Icon: UsersThree,
          logos: [APPS_SCRIPT, SHEETS],
          name: 'Program rosters',
          what: 'One roster per program (CNA, RNA, HHA, BLS, CEU), 50+ data points per student.',
          stack: 'Google Apps Script, Google Sheets',
          status: 'Live',
        },
        {
          id: 'requirements',
          Icon: ListChecks,
          logos: [APPS_SCRIPT],
          name: 'Requirement chips',
          what: 'Color-coded chips and filters show who is missing Live Scan, TB, a physical or a 283B.',
          stack: 'Google Apps Script',
          status: 'Live',
        },
        {
          id: 'class-config',
          Icon: SlidersHorizontal,
          logos: [APPS_SCRIPT, SHEETS],
          name: 'Class configuration',
          what: 'Staff open or close cohorts, set seat caps and manage clinical sites, no developer needed.',
          stack: 'Google Apps Script, Google Sheets',
          status: 'Live',
        },
      ],
    },
    {
      id: 'website',
      Icon: Browser,
      name: 'Enrollment website',
      what: 'Where students register, pay and upload their documents.',
      children: [
        {
          id: 'registration',
          Icon: Browser,
          logos: [APPS_SCRIPT],
          name: 'Registration and seats',
          what: 'Live seat counts per cohort, with an automatic waitlist when a cohort fills.',
          stack: 'Google Apps Script, HTML/CSS/JavaScript',
          status: 'Live',
        },
        {
          id: 'assessment',
          Icon: Article,
          logos: [APPS_SCRIPT],
          name: 'English assessment',
          what: 'A reading assessment before payment; low scores are flagged for staff, never used to reject.',
          stack: 'Google Apps Script, HTML/CSS/JavaScript',
          status: 'Live',
        },
        {
          id: 'stripe',
          Icon: CreditCard,
          logos: [STRIPE, APPS_SCRIPT],
          name: 'Stripe payments',
          what: 'Registration fees, tuition and installment plans, with automatic receipts.',
          stack: 'Stripe, Google Apps Script',
          status: 'Live',
        },
        {
          id: 'dashboard',
          Icon: UserCircle,
          logos: [APPS_SCRIPT],
          name: 'Student dashboard',
          what: 'Students upload their ID, TB test and physical, check requirements and see their balance.',
          stack: 'Google Apps Script, Google Drive API',
          status: 'Live',
        },
      ],
    },
    {
      id: 'automation',
      Icon: ArrowsLeftRight,
      name: 'Automation',
      what: 'What happens between the two, with nobody retyping.',
      children: [
        {
          id: 'sync',
          Icon: ArrowsLeftRight,
          logos: [APPS_SCRIPT, SHEETS],
          name: 'Website to tracker',
          what: 'New registrations land in the tracker, and the website’s seat counts come from the live roster.',
          stack: 'Google Apps Script, Google Sheets',
          status: 'Live',
        },
        {
          id: 'reminders',
          Icon: EnvelopeSimple,
          logos: [APPS_SCRIPT, GMAIL],
          name: 'Reminder emails',
          what: 'One click sends a student a list of only what they are missing, with upload links.',
          stack: 'Google Apps Script, Gmail',
          status: 'Live',
        },
        {
          id: 'letters',
          Icon: Article,
          logos: [APPS_SCRIPT, GMAIL],
          name: 'Welcome letters and receipts',
          what: 'Welcome letters per cohort from templates, plus payment receipts and a full activity log.',
          stack: 'Google Apps Script, Gmail',
          status: 'Live',
        },
      ],
    },
  ],
}

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
  ClipboardText,
  IdentificationCard,
  CreditCard,
  EnvelopeSimple,
  ListChecks,
  ChatCircleDots,
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
  what: 'The CRM and automations I built and run for a California nursing academy.',
  stack: 'Google Apps Script · Google Workspace · Stripe',
  children: [
    {
      id: 'student-crm',
      Icon: AddressBook,
      logos: [APPS_SCRIPT, SHEETS],
      name: 'Student CRM',
      what: 'Keeps every student’s registration, records and status in one place.',
      stack: 'Google Apps Script, Google Sheets',
      status: 'Live',
    },
    {
      id: 'records',
      Icon: ClipboardText,
      name: 'Registration and records',
      what: 'Getting a student from sign-up to a complete record.',
      children: [
        {
          id: 'registration',
          Icon: ListChecks,
          logos: [APPS_SCRIPT],
          name: 'Registration workflow',
          what: 'Turns a new registration into a student record without retyping.',
          stack: 'Google Apps Script, Google Sheets',
          status: 'Live',
        },
        {
          id: 'requirements',
          Icon: IdentificationCard,
          logos: [APPS_SCRIPT],
          name: 'Enrollment requirements',
          what: 'Tracks each student’s ID, TB test and physical exam, and what is still missing.',
          stack: 'Google Apps Script, Google Sheets',
          status: 'Internal',
        },
      ],
    },
    {
      id: 'payments',
      Icon: CreditCard,
      name: 'Payments',
      what: 'Tuition collected without chasing.',
      children: [
        {
          id: 'stripe-tuition',
          Icon: CreditCard,
          logos: [STRIPE, APPS_SCRIPT],
          name: 'Stripe tuition payments',
          what: 'Collects registration fees and installment plans through Stripe.',
          stack: 'Stripe, Google Apps Script',
          status: 'Live',
        },
      ],
    },
    {
      id: 'comms',
      Icon: ChatCircleDots,
      name: 'Communication',
      what: 'Students hear from the school at the right step.',
      children: [
        {
          id: 'student-comms',
          Icon: EnvelopeSimple,
          logos: [APPS_SCRIPT, GMAIL],
          name: 'Student communication',
          what: 'Sends students the emails they need as they move through enrollment.',
          stack: 'Google Apps Script, Gmail',
          status: 'Live',
        },
      ],
    },
  ],
}

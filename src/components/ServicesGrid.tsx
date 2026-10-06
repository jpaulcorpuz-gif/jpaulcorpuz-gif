import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the live automation demo
 * scaled into whatever height is left. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 *
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Map',
    body: 'I learn how your team works today and where time gets lost.',
    Icon: MagnetStraight,
    chips: ['Intake', 'Records', 'Payments', 'Follow-ups'],
  },
  {
    index: '02',
    label: 'Build',
    body: 'I build the CRM and automations in tools your team already uses.',
    Icon: Timer,
    chips: ['Apps Script', 'Google Workspace', 'Stripe'],
  },
  {
    index: '03',
    label: 'Run',
    body: 'I keep it running and support the people who use it.',
    Icon: Trophy,
    chips: ['Support', 'Fixes', 'Reporting'],
  },
]

/* ---------- The services ---------- */

// Tool marks from /public/icons.
const APPS_SCRIPT = '/icons/brand/googleappsscript.svg'
const SHEETS = '/icons/brand/googlesheets.svg'
const GWS = '/icons/googleworkspace.svg'
const GMAIL = '/icons/brand/gmail.svg'
const FORMS = '/icons/brand/googleforms.svg'
const DRIVE = '/icons/brand/googledrive.svg'
const STRIPE = '/icons/brand/stripe.svg'
const ZENDESK = '/icons/brand/zendesk.svg'
const SLACK = '/icons/slack.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'CRM Development',
    description: 'A CRM built in Google Apps Script on top of your Google Workspace.',
    chip: 'Apps Script',
    logos: [APPS_SCRIPT, SHEETS, GWS],
    bullets: ['Student or customer records', 'Status tracking', 'Built for your process'],
  },
  {
    index: '02',
    title: 'Workflow Automation',
    description: 'The repeat work done for you: registration, records and emails.',
    chip: 'Automation',
    logos: [APPS_SCRIPT, FORMS, GMAIL],
    bullets: ['Registration to record', 'Automatic emails', 'Less manual data entry'],
  },
  {
    index: '03',
    title: 'Payment Automation',
    description: 'Stripe set up for fees, tuition and installment plans.',
    chip: 'Stripe',
    logos: [STRIPE, APPS_SCRIPT],
    bullets: ['Registration fees', 'Installment plans', 'Payments tied to records'],
  },
  {
    index: '04',
    title: 'Admin Support',
    description: 'Enrollment, documents, data entry and reports, done accurately.',
    chip: 'Admin',
    logos: [SHEETS, DRIVE, GWS],
    bullets: ['Document checks', 'Accurate records', 'Reports for decisions'],
  },
  {
    index: '05',
    title: 'Customer Support',
    description: 'Call, text, email and tickets handled clearly and on time.',
    chip: 'Support',
    logos: [ZENDESK, SLACK, GMAIL],
    bullets: ['SLA-based tickets', 'Billing and accounts', 'Clear documentation'],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Systems that save time. Support that keeps people happy.
        </h1>
        <p className="pgrid__lede">
          CRM development, workflow and payment automation, plus the admin and customer support around them.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I work</span>
            <h2 className="sgrid__method-title" id="method-title">
              Map. Build. Run.
              <br />
              <span>Three steps, start to finish.</span>
            </h2>
            <p className="sgrid__method-sub">
              I build in the tools you already pay for, then stay to support the people using them.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I can do for you.</h2>
            <p className="sgrid__offers-sub">Pick one, or combine them.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Example automation</span>
              <h2 className="sgrid__flow-title">From registration to enrolled.</h2>
              <p className="sgrid__flow-sub">
                A student registration flow like the one I run: records, document reminders and Stripe payments.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}

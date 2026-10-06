import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin, GraduationCap, EnvelopeSimple } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const APPS_SCRIPT = { src: '/icons/brand/googleappsscript.svg', name: 'Google Apps Script' }
const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const SHEETS = { src: '/icons/brand/googlesheets.svg', name: 'Google Sheets' }
const STRIPE = { src: '/icons/brand/stripe.svg', name: 'Stripe' }
const GMAIL = { src: '/icons/brand/gmail.svg', name: 'Gmail' }
const FORMS = { src: '/icons/brand/googleforms.svg', name: 'Google Forms' }
const DRIVE = { src: '/icons/brand/googledrive.svg', name: 'Google Drive' }
const ZENDESK = { src: '/icons/brand/zendesk.svg', name: 'Zendesk' }
const SLACK = { src: '/icons/ai/slack-color.svg', name: 'Slack' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'CRM development',
    marks: [APPS_SCRIPT, SHEETS, GWS],
  },
  {
    index: '02',
    title: 'Payment automation',
    marks: [STRIPE, APPS_SCRIPT],
  },
  {
    index: '03',
    title: 'Admin and enrollment',
    marks: [FORMS, DRIVE, GMAIL],
  },
  {
    index: '04',
    title: 'Customer support',
    marks: [ZENDESK, SLACK, GMAIL],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Remote CRM developer and admin staff for a California nursing academy.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I build the systems that keep a school running.
            <span> Then I answer the students who use them.</span>
          </p>

          <p className="agrid__note">
            <strong>CAL ACE Nursing Academy</strong>, a CDPH-approved CNA school in Milpitas,
            California, is where I designed and built its student management system: a CRM, an
            enrollment website and a Stripe payment pipeline, all on Google Workspace. Before that: nearly four years in BPO support at
            Eclaro and Alorica, and 10+ years in customer-facing roles overall.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <GraduationCap size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">BS Information Technology</span>
                <span className="agrid__cell-meta">AMA Computer College</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+8 · works remotely</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href={`mailto:${profile.email}`}>
              <span className="agrid__cell-mark">
                <EnvelopeSimple size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.email}</span>
                <span className="agrid__cell-meta">Email me</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.hero.portraitSrc}
            alt={profile.hero.portraitAlt}
            loading="eager"
            decoding="async"
            width={800}
            height={996}
          />
        </div>
      </div>
    </section>
  )
}

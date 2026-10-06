import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Privacy Policy. Plain-language, and true of the site as built: no
 * analytics, no cookies, and a contact form that only opens the visitor's
 * own email app. Update it if you add a form backend or analytics.
 */
export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: October 6, 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>This is the personal portfolio of {profile.name}. This policy covers this site only.</p>

          <h2>What is collected</h2>
          <p>This site has no analytics and sets no cookies. The contact form does not send anything to a server: it opens your own email app with your message filled in, and nothing is sent unless you press send there. Your theme and accessibility choices are saved in your browser only.</p>

          <h2>How it is used</h2>
          <p>If you email me, I use your message and email address only to reply to you. I do not sell or share them.</p>

          <h2>How long it is kept</h2>
          <p>Emails stay in my inbox until I delete them. To have yours deleted, email me and I will remove it.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}

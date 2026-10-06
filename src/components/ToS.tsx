import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Terms of Service. Plain-language terms for a personal portfolio.
 */
export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: October 6, 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>This site is a personal portfolio. You are welcome to browse it and contact me through it. It is provided as is, for information only.</p>

          <h2>Work and payment</h2>
          <p>Nothing on this site is an offer or a contract. Any work, its scope, price and timeline are agreed with me in writing before it starts.</p>

          <h2>Ownership</h2>
          <p>The text on this site is mine. Company names and tool logos belong to their owners and are shown only to describe where I have worked and what I work with. Case studies describe my own work and contain no client data.</p>

          <h2>Liability</h2>
          <p>I am not liable for any loss that comes from using this site or relying on its content.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}

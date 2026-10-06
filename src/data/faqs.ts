export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I build CRMs and workflow automations in Google Apps Script, set up Stripe payments, and handle the admin and customer support around them. Right now I do this for a nursing academy in California.',
  },
  {
    q: 'What tools do you use?',
    a: 'Google Apps Script and Google Workspace for CRMs and automation, Stripe for payments, and Zendesk, Salesforce, Nextiva, Slack and Microsoft Teams for support. I also work in Kajabi, Meta Business Suite and Google Search Console.',
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes. I have worked remotely for a school in California since June 2025.',
  },
  {
    q: 'Where are you based?',
    a: 'Caloocan City, Philippines (GMT+8).',
  },
  {
    q: 'What happens after I write?',
    a: 'I reply by email. Tell me what you need built or handled and I will tell you how I would do it.',
  },
]

import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta.js'

export default function Contact() {
  usePageMeta('Contact • Photographer Portfolio', 'Get in touch for bookings, collaborations, or questions.')
  const [status, setStatus] = useState(null)

  function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    // Placeholder: you can wire this to your backend or service like Formspree
    console.log('Message', Object.fromEntries(form.entries()))
    setStatus('Thanks! I will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-10">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input name="name" required className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 px-3 py-2"/>
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" name="email" required className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 px-3 py-2"/>
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" rows="5" required className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 px-3 py-2"></textarea>
          </div>
          <button className="rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium hover:opacity-90">Send</button>
          {status && <p className="text-sm text-green-600 dark:text-green-400">{status}</p>}
        </form>
        <div>
          <h2 className="text-xl font-semibold">Follow</h2>
          <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            <li><a className="hover:underline" href="#">Instagram</a></li>
            <li><a className="hover:underline" href="#">Twitter</a></li>
            <li><a className="hover:underline" href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </main>
  )
}



import { usePageMeta } from '../hooks/usePageMeta.js'

export default function About() {
  usePageMeta('About • Photographer Portfolio', 'Learn about the photographer, experience, and skills.')
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">About</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 prose dark:prose-invert max-w-none">
          <p>I'm a freelance photographer with a passion for capturing authentic moments. My work spans portraits, weddings, events, and lifestyle assignments.</p>
          <p>I believe in working closely with clients to understand their story and translate it into images that feel timeless.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Portrait & Lifestyle Photography</li>
            <li>Weddings & Events</li>
            <li>Studio Lighting</li>
            <li>Photo Editing (Lightroom, Photoshop)</li>
          </ul>
        </div>
      </div>
    </main>
  )
}



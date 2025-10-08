import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta.js'

const SAMPLE_IMAGES = [
  '/gallery/sunrise.jpeg',
  '/gallery/sun-set.jpeg',
  '/gallery/beach.jpeg',
  '/gallery/mountain.jpeg',
  '/gallery/lake.jpeg',
  '/gallery/river.jpeg',
]

export default function Gallery() {
  usePageMeta('Gallery • Photographer Portfolio', 'Browse a curated selection of portrait, wedding, and lifestyle photography.')
  const [active, setActive] = useState(null)

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {SAMPLE_IMAGES.map((src, idx) => (
          <button key={src} onClick={() => setActive(idx)} className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800">
            <img loading="lazy" src={src} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform"/>
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <img src={SAMPLE_IMAGES[active]} alt="" className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"/>
        </div>
      )}
    </main>
  )
}



import { motion } from 'framer-motion'
import { usePageMeta } from '../hooks/usePageMeta.js'

export default function Home() {
  usePageMeta('Home • Photographer Portfolio', 'Freelance photographer specializing in portraits, weddings, and lifestyle imagery.')
  return (
    <main className="mx-auto max-w-6xl px-4">
      <section className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Capturing life in frames</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">I'm a freelance photographer specializing in portraits, weddings, and lifestyle imagery. Based in your city, available worldwide.</p>
          <div className="mt-6 flex gap-3">
            <a href="/gallery" className="inline-flex items-center rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium hover:opacity-90">View Gallery</a>
            <a href="/contact" className="inline-flex items-center rounded-md border border-black/10 dark:border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">Contact Me</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700"/>
      </section>
      <section className="py-8 md:py-12">
        <h2 className="text-2xl font-semibold">About me</h2>
        <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-300">With years of experience behind the lens, I create meaningful images that tell authentic stories. I love natural light, candid moments, and clean compositions.</p>
      </section>
    </main>
  )
}



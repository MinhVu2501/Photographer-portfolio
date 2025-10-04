export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Photographer. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}



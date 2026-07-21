export function Footer() {
  return <footer className="mt-20 bg-slate-950 py-8 text-slate-400">
      <div className="mx-auto flex w-[min(1160px,calc(100%-32px))] flex-wrap items-center justify-between gap-4 text-sm">
        <span className="font-display text-lg font-bold text-white">JP<span className="text-cyan-400">.</span>Naidu</span>
        <p>Designed &amp; developed by Sakhamuri Jayapaul Naidu · © {new Date().getFullYear()}</p>
      </div>
    </footer>
}

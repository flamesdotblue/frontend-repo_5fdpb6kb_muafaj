import { useState } from 'react';
import { Menu, X, Rocket, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <Rocket className="h-5 w-5 text-indigo-600" />
          <span>CodeQuest</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="/login" className="text-sm text-slate-700 hover:text-slate-900">Login</a>
          <a href="/dashboard" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <User className="h-4 w-4" /> Dashboard
          </a>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="/login" className="flex-1 rounded-md border px-3 py-2 text-center text-sm text-slate-700 hover:bg-slate-50">Login</a>
              <a href="/dashboard" className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-indigo-700">Dashboard</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { ExternalLink, Github, BadgeCheck } from 'lucide-react';

const sampleProjects = [
  {
    name: 'DevNotes',
    author: 'Alex Kim',
    github: 'https://github.com/',
    live: '#',
    status: 'Verified'
  },
  {
    name: 'ShopLite',
    author: 'Priya Singh',
    github: 'https://github.com/',
    live: '#',
    status: 'Verified'
  },
  {
    name: 'FitTrack',
    author: 'Diego Martínez',
    github: 'https://github.com/',
    live: '#',
    status: 'Verified'
  }
];

export default function CommunityPreview() {
  return (
    <section id="community" className="relative py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Community Showcase</h2>
            <p className="mt-3 text-slate-600">Discover verified projects built by learners like you.</p>
          </div>
          <a href="/community" className="hidden sm:inline-flex rounded-md border px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">View all</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((p) => (
            <div key={p.name} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
                  <BadgeCheck className="h-3.5 w-3.5" /> {p.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">By {p.author}</p>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.github} className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href={p.live} className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

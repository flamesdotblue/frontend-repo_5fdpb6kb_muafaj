import { CheckCircle2, LockKeyhole } from 'lucide-react';

const modules = [
  { id: 1, title: 'Variables & Data Types', unlocked: true },
  { id: 2, title: 'Control Flow & Loops', unlocked: true },
  { id: 3, title: 'Functions & Scope', unlocked: false },
  { id: 4, title: 'Data Structures', unlocked: false },
  { id: 5, title: 'APIs & Networking', unlocked: false },
  { id: 6, title: 'Final Test (60 Qs)', unlocked: false },
  { id: 7, title: 'Project Submission', unlocked: false },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Your learning journey</h2>
          <p className="mt-3 text-slate-600">Complete each module to unlock the next. Pass the final test to access the project phase.</p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <li key={m.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Module {m.id}</p>
                  <h3 className="mt-1 font-semibold text-slate-900">{m.title}</h3>
                </div>
                {m.unlocked ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : (
                  <LockKeyhole className="h-5 w-5 text-slate-400" />
                )}
              </div>
              <div className="mt-4 flex gap-2">
                <a href={`/module/${m.id}`} className={`text-sm font-medium ${m.unlocked ? 'text-indigo-600 hover:underline' : 'text-slate-400 pointer-events-none'}`}>
                  Learn
                </a>
                <span className="text-slate-300">•</span>
                <a href={`/quiz/${m.id}`} className={`text-sm font-medium ${m.unlocked ? 'text-indigo-600 hover:underline' : 'text-slate-400 pointer-events-none'}`}>
                  Quiz
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

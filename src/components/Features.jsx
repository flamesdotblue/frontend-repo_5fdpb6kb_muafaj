import { BookOpen, Code2, ShieldCheck, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Structured Modules',
    desc: 'Clear learning paths with lessons on variables, loops, functions, and more.'
  },
  {
    icon: Code2,
    title: 'Hands-on Tasks',
    desc: 'Upload practical solutions and unlock the next module after verification.'
  },
  {
    icon: ShieldCheck,
    title: 'Admin Verification',
    desc: 'Final projects are reviewed with feedback and email notifications.'
  },
  {
    icon: Users,
    title: 'Community Showcase',
    desc: 'Verified projects are featured publicly with links and author credits.'
  },
  {
    icon: Trophy,
    title: 'Gamified Progress',
    desc: 'Track scores, badges, and completion status in your personal dashboard.'
  }
];

export default function Features() {
  return (
    <section id="courses" className="relative py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Everything you need to master coding</h2>
          <p className="mt-3 text-slate-600">From interactive lessons to verified projects—learn like W3Schools, build like a pro.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

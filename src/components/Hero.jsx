import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] sm:h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
            New • Interactive 3D learning experience
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Learn. Build. Get Verified.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Master programming with bite-sized modules, interactive quizzes, practical tasks, and a final project verified by admins. Showcase your work on the community page.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="/login" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700">
              Start Learning <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#community" className="inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Explore Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

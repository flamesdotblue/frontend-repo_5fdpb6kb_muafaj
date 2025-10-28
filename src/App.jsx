import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CommunityPreview from './components/CommunityPreview';

function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <CommunityPreview />
    </>
  );
}

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next = { email: '', password: '' };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      next.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      next.email = 'Enter a valid email address';
    }

    if (!password) {
      next.password = 'Password is required';
    } else if (password.length < 6) {
      next.password = 'Password must be at least 6 characters';
    }

    setErrors(next);
    return !next.email && !next.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // Simulate simple client-side auth then navigate
    setTimeout(() => {
      setSubmitting(false);
      navigate('/dashboard');
    }, 600);
  };

  const continueAsGuest = () => {
    navigate('/dashboard');
  };

  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
      <p className="mt-2 text-slate-600">Sign in to continue your learning journey.</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-200'}`}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-200'}`}
            placeholder="••••••••"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          {errors.password && (
            <p id="password-error" className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={submitting}
          className={`w-full rounded-md px-4 py-2.5 text-sm font-medium text-white transition ${submitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
        >
          {submitting ? 'Signing in…' : 'Continue'}
        </button>
      </form>
      <div className="mt-4 text-sm text-slate-600">
        <p>
          Don't have an account?{' '}
          <button onClick={continueAsGuest} className="text-indigo-600 hover:text-indigo-700 font-medium underline underline-offset-2">
            Continue as guest
          </button>
        </p>
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Your Dashboard</h1>
      <p className="mt-2 text-slate-600">Track progress, resume modules, and see your quiz scores.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link to="/module/1" className="rounded-xl border border-slate-200 p-5 hover:shadow-md transition">
          <h3 className="font-semibold text-slate-900">Module 1: Basics</h3>
          <p className="mt-1 text-sm text-slate-600">Variables, types, and I/O</p>
        </Link>
        <Link to="/module/2" className="rounded-xl border border-slate-200 p-5 hover:shadow-md transition">
          <h3 className="font-semibold text-slate-900">Module 2: Control Flow</h3>
          <p className="mt-1 text-sm text-slate-600">Conditionals and loops</p>
        </Link>
        <Link to="/quiz/1" className="rounded-xl border border-slate-200 p-5 hover:shadow-md transition">
          <h3 className="font-semibold text-slate-900">Quiz: Basics</h3>
          <p className="mt-1 text-sm text-slate-600">10 questions</p>
        </Link>
      </div>
      <div className="mt-8 flex gap-3">
        <Link to="/project-submission" className="rounded-md border px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Submit Project</Link>
        <Link to="/community" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">Explore Community</Link>
      </div>
    </div>
  );
}

function SimplePage({ title, children }) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h1>
      {children && <div className="mt-4 text-slate-700">{children}</div>}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/community" element={<SimplePage title="Community">
            <p>Discover verified projects built by learners like you.</p>
          </SimplePage>} />
          <Route path="/project-submission" element={<SimplePage title="Project Submission">
            <p>Upload your final project for admin review and verification.</p>
          </SimplePage>} />
          <Route path="/admin" element={<SimplePage title="Admin">
            <p>Review and verify submissions. (Admin tools coming soon)</p>
          </SimplePage>} />
          <Route path="/module/:id" element={<SimplePage title="Module">
            <p>Interactive lessons and coding tasks.</p>
          </SimplePage>} />
          <Route path="/quiz/:id" element={<SimplePage title="Quiz">
            <p>Answer questions and see your score immediately.</p>
          </SimplePage>} />
          <Route path="*" element={<SimplePage title="Page Not Found">
            <p>We couldn't find that page. Go back to the <Link className="text-indigo-600 hover:text-indigo-700 font-medium" to="/">homepage</Link>.</p>
          </SimplePage>} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} CodeQuest — Learn. Build. Get Verified.</p>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/project-submission" className="text-slate-700 hover:text-slate-900">Submit Project</Link>
            <Link to="/admin" className="text-slate-700 hover:text-slate-900">Admin</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

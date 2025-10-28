import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CommunityPreview from './components/CommunityPreview';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CommunityPreview />
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} CodeQuest — Learn. Build. Get Verified.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="/project-submission" className="text-slate-700 hover:text-slate-900">Submit Project</a>
            <a href="/admin" className="text-slate-700 hover:text-slate-900">Admin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

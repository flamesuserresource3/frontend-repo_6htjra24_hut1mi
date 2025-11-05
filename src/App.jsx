import Hero from './components/Hero';
import StylesShowcase from './components/StylesShowcase';
import About from './components/About';
import ContactCTA from './components/ContactCTA';

function Footer() {
  return (
    <footer className="bg-black py-10 text-center text-white/60">
      <p className="text-sm">© {new Date().getFullYear()} Maestro di Ballo — Design moderno, anima classica.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl border border-white/10 bg-black/30 px-6 py-3 backdrop-blur sm:px-10 lg:px-12">
        <a href="#" className="text-sm font-semibold tracking-wide text-white">MAESTRO</a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#lezioni" className="hover:text-white">Corsi</a>
          <a href="#about" className="hover:text-white">Chi sono</a>
          <a href="#contatti" className="hover:text-white">Contatti</a>
        </nav>
        <a href="#contatti" className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/90">Prenota</a>
      </header>

      <main>
        <Hero />
        <StylesShowcase />
        <About />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}

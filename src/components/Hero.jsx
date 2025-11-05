import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Sparkles, Calendar, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7mM-0u3s2cyVdQ8W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 pt-28 pb-20 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm text-white/80">Danze Standard • Liscio • Caraibico • Boogie</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl"
        >
          Eleganza, Ritmo e Stile
          <span className="block bg-gradient-to-r from-fuchsia-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
            con un tocco moderno
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Sono un insegnante di ballo che unisce tecnica e creatività per farti vivere la danza
          con autenticità. Lezioni personalizzate, coreografie su misura e vibrazioni positive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contatti"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
          >
            <Phone className="h-4 w-4" /> Prenota una prova
          </a>
          <a
            href="#lezioni"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <Calendar className="h-4 w-4" /> Scopri i corsi
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />
    </section>
  );
}

import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,114,182,0.1),rgba(0,0,0,0))]" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Ciao, sono il tuo insegnante</h2>
          <p className="mt-4 text-white/80">
            La mia missione è farti vivere la danza come un viaggio personale: autentico,
            elegante e pieno di energia. Lavoro con approcci moderni, curando tecnica,
            musicalità e presenza scenica.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-white/90"><Star className="h-5 w-5 text-yellow-300" /> 10+ anni di esperienza</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-white/90"><Award className="h-5 w-5 text-emerald-300" /> Preparazione gare e show</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

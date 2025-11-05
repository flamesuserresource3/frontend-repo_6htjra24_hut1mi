import { motion } from 'framer-motion';
import { Music, Heart, Flame, Diamonds } from 'lucide-react';

const styles = [
  {
    name: 'Danze Standard',
    desc: 'Eleganza, tecnica e armonia in Valzer, Tango, Quickstep e molto altro.',
    icon: Diamonds,
    color: 'from-sky-300/20 to-purple-300/20',
  },
  {
    name: 'Liscio',
    desc: 'Tradizione italiana, convivialità e ritmo per ogni età.',
    icon: Music,
    color: 'from-emerald-300/20 to-teal-300/20',
  },
  {
    name: 'Caraibico',
    desc: 'Salsa, Bachata e Kizomba: passione e connessione al primo passo.',
    icon: Heart,
    color: 'from-pink-300/20 to-fuchsia-300/20',
  },
  {
    name: 'Boogie',
    desc: 'Energia vintage, swing contagioso e tanto divertimento!',
    icon: Flame,
    color: 'from-amber-300/20 to-orange-300/20',
  },
];

export default function StylesShowcase() {
  return (
    <section id="lezioni" className="relative bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.12),rgba(0,0,0,0))]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Corsi e Stili</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Un percorso su misura per te: dal primo passo alla performance, con un approccio
              moderno e coinvolgente.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {styles.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${s.color} p-5`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
              <s.icon className="h-6 w-6 text-white/90" />
              <h3 className="mt-4 text-xl font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="mt-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/90">
                Lezioni individuali e di gruppo
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

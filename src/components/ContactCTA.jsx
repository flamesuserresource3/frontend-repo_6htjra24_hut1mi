import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contatti" className="relative bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(34,197,94,0.1),rgba(0,0,0,0))]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Pronto a ballare?</h2>
          <p className="mt-2 max-w-2xl text-white/70">Scrivimi per una lezione di prova o per informazioni sui corsi.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = data.get('name');
                const message = data.get('message');
                const mailto = `mailto:info@example.com?subject=Contatto%20dal%20sito%20-%20${encodeURIComponent(
                  String(name || '')
                )}&body=${encodeURIComponent(String(message || ''))}`;
                window.location.href = mailto;
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-1 block text-sm text-white/70">Nome</label>
                <input name="name" required className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder-white/40" placeholder="Il tuo nome" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Messaggio</label>
                <textarea name="message" required rows={5} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder-white/40" placeholder="Raccontami cosa vorresti imparare" />
              </div>
              <button type="submit" className="rounded-full bg-white px-5 py-2.5 font-medium text-black transition hover:bg-white/90">
                Invia
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4"
          >
            <a href="tel:+39000000000" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <Phone className="h-5 w-5 text-emerald-300" />
              <div>
                <div className="font-medium">Telefono</div>
                <div className="text-sm text-white/70">+39 000 000 0000</div>
              </div>
            </a>
            <a href="mailto:info@example.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <Mail className="h-5 w-5 text-sky-300" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-white/70">info@example.com</div>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <MapPin className="h-5 w-5 text-fuchsia-300" />
              <div>
                <div className="font-medium">Studio</div>
                <div className="text-sm text-white/70">Milano • Disponibile anche a domicilio</div>
              </div>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <Instagram className="h-5 w-5 text-pink-300" />
              <div>
                <div className="font-medium">Instagram</div>
                <div className="text-sm text-white/70">Seguimi per ispirazioni quotidiane</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

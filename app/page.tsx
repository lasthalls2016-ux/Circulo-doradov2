"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Menu,
  X,
  RadarIcon,
  DatabaseBackup,
  FileText,
  BellRing,
  Frown,
  Wallet,
  BrainCircuit,
  Check,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Marca: el anillo dorado                                            */
/* ------------------------------------------------------------------ */

function GoldRingMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="17.5"
        stroke="url(#ringGradient)"
        strokeWidth="3"
      />
      <path
        d="M20 12.5c-3.8 0-6.9 1.6-6.9 3.6v4.2c0 4 2.9 7.7 6.9 9 4-1.3 6.9-5 6.9-9v-4.2c0-2-3.1-3.6-6.9-3.6Z"
        fill="#D9AF44"
      />
      <defs>
        <linearGradient id="ringGradient" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#E8C766" />
          <stop offset="100%" stopColor="#C79A2B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                              */
/* ------------------------------------------------------------------ */

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#precios", label: "Precios" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2.5">
          <GoldRingMark size={34} />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            SafePyme
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-sky-200/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-card transition-all hover:bg-gold-300 hover:shadow-soft md:inline-block"
        >
          Solicitar demo
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-navy-950 px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-sky-200/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold-400 px-5 py-2.5 text-center text-sm font-semibold text-navy-950"
            >
              Solicitar demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-950 bg-radial-fade pt-16 pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-300">
            <ShieldCheck size={16} />
            Hecho para pymes peruanas
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
            Protege tu pyme sin necesitar un equipo de TI
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-sky-100/75">
            Nos encargamos del monitoreo, los respaldos y la seguridad de tus
            datos todos los días. Tú recibes reportes simples y duermes
            tranquilo sabiendo que tu negocio está cubierto.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 font-semibold text-navy-950 shadow-card transition-all hover:bg-gold-300 hover:shadow-soft"
            >
              Empieza ahora
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/5"
            >
              Ver cómo funciona
            </a>
          </div>

          <p className="mt-8 text-sm text-sky-100/50">
            Sin instalaciones complicadas. Sin contratos de permanencia. Sin
            letra pequeña.
          </p>
        </div>

        <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
          <div className="absolute inset-0 rounded-full border border-gold-400/20" />
          <div className="absolute inset-6 rounded-full border border-gold-400/30" />
          <div className="absolute inset-12 rounded-full border-[3px] border-gold-400/70 shadow-[0_0_60px_-5px_rgba(217,175,68,0.45)]" />
          <ShieldCheck
            size={104}
            strokeWidth={1.4}
            className="relative text-sky-300"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Bloque genérico de sección                                          */
/* ------------------------------------------------------------------ */

function SectionHeading({
  title,
  description,
  light,
}: {
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <h2
        className={`font-display text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-lg leading-relaxed ${
          light ? "text-sky-100/70" : "text-navy-700/70"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  El problema                                                         */
/* ------------------------------------------------------------------ */

const PROBLEMAS = [
  {
    icon: Frown,
    title: "El miedo de no saber qué pasa",
    text: "No sabes si tus datos están seguros hoy, y un ataque podría paralizar tu negocio de un día para otro.",
  },
  {
    icon: Wallet,
    title: "No hay presupuesto para un área de TI",
    text: "Contratar y mantener un equipo técnico propio cuesta más de lo que una pyme puede o quiere pagar.",
  },
  {
    icon: BrainCircuit,
    title: "La tecnología suena complicada",
    text: "Los términos técnicos y las alertas confusas hacen que la seguridad se sienta fuera de tu alcance.",
  },
];

function Problema() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Vivir con la duda de si estás protegido, cansa"
          description="Así se siente hoy la seguridad digital para la mayoría de dueños de pymes."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {PROBLEMAS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-navy-900/5 bg-navy-950/[0.02] p-8 shadow-card"
            >
              <p.icon size={30} className="text-navy-700" strokeWidth={1.6} />
              <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-700/70">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Cómo funciona                                                       */
/* ------------------------------------------------------------------ */

const PASOS = [
  {
    icon: RadarIcon,
    title: "Monitoreo y backups automáticos",
    text: "Vigilamos tus sistemas y respaldamos tu información todos los días, sin que tengas que acordarte de hacerlo.",
  },
  {
    icon: FileText,
    title: "Reportes simples y claros",
    text: "Cada mes recibes un resumen fácil de leer: qué protegimos, qué encontramos y qué significa para tu negocio.",
  },
  {
    icon: BellRing,
    title: "Alertas en tiempo real",
    text: "Si algo requiere tu atención, te avisamos de inmediato y en un lenguaje que entiendes, sin tecnicismos.",
  },
];

function ComoFunciona() {
  return (
    <section id="servicios" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          light
          title="Nosotros cuidamos tus datos. Tú diriges tu negocio."
          description="Un servicio gestionado de principio a fin, pensado para que nunca necesites entender de tecnología."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {PASOS.map((p, i) => (
            <div
              key={p.title}
              className="relative rounded-2xl border border-white/10 bg-navy-800/60 p-8 shadow-soft"
            >
              <span className="font-display text-sm font-semibold text-gold-400">
                Paso {i + 1}
              </span>
              <p.icon
                size={30}
                className="mt-4 text-sky-300"
                strokeWidth={1.6}
              />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-sky-100/70">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Precios                                                             */
/* ------------------------------------------------------------------ */

const BENEFICIOS = [
  "Monitoreo continuo de tus sistemas, 24/7",
  "Backups automáticos y diarios de tu información",
  "Reporte mensual explicado en lenguaje simple",
  "Alertas en tiempo real ante cualquier riesgo",
  "Soporte directo por WhatsApp con un especialista",
  "Sin instalación de hardware ni contratos forzosos",
];

function Precios() {
  return (
    <section id="precios" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Un plan. Sin sorpresas."
          description="Protección completa a un precio pensado para el bolsillo de una pyme, no de una corporación."
        />

        <div className="mx-auto max-w-md rounded-3xl border-2 border-gold-400 bg-navy-950 p-10 text-center shadow-soft">
          <span className="inline-block rounded-full bg-gold-400/15 px-4 py-1 text-sm font-medium text-gold-300">
            Plan SafePyme
          </span>

          <div className="mt-6 flex items-end justify-center gap-1">
            <span className="font-display text-2xl font-semibold text-sky-200">
              S/
            </span>
            <span className="font-display text-6xl font-bold text-white">
              250
            </span>
            <span className="pb-2 text-lg text-sky-100/60">/mes</span>
          </div>
          <p className="mt-2 text-sm text-sky-100/50">
            Facturación mensual · cancela cuando quieras
          </p>

          <ul className="mt-8 space-y-3 text-left">
            {BENEFICIOS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check
                  size={19}
                  className="mt-0.5 shrink-0 text-gold-400"
                  strokeWidth={2.5}
                />
                <span className="text-[15px] text-sky-100/80">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="mt-9 block rounded-full bg-gold-400 px-6 py-3.5 font-semibold text-navy-950 transition-colors hover:bg-gold-300"
          >
            Quiero este plan
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Confianza / testimonios                                             */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: "500+", label: "pymes protegidas en Perú" },
  { value: "24/7", label: "monitoreo continuo" },
  { value: "< 15 min", label: "tiempo de respuesta ante alertas" },
];

const TESTIMONIOS = [
  {
    nombre: "Rocío Salazar",
    negocio: "Distribuidora de abarrotes, Lima",
    texto:
      "Antes me preocupaba no saber si nuestra información estaba a salvo. Ahora recibo un reporte mensual que entiendo sin ayuda de nadie.",
  },
  {
    nombre: "Jorge Huamán",
    negocio: "Consultorio dental, Arequipa",
    texto:
      "Nos avisaron de un intento de acceso raro un domingo por la noche. Sin SafePyme, ni nos hubiéramos enterado.",
  },
];

function Confianza() {
  return (
    <section className="bg-navy-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 border-b border-white/10 pb-16 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold text-gold-400">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-sky-100/60">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {TESTIMONIOS.map((t) => (
            <blockquote
              key={t.nombre}
              className="rounded-2xl border border-white/10 bg-navy-800/50 p-8"
            >
              <p className="text-[15px] leading-relaxed text-sky-100/80">
                “{t.texto}”
              </p>
              <footer className="mt-5">
                <p className="font-display text-sm font-semibold text-white">
                  {t.nombre}
                </p>
                <p className="text-sm text-sky-100/50">{t.negocio}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contacto / demo                                                     */
/* ------------------------------------------------------------------ */

function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", tamano: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    // Simulación de envío: aquí se conectaría un backend o servicio de email real.
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
    }, 900);
  }

  return (
    <section id="contacto" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading
            title="Pide tu demo gratuita"
            description="Cuéntanos un poco de tu negocio y un especialista te contacta en menos de 24 horas."
          />
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Phone size={20} className="mt-0.5 text-navy-700" />
              <div>
                <p className="font-medium text-navy-900">+51 987 654 321</p>
                <p className="text-sm text-navy-700/60">Lunes a viernes, 9am–6pm</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={20} className="mt-0.5 text-navy-700" />
              <p className="font-medium text-navy-900">hola@safepyme.pe</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 text-navy-700" />
              <p className="font-medium text-navy-900">Lima, Perú — atención remota a todo el país</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-navy-900/10 bg-navy-950/[0.03] p-8 shadow-card sm:p-10">
          {enviado ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15">
                <Check size={28} className="text-gold-500" strokeWidth={2.5} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                Solicitud recibida
              </h3>
              <p className="mt-2 max-w-xs text-[15px] text-navy-700/70">
                Gracias, {form.nombre.split(" ")[0] || "amigo(a)"}. Un
                especialista de SafePyme te escribirá a {form.email} muy
                pronto.
              </p>
              <button
                onClick={() => {
                  setEnviado(false);
                  setForm({ nombre: "", email: "", tamano: "" });
                }}
                className="mt-6 text-sm font-medium text-navy-700 underline underline-offset-4 hover:text-navy-900"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-1.5 block text-sm font-medium text-navy-900"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Ej. María Torres"
                  className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-navy-900 outline-none transition-colors focus:border-gold-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-navy-900"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@empresa.com"
                  className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-navy-900 outline-none transition-colors focus:border-gold-400"
                />
              </div>

              <div>
                <label
                  htmlFor="tamano"
                  className="mb-1.5 block text-sm font-medium text-navy-900"
                >
                  Tamaño de tu empresa
                </label>
                <select
                  id="tamano"
                  name="tamano"
                  required
                  value={form.tamano}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-navy-900 outline-none transition-colors focus:border-gold-400"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="1-5">1 a 5 colaboradores</option>
                  <option value="6-20">6 a 20 colaboradores</option>
                  <option value="21-50">21 a 50 colaboradores</option>
                  <option value="50+">Más de 50 colaboradores</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="w-full rounded-full bg-gold-400 px-6 py-3.5 font-semibold text-navy-950 transition-colors hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {enviando ? "Enviando..." : "Solicitar demo gratuita"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="bg-navy-950 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-3">
          <div>
            <a href="#inicio" className="flex items-center gap-2.5">
              <GoldRingMark size={30} />
              <span className="font-display text-base font-bold text-white">
                SafePyme
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sky-100/50">
              Ciberseguridad gestionada para pymes peruanas. Tranquilidad
              todos los días, sin necesitar un equipo de TI.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white">
              Enlaces
            </p>
            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-sky-100/60">
              <a href="#inicio" className="hover:text-white">Inicio</a>
              <a href="#servicios" className="hover:text-white">Servicios</a>
              <a href="#precios" className="hover:text-white">Precios</a>
              <a href="#contacto" className="hover:text-white">Contacto</a>
            </nav>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white">
              Síguenos
            </p>
            <div className="mt-4 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sky-100/70 transition-colors hover:border-gold-400/50 hover:text-gold-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="py-8 text-center text-xs text-sky-100/40">
          © {new Date().getFullYear()} SafePyme. Todos los derechos
          reservados. Lima, Perú.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Página                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problema />
      <ComoFunciona />
      <Precios />
      <Confianza />
      <Contacto />
      <Footer />
    </main>
  );
}

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      <header className="mx-auto w-full max-w-6xl px-5 py-6 md:py-8">
        <div className="flex items-center justify-between gap-4 rounded-full border border-zinc-200/80 bg-white/90 px-5 py-3 backdrop-blur">
          <div className="text-sm font-semibold tracking-tight md:text-base">DespachoDigital</div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex" aria-label="Navegacion principal">
            <a className="transition hover:text-zinc-900" href="#demo">Demo</a>
            <a className="transition hover:text-zinc-900" href="#features">Funciones</a>
            <a className="transition hover:text-zinc-900" href="#cta">Contacto</a>
          </nav>

          <Link
            href="/registro"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            Empezar
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-5 pb-24 pt-10 text-center md:pt-16">
          <p className="text-sm font-medium text-zinc-500">Plataforma para profesionales</p>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-7xl">
            Tu despacho digital. Automatiza citas. Gana autoridad.
          </h1>

          <p className="max-w-3xl text-lg font-medium text-zinc-600 md:text-2xl">
            Plataforma web para profesionales que quieren centralizar su agenda, contenido y clientes.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              Ver demo
            </Link>
            <a
              href="#cta"
              className="rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              Crear cuenta
            </a>
          </div>
        </section>

        <section id="demo" className="mx-auto mb-24 flex w-full max-w-6xl flex-col gap-5 px-5 md:flex-row">
          <aside
            className="flex min-w-56 flex-1 flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm"
            aria-label="Menu lateral de demo"
          >
            <h2 className="text-xl font-bold tracking-tight">Panel</h2>
            <ul className="flex flex-col gap-3 text-sm font-medium text-zinc-600">
              <li>Calendario</li>
              <li>Mensajes</li>
              <li>Contenido</li>
              <li>Perfil</li>
            </ul>
          </aside>

          <div className="flex flex-[2] flex-col gap-5 rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Feed profesional</h2>
            <p className="max-w-2xl text-zinc-600">
              Publica fotos o videos informativos para compartir valor con tus clientes.
            </p>

            <div className="flex flex-wrap gap-4">
              <article className="min-w-60 flex-1 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="text-base font-bold tracking-tight">Video recomendado</h3>
                <p className="mt-2 text-sm font-medium text-zinc-600">
                  Consejos rapidos para mejorar tu productividad semanal.
                </p>
              </article>

              <article className="min-w-60 flex-1 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="text-base font-bold tracking-tight">Nuevo contenido</h3>
                <p className="mt-2 text-sm font-medium text-zinc-600">
                  Comparte novedades de tus servicios en un formato simple.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto mb-24 flex w-full max-w-6xl flex-col items-center gap-7 px-5 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Funciones clave</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold">
              Agenda inteligente
            </div>
            <div className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold">
              Contenido profesional
            </div>
            <div className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold">
              Mensajes directos
            </div>
            <div className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold">
              Espacio privado
            </div>
          </div>
        </section>

        <section id="cta" className="mx-auto mb-28 flex w-full max-w-5xl flex-col items-center gap-6 px-5 text-center">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Empieza a digitalizar tu trabajo hoy
          </h2>
          <a
            href="#"
            className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            contactenos
          </a>
        </section>
      </main>
    </div>
  );
}

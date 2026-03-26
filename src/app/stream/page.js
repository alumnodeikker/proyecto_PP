import Link from "next/link";

export default function StreamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      <main className="mx-auto w-full max-w-7xl px-5 py-6 md:py-8">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Stream profesional</p>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Directo con Laura Gomez</h1>
          </div>
          <Link
            href="/dashboard"
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
          >
            Volver al dashboard
          </Link>
        </header>

        <section className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:p-5">
            <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                <span className="h-2 w-2 rounded-full bg-white"></span>
                EN VIVO
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                1.2k viendo
              </div>
              <div className="flex aspect-video items-center justify-center text-sm font-medium text-zinc-500">
                Ventana de video en directo
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-bold tracking-tight">Como organizar tu agenda para captar mas clientes</h2>
              <p className="mt-2 text-sm text-zinc-600">
                Clase en vivo con estrategias practicas para productividad y comunicacion profesional.
              </p>
            </div>
          </article>

          <aside className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-semibold">Chat en vivo</h3>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                Activo
              </span>
            </div>

            <div className="h-80 space-y-3 overflow-y-auto rounded-xl bg-zinc-50 p-3">
              <div className="rounded-xl bg-white px-3 py-2 text-sm shadow-sm">
                <span className="font-semibold">Carlos:</span> Excelente tema, gracias por compartir.
              </div>
              <div className="rounded-xl bg-white px-3 py-2 text-sm shadow-sm">
                <span className="font-semibold">Marta:</span> Recomiendas bloques de 45 o 60 minutos?
              </div>
              <div className="rounded-xl bg-zinc-900 px-3 py-2 text-sm text-white">
                <span className="font-semibold">Laura:</span> Para consultas, 45 minutos funciona muy bien.
              </div>
              <div className="rounded-xl bg-white px-3 py-2 text-sm shadow-sm">
                <span className="font-semibold">Jose:</span> Se guardara la repeticion del live?
              </div>
            </div>

            <form className="mt-3 flex items-center gap-2">
              <input
                type="text"
                placeholder="Escribe en el chat..."
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-zinc-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
              >
                Enviar
              </button>
            </form>
          </aside>
        </section>

        <section className="mt-5 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:p-5">
          <h3 className="text-lg font-semibold tracking-tight">Comentarios</h3>
          <div className="mt-4 space-y-3">
            <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
              <p className="text-sm font-semibold text-zinc-900">Ana Ruiz</p>
              <p className="mt-1 text-sm text-zinc-700">
                Muy claro el ejemplo de agenda semanal, lo voy a implementar esta semana.
              </p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
              <p className="text-sm font-semibold text-zinc-900">Pedro Molina</p>
              <p className="mt-1 text-sm text-zinc-700">
                Seria genial un live sobre automatizacion de recordatorios de citas.
              </p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
              <p className="text-sm font-semibold text-zinc-900">Lucia Torres</p>
              <p className="mt-1 text-sm text-zinc-700">
                Gracias Laura, el formato tipo checklist esta muy util para mis clientes.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

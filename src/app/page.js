import Link from "next/link";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 via-white to-zinc-50 text-zinc-900">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 md:py-8">
        <header className="rounded-full border border-zinc-200/90 bg-white/85 px-5 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm font-semibold tracking-tight md:text-base">DespachoDigital</div>
            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-600">
              Seccion principal
            </span>
          </div>
        </header>

        <main className="flex flex-1 items-center py-10 md:py-16">
          <section className="grid w-full gap-5 rounded-[2rem] border border-zinc-200 bg-white/90 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur md:grid-cols-[1.25fr_1fr] md:p-10">
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Acceso directo</p>
              <h1 className="mt-3 text-4xl font-bold leading-[1.03] tracking-[-0.03em] sm:text-5xl md:text-6xl">
                Entra al dashboard en un solo paso.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-zinc-600 md:text-lg">
                Esta portada es estatica y funciona como seccion de acceso rapido para administrar tu despacho.
              </p>

              <div className="mt-7">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
                >
                  Ingresar
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-zinc-200 bg-zinc-50/80 p-5">
              <p className="text-sm font-semibold text-zinc-700">Vista previa</p>
              <div className="mt-4 space-y-3">
                <article className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Dashboard</p>
                  <p className="mt-2 text-base font-semibold tracking-tight text-zinc-900">
                    Muro, agenda y mensajes en un solo lugar.
                  </p>
                </article>
                <article className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Productividad</p>
                  <p className="mt-2 text-base font-semibold tracking-tight text-zinc-900">
                    Acceso inmediato para empezar a trabajar.
                  </p>
                </article>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}

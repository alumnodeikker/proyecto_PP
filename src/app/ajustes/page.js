import Link from "next/link";

export default function AjustesPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto w-full max-w-7xl px-5 py-6 md:py-8">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Configuracion de cuenta</p>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Panel de Ajustes</h1>
          </div>
          <Link
            href="/dashboard"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Volver al dashboard
          </Link>
        </header>

        <section className="flex flex-wrap gap-5">
          <article className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:w-[calc(50%-0.625rem)]">
            <h2 className="text-lg font-semibold tracking-tight">Preferencias generales</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="idioma" className="mb-1 block text-sm font-semibold text-gray-700">
                  Idioma de la plataforma
                </label>
                <select
                  id="idioma"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
                >
                  <option>Espanol</option>
                  <option>Ingles</option>
                  <option>Portugues</option>
                </select>
              </div>

              <div>
                <label htmlFor="tema" className="mb-1 block text-sm font-semibold text-gray-700">
                  Color del tema
                </label>
                <select
                  id="tema"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
                >
                  <option>Claro (actual)</option>
                  <option>Oscuro</option>
                  <option>Azul profesional</option>
                </select>
              </div>

              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300" />
                Recibir notificaciones por correo
              </label>
            </div>
          </article>

          <article className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:w-[calc(50%-0.625rem)]">
            <h2 className="text-lg font-semibold tracking-tight">Conexion Stream (OBS)</h2>
            <p className="mt-1 text-sm text-gray-600">
              Configura tu transmision en vivo desde aplicaciones externas como OBS.
            </p>

            <div className="mt-4 space-y-3">
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Servidor RTMP</label>
                <input
                  type="text"
                  defaultValue="rtmp://live.despachodigital.app/stream"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-700"
                  readOnly
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Clave de stream</label>
                <div className="flex items-center gap-2">
                  <input
                    type="password"
                    defaultValue="DD-2026-STREAM-KEY-8941"
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-700"
                    readOnly
                  />
                  <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                    Copiar
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:w-[calc(50%-0.625rem)]">
            <h2 className="text-lg font-semibold tracking-tight">Promocion y referidos</h2>
            <p className="mt-1 text-sm text-gray-600">Genera un enlace para invitar profesionales y ganar descuentos.</p>

            <div className="mt-4">
              <label className="mb-1 block text-sm font-semibold text-gray-700">Tu enlace de promocion</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  defaultValue="https://despachodigital.app/invite/laura-gomez-pro"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-700"
                  readOnly
                />
                <button className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">
                  Generar
                </button>
              </div>
            </div>
          </article>

          <article className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:w-[calc(50%-0.625rem)]">
            <h2 className="text-lg font-semibold tracking-tight">Estadisticas de usuarios</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="w-[calc(50%-0.375rem)] rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Registrados</p>
                <p className="mt-1 text-2xl font-bold">1,284</p>
              </div>
              <div className="w-[calc(50%-0.375rem)] rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Activos</p>
                <p className="mt-1 text-2xl font-bold">846</p>
              </div>
              <div className="w-[calc(50%-0.375rem)] rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Nuevos (30 dias)</p>
                <p className="mt-1 text-2xl font-bold">217</p>
              </div>
              <div className="w-[calc(50%-0.375rem)] rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Tasa de renovacion</p>
                <p className="mt-1 text-2xl font-bold">78%</p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Membresia y precios</h2>
              <p className="mt-1 text-sm text-gray-600">Define la tarifa mensual para acceso a la plataforma.</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Modelo SaaS activo</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <article className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 md:w-[calc(33.333%-0.667rem)]">
              <p className="text-sm font-semibold">Plan Basico</p>
              <p className="mt-1 text-2xl font-bold">
                19 EUR<span className="text-sm font-medium text-gray-500">/mes</span>
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                <li>1 perfil profesional</li>
                <li>Agenda y mensajes</li>
                <li>Soporte estandar</li>
              </ul>
              <button className="mt-4 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                Seleccionar
              </button>
            </article>

            <article className="w-full rounded-xl border border-gray-900 bg-gray-900 p-4 text-white shadow-sm md:w-[calc(33.333%-0.667rem)]">
              <p className="text-sm font-semibold">Plan Pro</p>
              <p className="mt-1 text-2xl font-bold">
                39 EUR<span className="text-sm font-medium text-gray-300">/mes</span>
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-200">
                <li>Todo lo del basico</li>
                <li>Live stream + integracion OBS</li>
                <li>Estadisticas avanzadas</li>
              </ul>
              <button className="mt-4 w-full rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-200">
                Plan actual
              </button>
            </article>

            <article className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 md:w-[calc(33.333%-0.667rem)]">
              <p className="text-sm font-semibold">Plan Empresa</p>
              <p className="mt-1 text-2xl font-bold">
                89 EUR<span className="text-sm font-medium text-gray-500">/mes</span>
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                <li>Hasta 10 perfiles</li>
                <li>Reportes completos</li>
                <li>Soporte prioritario</li>
              </ul>
              <button className="mt-4 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                Solicitar demo
              </button>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

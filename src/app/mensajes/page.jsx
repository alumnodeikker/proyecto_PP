import Link from "next/link";

export default function MensajesPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto w-full max-w-7xl px-5 py-6 md:py-8">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Comunicacion centralizada</p>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Centro de Mensajes</h1>
          </div>
          <Link
            href="/dashboard"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Volver al dashboard
          </Link>
        </header>

        <section className="mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
          <h2 className="text-lg font-semibold tracking-tight">Conectar cuentas de correo</h2>
          <p className="mt-1 text-sm text-gray-600">
            Integra tus correos para recibir y revisar mensajes en un solo lugar.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <article className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 md:w-[calc(33.333%-0.5rem)]">
              <p className="text-sm font-semibold text-gray-900">Gmail</p>
              <p className="mt-1 text-xs text-gray-600">Sincroniza tu cuenta de Google Workspace o Gmail personal.</p>
              <button className="mt-3 rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">
                Conectar Gmail
              </button>
            </article>

            <article className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 md:w-[calc(33.333%-0.5rem)]">
              <p className="text-sm font-semibold text-gray-900">Correo corporativo</p>
              <p className="mt-1 text-xs text-gray-600">Conecta tu dominio profesional (IMAP/SMTP).</p>
              <button className="mt-3 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                Conectar dominio
              </button>
            </article>

            <article className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 md:w-[calc(33.333%-0.5rem)]">
              <p className="text-sm font-semibold text-gray-900">Estado de integracion</p>
              <p className="mt-1 text-xs text-gray-600">1 cuenta conectada. Ultima sincronizacion: hace 2 min.</p>
              <button className="mt-3 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                Sincronizar ahora
              </button>
            </article>
          </div>
        </section>

        <section className="flex flex-wrap gap-5">
          <aside className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:w-[320px] lg:flex-none">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">Bandeja</h3>
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">12 nuevos</span>
            </div>

            <div className="mt-3 space-y-2">
              <button className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-left transition hover:bg-gray-100">
                <p className="text-sm font-semibold">Soporte Google</p>
                <p className="mt-1 text-xs text-gray-600">Verificacion de acceso completada</p>
              </button>
              <button className="w-full rounded-xl border border-gray-200 bg-white p-3 text-left transition hover:bg-gray-50">
                <p className="text-sm font-semibold">Cliente: Ana Ruiz</p>
                <p className="mt-1 text-xs text-gray-600">Consulta sobre plan premium</p>
              </button>
              <button className="w-full rounded-xl border border-gray-200 bg-white p-3 text-left transition hover:bg-gray-50">
                <p className="text-sm font-semibold">Pedro Molina</p>
                <p className="mt-1 text-xs text-gray-600">Solicitud de reunion para el jueves</p>
              </button>
              <button className="w-full rounded-xl border border-gray-200 bg-white p-3 text-left transition hover:bg-gray-50">
                <p className="text-sm font-semibold">Facturacion</p>
                <p className="mt-1 text-xs text-gray-600">Comprobante de pago disponible</p>
              </button>
            </div>
          </aside>

          <article className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:flex-1">
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-500">De: soporte@google.com</p>
              <h2 className="mt-1 text-xl font-bold tracking-tight">Verificacion de acceso completada</h2>
              <p className="mt-1 text-xs text-gray-500">Recibido hoy, 09:42</p>
            </div>

            <div className="py-5 text-sm leading-6 text-gray-700">
              <p>Hola Laura,</p>
              <p className="mt-3">
                Tu cuenta conectada a Despacho Digital fue validada correctamente. Ya puedes recibir y responder
                mensajes desde este centro.
              </p>
              <p className="mt-3">
                Si no reconoces esta accion, revisa la configuracion de seguridad en tu cuenta principal.
              </p>
              <p className="mt-3">Equipo de soporte</p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <label htmlFor="respuesta" className="mb-2 block text-sm font-semibold text-gray-900">
                Responder desde el centro
              </label>
              <textarea
                id="respuesta"
                rows={4}
                placeholder="Escribe tu respuesta..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-500"
              />
              <div className="mt-3 flex items-center gap-2">
                <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">
                  Enviar respuesta
                </button>
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                  Guardar borrador
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

import Link from "next/link";

export default function RegistroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-100 text-zinc-900">
      <main className="mx-auto w-full max-w-3xl px-5 py-10 md:py-14">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-block rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
            >
              Volver al inicio
            </Link>
            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Crea tu perfil profesional</h1>
            <p className="mt-2 text-zinc-600">Completa tu inscripcion para abrir tu perfil en la plataforma.</p>
          </div>

          <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="nombre" className="mb-1 block text-sm font-semibold text-zinc-700">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-zinc-500"
                placeholder="Ej. Reynaldo"
              />
            </div>

            <div>
              <label htmlFor="apellido" className="mb-1 block text-sm font-semibold text-zinc-700">
                Apellido
              </label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                required
                className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-zinc-500"
                placeholder="Ej. Figuera"
              />
            </div>

            <div>
              <label htmlFor="ocupacion" className="mb-1 block text-sm font-semibold text-zinc-700">
                Ocupacion
              </label>
              <input
                id="ocupacion"
                name="ocupacion"
                type="text"
                required
                className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-zinc-500"
                placeholder="Ej. Psicologo, abogado, consultor..."
              />
            </div>

            <div>
              <label htmlFor="lugar" className="mb-1 block text-sm font-semibold text-zinc-700">
                Ciudad / Lugar
              </label>
              <input
                id="lugar"
                name="lugar"
                type="text"
                required
                className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-zinc-500"
                placeholder="Ej. Madrid"
              />
            </div>

            <div>
              <label htmlFor="pais" className="mb-1 block text-sm font-semibold text-zinc-700">
                Pais
              </label>
              <input
                id="pais"
                name="pais"
                type="text"
                required
                className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-zinc-500"
                placeholder="Ej. Espana"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="mb-1 block text-sm font-semibold text-zinc-700">
                Telefono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-zinc-500"
                placeholder="+34 600 000 000"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-zinc-700">
                Correo electronico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-zinc-500"
                placeholder="tu@correo.com"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="bio" className="mb-1 block text-sm font-semibold text-zinc-700">
                Descripcion profesional
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-zinc-500"
                placeholder="Describe brevemente tu servicio, experiencia y enfoque."
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="password" className="mb-1 block text-sm font-semibold text-zinc-700">
                Contrasena
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-zinc-500"
                placeholder="Minimo 8 caracteres"
              />
            </div>

            <label className="md:col-span-2 mt-2 flex items-start gap-2 text-sm text-zinc-600">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
              Acepto los terminos de uso y la politica de privacidad.
            </label>

            <button
              type="submit"
              className="md:col-span-2 mt-3 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              Crear perfil
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function PerfilPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto w-full max-w-7xl px-5 py-6 md:py-8">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Marca personal</p>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Perfil profesional</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">
              Editar perfil
            </button>
            <Link
              href="/dashboard"
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Volver al dashboard
            </Link>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:col-span-2">
            <div className="flex flex-wrap items-center gap-4">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=320&q=80"
                alt="Foto de Laura Gomez"
                width={96}
                height={96}
                unoptimized
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Laura Gomez</h2>
                <p className="text-base text-gray-600">Consultora de productividad para profesionales y equipos</p>
                <p className="mt-1 text-sm text-gray-500">Madrid, Espana | Atencion online y presencial</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-700">
              Ayudo a personas y empresas a ordenar su flujo de trabajo, reducir el estres operativo y crear sistemas
              simples para sostener resultados en el tiempo. Mi enfoque mezcla organizacion semanal, priorizacion y
              comunicacion clara.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Clientes atendidos</p>
                <p className="mt-1 text-2xl font-bold">240+</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Sesiones realizadas</p>
                <p className="mt-1 text-2xl font-bold">1,100+</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Satisfaccion promedio</p>
                <p className="mt-1 text-2xl font-bold">4.9/5</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight">Informacion de contacto</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Email: laura@productividadpro.com</li>
              <li>Telefono: +34 600 123 456</li>
              <li>Web: productividadpro.com</li>
              <li>Horario: Lunes a Viernes, 09:00 - 18:00</li>
            </ul>
            <button className="mt-4 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
              Compartir perfil
            </button>
          </article>
        </section>

        <section className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:col-span-2">
            <h3 className="text-lg font-semibold tracking-tight">Que hago y como puedo ayudarte</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-900">Diagnostico de productividad</p>
                <p className="mt-1 text-sm text-gray-600">
                  Analisis de rutinas, bloqueos y fugas de tiempo para definir mejoras de alto impacto.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-900">Sistema de planificacion semanal</p>
                <p className="mt-1 text-sm text-gray-600">
                  Diseno una estructura simple para priorizar tareas y mantener enfoque sin saturacion.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-900">Coaching para equipos</p>
                <p className="mt-1 text-sm text-gray-600">
                  Mejora de comunicacion interna, claridad de objetivos y seguimiento de resultados.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-900">Mentoria para liderazgo personal</p>
                <p className="mt-1 text-sm text-gray-600">
                  Habitos, toma de decisiones y gestion de energia para sostener rendimiento.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight">Especialidades</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Productividad personal</li>
              <li>Habitos de alto rendimiento</li>
              <li>Gestion del tiempo</li>
              <li>Organizacion de procesos</li>
              <li>Comunicacion profesional</li>
            </ul>
          </article>
        </section>

        <section className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:col-span-2">
            <h3 className="text-lg font-semibold tracking-tight">Contenido de valor para tu audiencia</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">Guia: 5 pasos para ordenar tu semana en 30 minutos</p>
                <p className="mt-1 text-sm text-gray-600">
                  Formato practico que puedes compartir en redes o en tu newsletter.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">Plantilla: matriz de prioridades para clientes ocupados</p>
                <p className="mt-1 text-sm text-gray-600">
                  Recurso descargable para generar confianza y educar a tu comunidad.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">Video corto: errores comunes al planificar objetivos</p>
                <p className="mt-1 text-sm text-gray-600">
                  Contenido ideal para captar nuevos seguidores y abrir conversaciones.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight">Llamado a la accion</h3>
            <p className="mt-2 text-sm text-gray-600">
              Reserva una sesion de diagnostico para identificar mejoras inmediatas en tu productividad.
            </p>
            <div className="mt-4 space-y-2">
              <Link
                href="/calendario"
                className="block rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                Agendar cita
              </Link>
              <Link
                href="/mensajes"
                className="block rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Enviar mensaje
              </Link>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

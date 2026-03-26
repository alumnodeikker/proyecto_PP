"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function DashboardPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("demo_posts");
    const parsed = raw ? JSON.parse(raw) : [];
    setPosts(Array.isArray(parsed) ? parsed : []);
  }, []);

  const orderedPosts = useMemo(() => posts.slice().reverse(), [posts]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex min-h-screen">
        <aside className="w-72 shrink-0 border-r border-gray-200 bg-white p-8">
          <div className="mb-10 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80"
              alt="Foto de perfil"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold tracking-tight">Laura Gomez</p>
              <p className="text-sm text-gray-500">Consultora de productividad</p>
            </div>
          </div>

          <nav className="flex flex-col gap-3 text-base" aria-label="Menu principal">
            <Link href="/perfil" className="rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white">
              Perfil
            </Link>
            <Link href="/publicar" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-gray-100">
              Publicar
            </Link>
            <Link href="/calendario" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-gray-100">
              Calendario
            </Link>
            <Link href="/mensajes" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-gray-100">
              Mensajes
            </Link>
            <Link href="/contenido" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-gray-100">
              Contenido
            </Link>
            <Link href="/ajustes" className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-gray-100">
              Ajustes
            </Link>
          </nav>
        </aside>

        <main className="flex flex-1 flex-col">
          <header className="border-b border-gray-200 bg-white px-10 py-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Muro profesional</h2>
                <p className="mt-2 text-lg text-gray-600">
                  Publica contenido informativo para tus clientes: imagenes, videos y novedades.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/stream"
                  className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
                >
                  Ir al Live
                </Link>
                <Link
                  href="/"
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
          </header>

          <div className="flex flex-1 gap-6 p-6">
            <section className="flex-1 space-y-6">
              <section id="publicacionesUsuario" className="space-y-4">
                {orderedPosts.length > 0 ? (
                  <>
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                      <p className="text-sm font-semibold text-blue-800">Publicaciones recientes del usuario</p>
                    </div>
                    {orderedPosts.map((post) => (
                      <article
                        key={post.id}
                        className="rounded-lg border border-gray-200 bg-white p-7 shadow-sm"
                      >
                        <h3 className="text-2xl font-semibold tracking-tight">
                          {post.title || "Nueva publicacion"}
                        </h3>
                        <p className="mt-3 text-base text-gray-600">{post.description || ""}</p>
                        {post.type === "video" ? (
                          <video
                            className="mt-5 h-52 w-full rounded-lg bg-gray-100 object-cover"
                            controls
                            src={post.media || ""}
                          />
                        ) : (
                          <img
                            className="mt-5 h-52 w-full rounded-lg bg-gray-100 object-cover"
                            src={post.media || ""}
                            alt="Media"
                          />
                        )}
                        <p className="mt-4 text-sm font-medium text-gray-500">
                          {post.dateText || "Publicacion reciente"}
                        </p>
                      </article>
                    ))}
                  </>
                ) : null}
              </section>

              <article className="rounded-lg border border-gray-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-tight">Nuevas recomendaciones para consultas online</h3>
                <p className="mt-3 text-base text-gray-600">
                  Resumen corto del post para explicar un consejo util a tus clientes.
                </p>
                <div className="mt-5 flex h-52 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                  Placeholder imagen / video
                </div>
                <p className="mt-4 text-sm font-medium text-gray-500">03 marzo 2026</p>
              </article>

              <article className="rounded-lg border border-gray-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-tight">Guia rapida para mejorar la productividad</h3>
                <p className="mt-3 text-base text-gray-600">
                  Comparte una explicacion sencilla sobre como organizar mejor la semana.
                </p>
                <div className="mt-5 flex h-52 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                  Placeholder imagen / video
                </div>
                <p className="mt-4 text-sm font-medium text-gray-500">01 marzo 2026</p>
              </article>

              <article className="rounded-lg border border-gray-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-tight">Video corto: pasos para una atencion mas clara</h3>
                <p className="mt-3 text-base text-gray-600">
                  Explica en pocos puntos una buena practica para comunicarte con clientes.
                </p>
                <div className="mt-5 flex h-52 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                  Placeholder imagen / video
                </div>
                <p className="mt-4 text-sm font-medium text-gray-500">27 febrero 2026</p>
              </article>
            </section>

            <aside className="w-80 shrink-0 space-y-4">
              <section className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">Resumen del perfil</h3>
                <p className="mt-2 text-sm text-gray-600">Perfil completado 60%</p>
                <button className="mt-3 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white">
                  Completar perfil
                </button>
              </section>

              <section className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">Proximas citas</h3>
                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  <p>Cliente: Juan Perez</p>
                  <p>Fecha: 10/03/2026</p>
                  <p>Hora: 10:00</p>
                </div>
              </section>

              <section className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">Consejos profesionales</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>Publica contenido con frecuencia</li>
                  <li>Manten tu agenda actualizada</li>
                  <li>Responde mensajes rapidamente</li>
                </ul>
              </section>
              <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900">Chat profesional</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                    En linea
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500">Conversacion con Laura Gomez</p>

                <div className="mt-3 space-y-3 rounded-lg bg-gray-50 p-3">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">
                    Hola Laura, queria consultar disponibilidad para la proxima semana.
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-gray-900 px-3 py-2 text-sm text-white">
                    Claro, tengo espacios el martes y jueves por la manana.
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">
                    Perfecto, me interesa el jueves a las 10:00.
                  </div>
                </div>

                <form className="mt-3 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-gray-500"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
                  >
                    Enviar
                  </button>
                </form>
                <Link
                  href="/mensajes"
                  className="mt-3 inline-block text-sm font-semibold text-gray-700 transition hover:text-gray-900"
                >
                  Abrir centro de mensajes
                </Link>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const imagenes = [
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
];

export default function ContenidoPage() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);
  const [estado, setEstado] = useState("");
  const [estadoClase, setEstadoClase] = useState("text-sm font-medium");
  const [agendadas, setAgendadas] = useState([]);

  const previewTitulo = titulo.trim() || "Titulo de ejemplo";
  const previewDescripcion = descripcion.trim() || "Aqui veras como quedaria el contenido antes de publicarlo.";

  const totalAgendadas = agendadas.length;

  const orderedAgendadas = useMemo(() => {
    return agendadas
      .slice()
      .sort((a, b) => new Date(a.scheduleAt).getTime() - new Date(b.scheduleAt).getTime());
  }, [agendadas]);

  const loadAgendadas = () => {
    const raw = localStorage.getItem("demo_scheduled_posts");
    const parsed = raw ? JSON.parse(raw) : [];
    setAgendadas(Array.isArray(parsed) ? parsed : []);
  };

  useEffect(() => {
    loadAgendadas();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!titulo.trim() || !descripcion.trim() || !fecha || !imagenSeleccionada) {
      setEstado("Completa todos los campos para agendar la publicacion.");
      setEstadoClase("text-sm font-medium text-red-700");
      return;
    }

    const items = JSON.parse(localStorage.getItem("demo_scheduled_posts") || "[]");
    items.push({
      id: Date.now(),
      title: titulo.trim(),
      description: descripcion.trim(),
      image: imagenSeleccionada,
      scheduleAt: fecha,
    });

    localStorage.setItem("demo_scheduled_posts", JSON.stringify(items));
    setEstado("Contenido guardado y agendado correctamente.");
    setEstadoClase("text-sm font-medium text-green-700");
    setTitulo("");
    setDescripcion("");
    setFecha("");
    loadAgendadas();
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto w-full max-w-6xl px-5 py-6 md:py-8">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Gestor de contenido</p>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Banco, preview y agenda</h1>
          </div>
          <Link
            href="/dashboard"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Volver al dashboard
          </Link>
        </header>

        <div className="flex flex-wrap gap-6">
          <section className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xl:flex-[2_1_0%]">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-semibold tracking-tight">Nuevo contenido programable</h2>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">Simulacion</span>
            </div>

            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="titulo" className="mb-1 block text-sm font-semibold text-gray-700">
                  Titulo
                </label>
                <input
                  id="titulo"
                  type="text"
                  required
                  value={titulo}
                  onChange={(event) => setTitulo(event.target.value)}
                  placeholder="Ej. 3 habitos para comenzar mejor el dia"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
                />
              </div>

              <div>
                <label htmlFor="descripcion" className="mb-1 block text-sm font-semibold text-gray-700">
                  Descripcion
                </label>
                <textarea
                  id="descripcion"
                  rows={3}
                  required
                  value={descripcion}
                  onChange={(event) => setDescripcion(event.target.value)}
                  placeholder="Escribe el mensaje principal que quieres publicar."
                  className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
                />
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold text-gray-700">Banco de imagenes</p>
                <div className="flex flex-wrap gap-3">
                  {imagenes.map((url) => {
                    const isActive = url === imagenSeleccionada;
                    return (
                      <button
                        key={url}
                        type="button"
                        onClick={() => setImagenSeleccionada(url)}
                        className={`relative h-24 w-[calc(50%-0.375rem)] overflow-hidden rounded-xl border sm:w-[calc(33.333%-0.5rem)] ${
                          isActive ? "border-gray-900" : "border-gray-200"
                        } transition`}
                      >
                        <Image
                          src={url}
                          alt="Imagen de banco"
                          fill
                          unoptimized
                          sizes="(min-width: 1280px) 17vw, (min-width: 640px) 28vw, 44vw"
                          className="object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="w-full sm:w-[calc(50%-0.375rem)]">
                  <label htmlFor="fecha" className="mb-1 block text-sm font-semibold text-gray-700">
                    Fecha y hora de publicacion
                  </label>
                  <input
                    id="fecha"
                    type="datetime-local"
                    required
                    value={fecha}
                    onChange={(event) => setFecha(event.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
                  />
                </div>
                <div className="flex w-full items-end gap-2 sm:w-[calc(50%-0.375rem)]">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
                  >
                    Guardar y agendar
                  </button>
                </div>
              </div>

              <p className={estadoClase}>{estado}</p>
            </form>
          </section>

          <section className="w-full space-y-6 xl:flex-[1_1_0%]">
            <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="text-base font-semibold text-gray-900">Preview de publicacion</h2>
              <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-3">
                <div className="relative h-40 w-full overflow-hidden rounded-lg">
                  <Image
                    src={imagenSeleccionada}
                    alt="Preview"
                    fill
                    unoptimized
                    sizes="(min-width: 1280px) 24vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-gray-900">{previewTitulo}</h3>
                <p className="mt-1 text-sm text-gray-600">{previewDescripcion}</p>
              </div>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-900">Publicaciones agendadas</h2>
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600">
                  {totalAgendadas}
                </span>
              </div>
              <div className="mt-3 space-y-2">
                {orderedAgendadas.length === 0 ? (
                  <p className="rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-500">
                    No hay publicaciones agendadas.
                  </p>
                ) : (
                  orderedAgendadas.map((item) => (
                    <article key={item.id} className="rounded-xl border border-gray-200 p-3">
                      <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        {new Date(item.scheduleAt).toLocaleString("es-ES")}
                      </p>
                    </article>
                  ))
                )}
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

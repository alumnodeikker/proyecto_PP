"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function PublicarPage() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("image");
  const [mediaData, setMediaData] = useState("");
  const [estado, setEstado] = useState("");
  const [estadoClase, setEstadoClase] = useState("text-sm font-medium");
  const fileRef = useRef(null);

  const mostrarPreview = (file, tipoContenido) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === "string") {
        setMediaData(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const tipoContenido = tipo;
    const esVideo = file.type.startsWith("video/");
    const esImagen = file.type.startsWith("image/");

    if ((tipoContenido === "video" && !esVideo) || (tipoContenido === "image" && !esImagen)) {
      setEstado("El archivo no coincide con el tipo de contenido seleccionado.");
      setEstadoClase("text-sm font-medium text-red-700");
      setMediaData("");
      if (fileRef.current) {
        fileRef.current.value = "";
      }
      return;
    }

    setEstado("");
    setEstadoClase("text-sm font-medium");
    mostrarPreview(file, tipoContenido);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!mediaData) {
      setEstado("Debes cargar una foto o video antes de publicar.");
      setEstadoClase("text-sm font-medium text-red-700");
      return;
    }

    const posts = JSON.parse(localStorage.getItem("demo_posts") || "[]");
    posts.push({
      id: Date.now(),
      type: tipo,
      title: titulo.trim(),
      description: descripcion.trim(),
      media: mediaData,
      dateText: new Date().toLocaleDateString("es-ES"),
    });

    localStorage.setItem("demo_posts", JSON.stringify(posts));
    setEstado("Publicacion creada. Ya puedes verla en tu muro.");
    setEstadoClase("text-sm font-medium text-green-700");
    setTitulo("");
    setDescripcion("");
    setTipo("image");
    setMediaData("");
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto w-full max-w-4xl px-5 py-6 md:py-8">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Editor de contenido</p>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Crear publicacion</h1>
          </div>
          <Link
            href="/dashboard"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Volver al dashboard
          </Link>
        </header>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <form className="space-y-4" onSubmit={handleSubmit}>
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
                placeholder="Ej. Tips para organizar consultas en linea"
                className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
              />
            </div>

            <div>
              <label htmlFor="descripcion" className="mb-1 block text-sm font-semibold text-gray-700">
                Descripcion
              </label>
              <textarea
                id="descripcion"
                rows={4}
                required
                value={descripcion}
                onChange={(event) => setDescripcion(event.target.value)}
                placeholder="Comparte una descripcion breve y clara para tu audiencia."
                className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div>
                <label htmlFor="tipo" className="mb-1 block text-sm font-semibold text-gray-700">
                  Tipo de contenido
                </label>
                <select
                  id="tipo"
                  value={tipo}
                  onChange={(event) => setTipo(event.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
                >
                  <option value="image">Foto</option>
                  <option value="video">Video</option>
                </select>
              </div>
              <div>
                <label htmlFor="archivo" className="mb-1 block text-sm font-semibold text-gray-700">
                  Archivo
                </label>
                <input
                  id="archivo"
                  ref={fileRef}
                  type="file"
                  required
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 file:mr-3 file:rounded-lg file:border-0 file:bg-gray-900 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-700"
                />
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
              <p className="mb-2 text-sm font-semibold text-gray-800">Vista previa</p>
              <div className="flex h-56 items-center justify-center rounded-lg border border-gray-200 bg-white text-sm text-gray-500">
                {mediaData ? (
                  tipo === "video" ? (
                    <video className="h-full w-full rounded-lg object-cover" src={mediaData} controls />
                  ) : (
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <Image
                        className="object-cover"
                        src={mediaData}
                        alt="Preview"
                        fill
                        unoptimized
                        sizes="(min-width: 768px) 50vw, 90vw"
                      />
                    </div>
                  )
                ) : (
                  "Aun no has cargado un archivo"
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="submit"
                className="rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                Publicar en mi muro
              </button>
              <Link
                href="/dashboard"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Ir al muro
              </Link>
            </div>
            <p className={estadoClase}>{estado}</p>
          </form>
        </section>
      </main>
    </div>
  );
}

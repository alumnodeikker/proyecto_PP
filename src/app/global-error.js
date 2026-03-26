"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="es">
      <body className="antialiased">
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6 text-gray-900">
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Error global</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight">Se produjo un error inesperado</h1>
            <p className="mt-2 text-sm text-gray-600">
              La aplicacion encontro un problema temporal. Intenta recargar para continuar.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Reintentar
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

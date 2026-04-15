"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const precioHora = 100;

export default function CalendarioPage() {
  const [fecha, setFecha] = useState("2026-03-13");
  const [hora, setHora] = useState("10:00");
  const [duracion, setDuracion] = useState(60);
  const [segundosRestantes, setSegundosRestantes] = useState(60 * 60);
  const [estadoSesion, setEstadoSesion] = useState("Estado: lista para iniciar");
  const [estadoClase, setEstadoClase] = useState("mt-2 text-xs font-medium text-green-700");
  const [panelOpaco, setPanelOpaco] = useState(false);
  const [canStart, setCanStart] = useState(true);
  const [citas, setCitas] = useState([]);
  const [confirmText, setConfirmText] = useState("Confirmar cita");
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const precioTotal = useMemo(() => (precioHora * duracion) / 60, [duracion]);

  const formatearTiempo = (segundos) => {
    const min = Math.floor(segundos / 60)
      .toString()
      .padStart(2, "0");
    const sec = (segundos % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  const resetTimer = (minutos) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setSegundosRestantes(minutos * 60);
    setEstadoSesion("Estado: lista para iniciar");
    setEstadoClase("mt-2 text-xs font-medium text-green-700");
    setPanelOpaco(false);
    setCanStart(true);
  };

  const handleDuracionChange = (event) => {
    const minutos = Number(event.target.value);
    setDuracion(minutos);
    resetTimer(minutos);
  };

  const cerrarSesionPorTiempo = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setEstadoSesion("Estado: sesion finalizada por tiempo");
    setEstadoClase("mt-2 text-xs font-medium text-red-700");
    setPanelOpaco(true);
    setCanStart(false);
  };

  const terminarSesionManual = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setEstadoSesion("Estado: sesion cerrada manualmente");
    setEstadoClase("mt-2 text-xs font-medium text-amber-700");
    setPanelOpaco(true);
  };

  const formatearFecha = (valorFecha) => {
    const partes = valorFecha.split("-");
    if (partes.length !== 3) return valorFecha;
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  };

  const agregarCita = () => {
    const minutos = duracion;
    const total = (precioHora * minutos) / 60;
    const nueva = {
      id: Date.now(),
      fecha,
      hora,
      duracion: minutos,
      total,
    };
    setCitas((prev) => [nueva, ...prev]);
    setConfirmText("Cita agendada");
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setConfirmText("Confirmar cita");
    }, 1200);
  };

  const iniciarSesion = () => {
    if (intervalRef.current || segundosRestantes <= 0) return;

    setPanelOpaco(false);
    setEstadoSesion("Estado: sesion en curso");
    setEstadoClase("mt-2 text-xs font-medium text-blue-700");

    intervalRef.current = setInterval(() => {
      setSegundosRestantes((prev) => {
        if (prev <= 1) {
          cerrarSesionPorTiempo();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto w-full max-w-7xl px-5 py-6 md:py-8">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Gestion de citas</p>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Calendario de Consultas</h1>
          </div>
          <Link
            href="/dashboard"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Volver al dashboard
          </Link>
        </header>

        <section className="flex flex-wrap gap-5">
          <article className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:flex-1">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold tracking-tight">Marzo 2026</h2>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                Tarifa: {precioHora} EUR / hora
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
              <div className="w-[calc((100%-3rem)/7)]">Lun</div>
              <div className="w-[calc((100%-3rem)/7)]">Mar</div>
              <div className="w-[calc((100%-3rem)/7)]">Mie</div>
              <div className="w-[calc((100%-3rem)/7)]">Jue</div>
              <div className="w-[calc((100%-3rem)/7)]">Vie</div>
              <div className="w-[calc((100%-3rem)/7)]">Sab</div>
              <div className="w-[calc((100%-3rem)/7)]">Dom</div>
            </div>

            <div className="mt-2 flex flex-wrap gap-2 text-sm">
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-gray-50 py-3 text-gray-400">24</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-gray-50 py-3 text-gray-400">25</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-gray-50 py-3 text-gray-400">26</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-gray-50 py-3 text-gray-400">27</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-gray-50 py-3 text-gray-400">28</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">1</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">2</button>

              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">3</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">4</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">5</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">6</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">7</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">8</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">9</button>

              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">10</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-gray-900 py-3 font-semibold text-white">11</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">12</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-blue-50 py-3 font-semibold text-blue-700">13</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">14</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">15</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">16</button>

              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">17</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">18</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">19</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">20</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">21</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">22</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">23</button>

              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">24</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">25</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">26</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">27</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">28</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">29</button>
              <button className="w-[calc((100%-3rem)/7)] rounded-lg border border-gray-200 bg-white py-3">30</button>
            </div>
          </article>

          <aside className="w-full space-y-5 lg:w-[360px] lg:flex-none">
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold tracking-tight">Agendar cita</h2>
              <p className="mt-1 text-sm text-gray-600">Reserva una consulta legal en vivo con precio por tiempo.</p>

              <form className="mt-4 space-y-3">
                <div>
                  <label htmlFor="fecha" className="mb-1 block text-sm font-semibold text-gray-700">
                    Fecha
                  </label>
                  <input
                    id="fecha"
                    type="date"
                    value={fecha}
                    onChange={(event) => setFecha(event.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="hora" className="mb-1 block text-sm font-semibold text-gray-700">
                    Hora
                  </label>
                  <input
                    id="hora"
                    type="time"
                    value={hora}
                    onChange={(event) => setHora(event.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="duracion" className="mb-1 block text-sm font-semibold text-gray-700">
                    Duracion (minutos)
                  </label>
                  <select
                    id="duracion"
                    value={duracion}
                    onChange={handleDuracionChange}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
                  >
                    <option value={30}>30 min</option>
                    <option value={60}>60 min</option>
                    <option value={90}>90 min</option>
                  </select>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm">
                  <p className="text-gray-600">
                    Precio por hora: <span className="font-semibold text-gray-900">{precioHora} EUR</span>
                  </p>
                  <p className="mt-1 text-gray-600">
                    Total estimado: <span className="font-semibold text-gray-900">{precioTotal} EUR</span>
                  </p>
                </div>

                <button
                  id="confirmarCitaBtn"
                  type="button"
                  onClick={agregarCita}
                  className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
                >
                  {confirmText}
                </button>
              </form>

              <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">Proximas citas</p>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                    {citas.length}
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  {citas.length === 0 ? (
                    <p className="text-xs text-gray-500">Aun no tienes citas agendadas.</p>
                  ) : (
                    citas.map((cita) => (
                      <article key={cita.id} className="rounded-lg border border-gray-200 bg-white p-3">
                        <p className="text-sm font-semibold text-gray-900">Consulta legal</p>
                        <p className="mt-1 text-xs text-gray-600">
                          Fecha: {formatearFecha(cita.fecha)} | Hora: {cita.hora}
                        </p>
                        <p className="mt-1 text-xs text-gray-600">
                          Duracion: {cita.duracion} min | Total: {cita.total} EUR
                        </p>
                      </article>
                    ))
                  )}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold tracking-tight">Consulta en vivo</h2>
              <p className="mt-1 text-sm text-gray-600">La sesion se cierra automaticamente al terminar el tiempo.</p>

              <div className={`mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3 ${panelOpaco ? "opacity-80" : ""}`}>
                <div className="flex aspect-video items-center justify-center rounded-lg bg-white text-sm text-gray-500">
                  Stream de consulta legal (demo)
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-700">Tiempo restante</p>
                  <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                    {formatearTiempo(segundosRestantes)}
                  </span>
                </div>
                <p className={estadoClase}>{estadoSesion}</p>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={iniciarSesion}
                    disabled={!canStart}
                    className={`rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 ${
                      !canStart ? "cursor-not-allowed opacity-60" : ""
                    }`}
                  >
                    Iniciar sesion
                  </button>
                  <button
                    type="button"
                    onClick={terminarSesionManual}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                  >
                    Terminar ahora
                  </button>
                </div>
              </div>
            </section>
          </aside>
        </section>
      </main>
    </div>
  );
}

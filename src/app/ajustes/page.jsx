"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  applyVisualPreferences,
  normalizeLanguage,
  normalizeTheme,
  notifyPreferencesUpdated,
  SETTINGS_STORAGE_KEY,
} from "../../lib/preferences";

const RTMP_SERVER = "rtmp://live.despachodigital.app/stream";
const DEFAULT_STREAM_KEY = "DD-2026-STREAM-KEY-8941";
const DEFAULT_PROMO_LINK = "https://despachodigital.app/invite/laura-gomez-pro";

const PLANES = [
  {
    id: "basico",
    nombre: "Plan Basico",
    precio: "19 EUR",
    beneficios: ["1 perfil profesional", "Agenda y mensajes", "Soporte estandar"],
    accion: "Seleccionar",
  },
  {
    id: "pro",
    nombre: "Plan Pro",
    precio: "39 EUR",
    beneficios: ["Todo lo del basico", "Live stream + integracion OBS", "Estadisticas avanzadas"],
    accion: "Seleccionar",
  },
  {
    id: "empresa",
    nombre: "Plan Empresa",
    precio: "89 EUR",
    beneficios: ["Hasta 10 perfiles", "Reportes completos", "Soporte prioritario"],
    accion: "Solicitar demo",
  },
];

const DEFAULT_SETTINGS = {
  idioma: "es",
  tema: "claro",
  notificacionesEmail: true,
  streamKey: DEFAULT_STREAM_KEY,
  promoLink: DEFAULT_PROMO_LINK,
  planActual: "pro",
};

const TEXTS = {
  es: {
    accountSettings: "Configuracion de cuenta",
    panelSettings: "Panel de Ajustes",
    backDashboard: "Volver al dashboard",
    generalPreferences: "Preferencias generales",
    platformLanguage: "Idioma de la plataforma",
    themeColor: "Color del tema",
    emailNotifications: "Recibir notificaciones por correo",
    savePreferences: "Guardar preferencias",
    languageApplied: "Idioma aplicado.",
    themeApplied: "Tema aplicado.",
    preferencesSaved: "Preferencias guardadas correctamente.",
    spanish: "Espanol",
    english: "Ingles",
    portuguese: "Portugues",
    light: "Claro (actual)",
    dark: "Oscuro",
    blue: "Azul profesional",
  },
  en: {
    accountSettings: "Account settings",
    panelSettings: "Settings Panel",
    backDashboard: "Back to dashboard",
    generalPreferences: "General preferences",
    platformLanguage: "Platform language",
    themeColor: "Theme color",
    emailNotifications: "Receive email notifications",
    savePreferences: "Save preferences",
    languageApplied: "Language applied.",
    themeApplied: "Theme applied.",
    preferencesSaved: "Preferences saved successfully.",
    spanish: "Spanish",
    english: "English",
    portuguese: "Portuguese",
    light: "Light (current)",
    dark: "Dark",
    blue: "Professional blue",
  },
  pt: {
    accountSettings: "Configuracao da conta",
    panelSettings: "Painel de Ajustes",
    backDashboard: "Voltar ao dashboard",
    generalPreferences: "Preferencias gerais",
    platformLanguage: "Idioma da plataforma",
    themeColor: "Cor do tema",
    emailNotifications: "Receber notificacoes por e-mail",
    savePreferences: "Salvar preferencias",
    languageApplied: "Idioma aplicado.",
    themeApplied: "Tema aplicado.",
    preferencesSaved: "Preferencias salvas com sucesso.",
    spanish: "Espanhol",
    english: "Ingles",
    portuguese: "Portugues",
    light: "Claro (atual)",
    dark: "Escuro",
    blue: "Azul profissional",
  },
};

function getTexts(language) {
  return TEXTS[language] || TEXTS.es;
}

function getStoredSettings() {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

async function copyToClipboard(text) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  if (typeof document === "undefined") {
    throw new Error("Clipboard no disponible.");
  }

  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  tempInput.setAttribute("readonly", "");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

export default function AjustesPage() {
  const [idioma, setIdioma] = useState(DEFAULT_SETTINGS.idioma);
  const [tema, setTema] = useState(DEFAULT_SETTINGS.tema);
  const [notificacionesEmail, setNotificacionesEmail] = useState(DEFAULT_SETTINGS.notificacionesEmail);

  const [streamKey, setStreamKey] = useState(DEFAULT_SETTINGS.streamKey);
  const [mostrarClave, setMostrarClave] = useState(false);

  const [promoLink, setPromoLink] = useState(DEFAULT_SETTINGS.promoLink);
  const [planActual, setPlanActual] = useState(DEFAULT_SETTINGS.planActual);

  const [estadoPreferencias, setEstadoPreferencias] = useState("");
  const [estadoStream, setEstadoStream] = useState("");
  const [estadoPromo, setEstadoPromo] = useState("");
  const [estadoPlan, setEstadoPlan] = useState("");
  const t = getTexts(idioma);

  useEffect(() => {
    const stored = getStoredSettings();
    if (!stored) return;

    const storedIdioma = normalizeLanguage(stored.idioma);
    const storedTema = normalizeTheme(stored.tema);

    setIdioma(storedIdioma);
    setTema(storedTema);
    if (typeof stored.notificacionesEmail === "boolean") setNotificacionesEmail(stored.notificacionesEmail);
    if (typeof stored.streamKey === "string") setStreamKey(stored.streamKey);
    if (typeof stored.promoLink === "string") setPromoLink(stored.promoLink);
    if (typeof stored.planActual === "string") setPlanActual(stored.planActual);

    applyVisualPreferences({ idioma: storedIdioma, tema: storedTema });
  }, []);

  const guardarAjustes = (overrides = {}) => {
    const payload = {
      idioma,
      tema,
      notificacionesEmail,
      streamKey,
      promoLink,
      planActual,
      ...overrides,
    };

    localStorage.setItem(
      SETTINGS_STORAGE_KEY,
      JSON.stringify(payload),
    );
    notifyPreferencesUpdated();
  };

  const nombrePlanActual = useMemo(() => {
    const plan = PLANES.find((item) => item.id === planActual);
    return plan ? plan.nombre : "Sin plan";
  }, [planActual]);

  const handleGuardarPreferencias = () => {
    guardarAjustes();
    setEstadoPreferencias(getTexts(idioma).preferencesSaved);
  };

  const handleIdiomaChange = (event) => {
    const nuevoIdioma = normalizeLanguage(event.target.value);
    setIdioma(nuevoIdioma);
    applyVisualPreferences({ idioma: nuevoIdioma, tema });
    guardarAjustes({ idioma: nuevoIdioma });
    setEstadoPreferencias(getTexts(nuevoIdioma).languageApplied);
  };

  const handleTemaChange = (event) => {
    const nuevoTema = normalizeTheme(event.target.value);
    setTema(nuevoTema);
    applyVisualPreferences({ idioma, tema: nuevoTema });
    guardarAjustes({ tema: nuevoTema });
    setEstadoPreferencias(getTexts(idioma).themeApplied);
  };

  const handleCopiarServidor = async () => {
    try {
      await copyToClipboard(RTMP_SERVER);
      setEstadoStream("Servidor RTMP copiado.");
    } catch {
      setEstadoStream("No se pudo copiar el servidor RTMP.");
    }
  };

  const handleCopiarClave = async () => {
    try {
      await copyToClipboard(streamKey);
      setEstadoStream("Clave de stream copiada.");
    } catch {
      setEstadoStream("No se pudo copiar la clave de stream.");
    }
  };

  const handleGenerarEnlace = () => {
    const randomCode = Math.random().toString(36).slice(2, 8);
    const nuevoLink = `https://despachodigital.app/invite/laura-gomez-pro-${randomCode}`;
    setPromoLink(nuevoLink);
    guardarAjustes({ promoLink: nuevoLink });
    setEstadoPromo("Nuevo enlace generado.");
  };

  const handleCopiarEnlacePromo = async () => {
    try {
      await copyToClipboard(promoLink);
      setEstadoPromo("Enlace de promocion copiado.");
    } catch {
      setEstadoPromo("No se pudo copiar el enlace de promocion.");
    }
  };

  const handleSeleccionarPlan = (planId) => {
    setPlanActual(planId);
    guardarAjustes({ planActual: planId });

    const plan = PLANES.find((item) => item.id === planId);
    if (plan) {
      setEstadoPlan(`Tu plan actual ahora es: ${plan.nombre}.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto w-full max-w-7xl px-5 py-6 md:py-8">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{t.accountSettings}</p>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{t.panelSettings}</h1>
          </div>
          <Link
            href="/dashboard"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            {t.backDashboard}
          </Link>
        </header>

        <section className="flex flex-wrap gap-5">
          <article className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:w-[calc(50%-0.625rem)]">
            <h2 className="text-lg font-semibold tracking-tight">{t.generalPreferences}</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="idioma" className="mb-1 block text-sm font-semibold text-gray-700">
                  {t.platformLanguage}
                </label>
                <select
                  id="idioma"
                  value={idioma}
                  onChange={handleIdiomaChange}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
                >
                  <option value="es">{t.spanish}</option>
                  <option value="en">{t.english}</option>
                  <option value="pt">{t.portuguese}</option>
                </select>
              </div>

              <div>
                <label htmlFor="tema" className="mb-1 block text-sm font-semibold text-gray-700">
                  {t.themeColor}
                </label>
                <select
                  id="tema"
                  value={tema}
                  onChange={handleTemaChange}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-gray-500"
                >
                  <option value="claro">{t.light}</option>
                  <option value="oscuro">{t.dark}</option>
                  <option value="azul">{t.blue}</option>
                </select>
              </div>

              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={notificacionesEmail}
                  onChange={(event) => setNotificacionesEmail(event.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                {t.emailNotifications}
              </label>

              <button
                type="button"
                onClick={handleGuardarPreferencias}
                className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                {t.savePreferences}
              </button>

              <p className="text-sm font-medium text-green-700">{estadoPreferencias}</p>
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
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={RTMP_SERVER}
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-700"
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={handleCopiarServidor}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                  >
                    Copiar
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Clave de stream</label>
                <div className="flex items-center gap-2">
                  <input
                    type={mostrarClave ? "text" : "password"}
                    value={streamKey}
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-700"
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={() => setMostrarClave((current) => !current)}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                  >
                    {mostrarClave ? "Ocultar" : "Mostrar"}
                  </button>
                  <button
                    type="button"
                    onClick={handleCopiarClave}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                  >
                    Copiar
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-3 text-sm font-medium text-green-700">{estadoStream}</p>
          </article>

          <article className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:w-[calc(50%-0.625rem)]">
            <h2 className="text-lg font-semibold tracking-tight">Promocion y referidos</h2>
            <p className="mt-1 text-sm text-gray-600">Genera un enlace para invitar profesionales y ganar descuentos.</p>

            <div className="mt-4">
              <label className="mb-1 block text-sm font-semibold text-gray-700">Tu enlace de promocion</label>
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  value={promoLink}
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-700"
                  readOnly
                />
                <button
                  type="button"
                  onClick={handleGenerarEnlace}
                  className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
                >
                  Generar
                </button>
                <button
                  type="button"
                  onClick={handleCopiarEnlacePromo}
                  className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Copiar
                </button>
              </div>
            </div>

            <p className="mt-3 text-sm font-medium text-green-700">{estadoPromo}</p>
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
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Modelo SaaS activo: {nombrePlanActual}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            {PLANES.map((plan) => {
              const isCurrent = plan.id === planActual;

              return (
                <article
                  key={plan.id}
                  className={`w-full rounded-xl p-4 md:w-[calc(33.333%-0.667rem)] ${
                    isCurrent ? "border border-gray-900 bg-gray-900 text-white shadow-sm" : "border border-gray-200 bg-gray-50"
                  }`}
                >
                  <p className="text-sm font-semibold">{plan.nombre}</p>
                  <p className="mt-1 text-2xl font-bold">
                    {plan.precio}
                    <span className={`text-sm font-medium ${isCurrent ? "text-gray-300" : "text-gray-500"}`}>/mes</span>
                  </p>
                  <ul className={`mt-3 space-y-1 text-sm ${isCurrent ? "text-gray-200" : "text-gray-600"}`}>
                    {plan.beneficios.map((beneficio) => (
                      <li key={beneficio}>{beneficio}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => handleSeleccionarPlan(plan.id)}
                    disabled={isCurrent}
                    className={`mt-4 w-full rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      isCurrent
                        ? "cursor-not-allowed bg-white text-gray-900"
                        : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {isCurrent ? "Plan actual" : plan.accion}
                  </button>
                </article>
              );
            })}
          </div>

          <p className="mt-4 text-sm font-medium text-green-700">{estadoPlan}</p>
        </section>
      </main>
    </div>
  );
}

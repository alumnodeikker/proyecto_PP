export const SETTINGS_STORAGE_KEY = "demo_ajustes";

const SUPPORTED_LANGUAGES = new Set(["es", "en", "pt"]);
const SUPPORTED_THEMES = new Set(["claro", "oscuro", "azul"]);

export function normalizeLanguage(language) {
  return SUPPORTED_LANGUAGES.has(language) ? language : "es";
}

export function normalizeTheme(theme) {
  return SUPPORTED_THEMES.has(theme) ? theme : "claro";
}

export function getStoredVisualPreferences() {
  if (typeof window === "undefined") {
    return { idioma: "es", tema: "claro" };
  }

  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return { idioma: "es", tema: "claro" };

    const parsed = JSON.parse(raw);
    return {
      idioma: normalizeLanguage(parsed?.idioma),
      tema: normalizeTheme(parsed?.tema),
    };
  } catch {
    return { idioma: "es", tema: "claro" };
  }
}

export function applyVisualPreferences(preferences) {
  if (typeof document === "undefined") return;

  const idioma = normalizeLanguage(preferences?.idioma);
  const tema = normalizeTheme(preferences?.tema);
  const root = document.documentElement;

  root.lang = idioma;
  root.setAttribute("data-theme", tema);
  root.style.colorScheme = tema === "oscuro" ? "dark" : "light";
}

export function notifyPreferencesUpdated() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("demo:settings-updated"));
}

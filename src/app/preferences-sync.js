"use client";

import { useEffect } from "react";
import { applyVisualPreferences, getStoredVisualPreferences, SETTINGS_STORAGE_KEY } from "../lib/preferences";

export default function PreferencesSync() {
  useEffect(() => {
    const sync = () => {
      applyVisualPreferences(getStoredVisualPreferences());
    };

    const handleStorage = (event) => {
      if (event.key && event.key !== SETTINGS_STORAGE_KEY) return;
      sync();
    };

    sync();
    window.addEventListener("storage", handleStorage);
    window.addEventListener("demo:settings-updated", sync);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("demo:settings-updated", sync);
    };
  }, []);

  return null;
}

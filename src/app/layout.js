import "./globals.css";
import PreferencesSync from "./preferences-sync";

export const metadata = {
  title: "Despacho Digital",
  description: "Plataforma para profesionales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="claro">
      <body className="antialiased text-gray-900">
        <PreferencesSync />
        {children}
      </body>
    </html>
  );
}

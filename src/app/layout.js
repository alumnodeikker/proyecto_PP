import "./globals.css";

export const metadata = {
  title: "Despacho Digital",
  description: "Plataforma para profesionales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased text-gray-900">{children}</body>
    </html>
  );
}

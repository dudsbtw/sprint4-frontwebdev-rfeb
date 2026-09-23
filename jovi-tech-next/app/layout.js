import "./globals.css";

export const metadata = {
  title: "Jovi Tech — Câmeras",
  description: "Tecnologia de câmeras inteligentes para smartphones Jovi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
import "./globals.css";

export const metadata = {
  title: {
    default: "Makota",
    template: "%s | Makota",
  },
  description: "Portal resmi Makota.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://makota.cc"),
  title: {
    default: "Makota - Baca Manga, Manhwa, Manhua Online",
    template: "%s | Makota",
  },
  description: "Portal resmi Makota untuk akses baca komik manga, manhwa, dan manhua terlengkap dan terupdate.",
  keywords: ["makota", "baca komik", "manga", "manhwa", "manhua", "komik online"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Makota - Portal Baca Komik",
    description: "Akses resmi Makota untuk baca manga, manhwa, dan manhua online.",
    url: "https://makota.cc",
    siteName: "Makota",
    images: ["/makota.svg"],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makota - Portal Baca Komik",
    description: "Akses resmi Makota untuk baca manga, manhwa, dan manhua online.",
    images: ["/makota.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Makota",
              url: "https://makota.cc",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
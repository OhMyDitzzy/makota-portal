import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Coffee,
  FileSearch,
  FileText,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Makota - Baca Manga, Manhwa, Manhua Online",
  description: "Portal resmi Makota untuk akses baca komik manga, manhwa, dan manhua terlengkap dan terupdate.",
};

export default function Home() {
  return (
    <main>
      <section className="portal-card">
        <h1 className="sr-only">Makota - Portal Baca Manga, Manhwa, dan Manhua</h1>

        <Image
          src="/makota.svg"
          alt="Makota Logo"
          width={230}
          height={130}
          priority
          className="portal-logo"
        />

        <p className="portal-description">Manga - Manhwa - Manhua</p>

        <p className="sr-only">
          Makota adalah portal resmi untuk membaca komik manga, manhwa, dan
          manhua secara online, gratis, dan terupdate setiap hari.
        </p>

        <div className="portal-buttons">
          <a
            href="https://v1.makota.asia"
            target="_blank"
            rel="noopener noreferrer"
            className="portal-button portal-button-primary"
          >
            <div className="portal-button-content">
              <Globe size={20} />
              <span>Kunjungi Website</span>
            </div>
            <ExternalLink size={18} />
          </a>
          <a
            href="https://saweria"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="portal-button"
          >
            <div className="portal-button-content">
              <Coffee size={20} />
              <span>Dukung Makota</span>
            </div>
            <ExternalLink size={18} />
          </a>
          <Link href="/service" className="portal-button">
            <div className="portal-button-content">
              <FileSearch size={20} />
              <span>Terms of Service</span>
            </div>
            <ChevronRight size={18} />
          </Link>
          <Link href="/policy" className="portal-button">
            <div className="portal-button-content">
              <FileText size={20} />
              <span>Privacy Policy</span>
            </div>
            <ChevronRight size={18} />
          </Link>
        </div>

        <footer className="portal-footer">
          <p className="portal-footer-text">Made with ❤️</p>
          <p className="portal-footer-copy">© Makota 2026</p>
        </footer>
      </section>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Coffee,
  FileSearchCorner,
  FileText,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Makota",
  description: "Portal resmi Makota.",
};

export default function Home() {
  return (
    <main>
      <section className="portal-card">
        <Image
          src="/makota.svg"
          alt="Makota Logo"
          width={230}
          height={130}
          priority
          className="portal-logo"
        />

        <p className="portal-description">Manga - Manhwa - Manhua</p>

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
            rel="noopener noreferrer"
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
              <FileSearchCorner size={20} />
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
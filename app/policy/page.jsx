import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy • Makota",
  description: "Kebijakan hak cipta dan DMCA Makota.",
};

export default function PolicyPage() {
  return (
    <main className="document-page">
      <div className="document-container">
        <header className="document-header">
          <Link href="/" className="document-back">
            <ArrowLeft size={20} />
            <span>Privacy Policy</span>
          </Link>
        </header>

        <article className="document-content">
          <h1>Piracy &amp; DMCA Policy</h1>

          <p>
            Kami sangat menghormati hak kekayaan intelektual orang lain.
            Konten seperti Manga, Manhua, dan Manhwa yang tersedia di
            platform ini dikumpulkan dari berbagai sumber publik yang
            tersedia secara bebas di internet atau diunggah oleh
            pengguna maupun komunitas untuk tujuan promosi dan ulasan
            (review).
          </p>

          <h2>Batasan Tanggung Jawab</h2>

          <p>
            Kami tidak menyimpan file komik secara permanen di server
            utama kami untuk tujuan komersial hak cipta, melainkan hanya
            bertindak sebagai indexing service atau penyedia platform baca.
            Seluruh hak cipta dari komik tersebut sepenuhnya dimiliki oleh
            penulis, ilustrator, dan penerbit resmi masing-masing.
          </p>

          <h2>Pemberitahuan Pelanggaran (DMCA Takedown Request)</h2>

          <p>
            Jika Anda adalah pemegang hak cipta resmi atau perwakilan sah
            dari konten yang ada di situs kami dan keberatan apabila
            konten tersebut ditampilkan di sini, Anda dapat mengajukan
            permohonan penghapusan (Takedown Request) dengan mengirimkan
            email ke:
          </p>

          <p>
            <strong>
              mail.makota@gmail.com
            </strong>
          </p>

          <p>
            Harap sertakan informasi berikut dalam email Anda:
          </p>

          <ol>
            <li>
              Bukti fisik atau elektronik bahwa Anda adalah pemilik sah
              atas hak cipta tersebut.
            </li>

            <li>
              Tautan (URL) spesifik pada website kami yang memuat
              konten yang dianggap melanggar.
            </li>

            <li>
              Alamat email atau kontak yang dapat kami hubungi kembali.
            </li>

            <li>
              Pernyataan bahwa informasi yang diberikan adalah benar
              dan Anda bertindak atas nama pemegang hak cipta.
            </li>
          </ol>

          <h2>Tindakan Kami</h2>

          <p>
            Setelah menerima laporan yang valid dan terverifikasi, kami
            berkomitmen untuk meninjau permohonan tersebut dan menghapus
            konten yang bersangkutan dari platform kami dalam kurun waktu
            2×24 jam pada hari kerja.
          </p>
        </article>

        <footer className="portal-footer">
          <p className="portal-footer-text">
            Made with Love
          </p>

          <p className="portal-footer-copy">
            © Makota 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
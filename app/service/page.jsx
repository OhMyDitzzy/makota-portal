import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Terms of Service • Makota",
  description: "Ketentuan layanan Makota.",
};

export default function ServicePage() {
  return (
    <main className="document-page">
      <div className="document-container">
        <header className="document-header">
          <Link href="/" className="document-back">
            <ArrowLeft size={20} />
            <span>Terms of Service</span>
          </Link>
        </header>

        <article className="document-content">
          <h1>Terms of Service</h1>

          <p>
            Selamat datang di Website Kami. Dengan mengakses dan menggunakan
            platform kami, Anda menyetujui untuk terikat dengan ketentuan
            berikut. Jika Anda tidak menyetujui sebagian atau seluruh
            ketentuan ini, harap tidak menggunakan layanan kami.
          </p>

          <h2>Akun Pengguna &amp; Keamanan</h2>

          <h3>Registrasi &amp; Email</h3>
          <p>
            Akun dibuat menggunakan alamat Gmail aktif. Demi alasan keamanan
            dan validitas akun, alamat Gmail yang sudah terdaftar tidak dapat
            diubah dengan alasan apa pun.
          </p>

          <h3>Penggunaan Akun</h3>
          <p>
            Akun Anda digunakan untuk menyimpan daftar komik favorit, riwayat
            membaca, serta berpartisipasi dalam komunitas seperti komentar
            maupun forum.
          </p>

          <h3>Kebijakan Username</h3>
          <p>
            Pengguna diperbolehkan mengubah username mereka dengan batasan
            satu kali setiap tiga hari (1×/3 hari). Gunakan username yang
            sopan dan tidak meniru identitas pihak lain (impersonation).
          </p>

          <h2>Kebijakan Konten &amp; Kolom Komentar</h2>

          <p>
            Kami menyediakan ruang bagi pengguna untuk berinteraksi, namun
            memberlakukan aturan ketat demi kenyamanan bersama.
          </p>

          <h3>Larangan Konten Tidak Senonoh</h3>
          <p>
            Dilarang keras mengirimkan komentar, avatar, atau menggunakan
            custom sticker yang mengandung unsur pornografi, SARA,
            perjudian, kekerasan ekstrem, maupun ujaran kebencian.
          </p>

          <h3>Kebijakan Spoiler</h3>
          <p>
            Kami menghargai pengalaman membaca pengguna lain. Dilarang keras
            memberikan spoiler cerita secara gamblang di kolom komentar.
          </p>

          <p>
            Jika Anda ingin membahas jalan cerita selanjutnya, wajib
            menggunakan fitur spoiler yang telah disediakan oleh sistem agar
            teks tersembunyi.
          </p>

          <h3>Sanksi Pelanggaran</h3>
          <p>
            Pelanggaran terhadap aturan komentar dan stiker dapat
            mengakibatkan penghapusan komentar, pemblokiran fitur komentar,
            hingga penghapusan akun secara permanen tanpa pemberitahuan
            terlebih dahulu.
          </p>

          <h2>Periklanan (Iklan)</h2>

          <p>
            Platform ini sepenuhnya gratis untuk digunakan. Pendapatan utama
            kami berasal dari slot iklan yang terpasang.
          </p>

          <p>
            Dengan menggunakan situs ini, Anda memahami dan menyetujui adanya
            penayangan iklan di beberapa area website. Kami tidak bertanggung
            jawab atas isi konten maupun produk yang ditawarkan oleh pihak
            ketiga (pengiklan) tersebut.
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
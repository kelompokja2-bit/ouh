import os

# Content for the README.md
readme_content = """# Sistem Manajemen Tugas Lapangan Staff Orangutan Haven (OUH)

Sistem berbasis web ini dirancang untuk memfasilitasi pengelolaan, penugasan, dan pelaporan tugas harian bagi staff di **Orangutan Haven (OUH)**. Aplikasi ini memungkinkan koordinasi yang efisien antara Admin, Koordinator, dan Keeper (Penjaga Satwa) dalam memantau kesehatan serta perawatan Orangutan.

## 👥 Anggota Kelompok 2
1. **Denal Yohannes Hutabarat**
2. **Adelia Sapanda**
3. **M. Habib**
4. **Wahyu Hidayat**
5. **Moses Sitinjak**
6. **Tiara Anggriani**
7. **Muhammad Rafly Hidayat**
8. **Arief Syahputra**

## 🚀 Fitur Utama

Aplikasi ini menggunakan sistem **Role-Based Access Control (RBAC)** dengan tiga akses utama:

### 1. Dashboard Admin
* **Master Pengguna:** Mengelola (tambah/hapus) akun Koordinator dan Keeper.
* **Pemantauan Seluruh Tugas:** Melihat semua tugas yang sedang berjalan atau sudah selesai di sistem secara real-time.
* **Statistik Sistem:** Ringkasan total pengguna dan total tugas yang terdaftar.

### 2. Dashboard Koordinator
* **Manajemen Tugas:** Membuat tugas baru untuk Keeper (contoh: pemeriksaan medis, sanitasi kandang, pemberian vitamin).
* **Validasi Laporan:** Memeriksa laporan yang dikirim oleh Keeper dan menandainya sebagai "Selesai".
* **Generate Tugas Otomatis:** Fitur demo untuk mendistribusikan 6 tugas rutin sekaligus ke lapangan.

### 3. Dashboard Keeper
* **Daftar Tugas:** Menerima instruksi tugas langsung dari Koordinator.
* **Pelaporan Mandiri:** Mengirim laporan penyelesaian tugas ke Koordinator dengan satu klik.
* **Statistik Personal:** Memantau jumlah tugas pending dan tugas yang berhasil diselesaikan.

## 🛠️ Teknologi yang Digunakan
* **Frontend:** HTML5, CSS3 (Custom Responsive Design), JavaScript (Vanilla JS).
* **Tooling:** [Vite](https://vitejs.dev/) untuk build sistem yang cepat.
* **Database & Backend:** [Supabase](https://supabase.com/) (PostgreSQL & Real-time API).
* **Icons:** [Phosphor Icons](https://phosphoricons.com/).
* **Typography:** Google Fonts (Inter & Poppins).

## 📂 Struktur Proyek
```text
├── index.html          # Halaman Login
├── admin.html          # Dashboard Admin
├── kordinator.html     # Dashboard Koordinator
├── keeper.html         # Dashboard Keeper
├── style/
│   ├── admin.css       # Styling khusus admin
│   ├── koordinator.css # Styling khusus koordinator
│   └── keeper.css      # Styling khusus keeper
├── vite.config.js      # Konfigurasi Build Vite
└── README.md           # Dokumentasi Proyek

# Faraday Tour & Travel - Aplikasi Pemesanan Wisata

Aplikasi web lengkap untuk pemesanan paket wisata dengan fitur admin dashboard, client portal, dan integrasi pembayaran Midtrans.

## Struktur Proyek

Proyek ini terdiri dari 3 bagian utama:

```
travel-web/
├── backend/       # API Backend (Express + TypeScript)
├── client/        # Frontend Client (Next.js)
└── admin/         # Admin Dashboard (React + Vite)
```

## Fitur Utama

### Client (Next.js)
- Halaman utama dan pencarian paket wisata
- Detail paket wisata
- Keranjang belanja
- Pemesanan dan pembayaran (Midtrans)
- Riwayat pesanan
- Profil pengguna
- Widget WhatsApp

### Admin Dashboard (React + Vite)
- Dashboard dengan grafik pendapatan
- Manajemen paket wisata (CRUD)
- Manajemen pesanan
- Manajemen pengguna
- Login admin

### Backend (Express + TypeScript)
- RESTful API
- Autentikasi JWT
- Upload gambar
- Integrasi Midtrans payment gateway
- Notifikasi WhatsApp
- Koneksi database MySQL

## Teknologi yang Digunakan

### Backend
- Node.js
- Express.js
- TypeScript
- MySQL2
- JWT
- Multer (upload file)
- Midtrans Client
- WhatsApp Web.js
- Bcrypt (hashing password)

### Client
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Axios
- Swiper (carousel)
- React Datepicker

### Admin
- React 18
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Chart.js + React Chart.js 2
- Heroicons

## Persyaratan Sistem

- Node.js (v18 atau lebih baru)
- MySQL (v8 atau lebih baru)
- npm atau yarn

## Instalasi

### 1. Clone repositori

```bash
git clone &lt;repository-url&gt;
cd travel-web
```

### 2. Konfigurasi Database

Buat database MySQL dan import file SQL:

```bash
mysql -u root -p
CREATE DATABASE travel_web;
exit;

mysql -u root -p travel_web &lt; database-travel.sql
```

### 3. Setup Backend

```bash
cd backend
npm install
```

Salin file `.env.example` menjadi `.env` dan isi konfigurasi:

```env
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=travel_web
JWT_SECRET=your_jwt_secret_key
MIDTRANS_SERVER_KEY=your_midtrans_server_key
MIDTRANS_CLIENT_KEY=your_midtrans_client_key
MIDTRANS_IS_PRODUCTION=false
```

Jalankan backend:

```bash
npm run dev  # Development
npm run build &amp;&amp; npm start  # Production
```

### 4. Setup Client

```bash
cd ../client
npm install
```

Salin file `.env.example` menjadi `.env` dan isi konfigurasi:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Jalankan client:

```bash
npm run dev  # Development
npm run build &amp;&amp; npm start  # Production
```

### 5. Setup Admin Dashboard

```bash
cd ../admin
npm install
```

Salin file `.env.example` menjadi `.env` dan isi konfigurasi:

```env
VITE_API_URL=http://localhost:3001
```

Jalankan admin:

```bash
npm run dev  # Development
npm run build  # Production
```

## Menjalankan Semua Layanan

Dari direktori root:

```bash
# Backend
npm run backend:start

# Client
npm run client:start

# Admin
npm run admin:start
```

Atau jalankan masing-masing secara terpisah di terminal berbeda.

## URL Akses

- Client: http://localhost:3000
- Admin: http://localhost:5173
- Backend API: http://localhost:3001

## Dokumentasi API

API dokumentasi dapat dilihat di file `backend/test-api.http` atau menggunakan tools seperti Postman/Thunder Client.

## Lisensi

ISC


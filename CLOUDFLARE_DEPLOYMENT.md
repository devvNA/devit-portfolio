# Panduan Deploy ke Cloudflare Pages

## Konfigurasi Build di Cloudflare Pages

Gunakan pengaturan berikut saat setup proyek di Cloudflare Pages:

### Framework preset
- **Framework**: Next.js

### Build command
```
npx @cloudflare/next-on-pages@1
```

### Build output directory
```
.vercel/output/static
```

### Environment variables (opsional)
Jika Anda menggunakan EmailJS atau API keys lainnya, tambahkan di:
- Settings → Environment variables

Contoh:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Cara Deploy

### Opsi 1: Deploy via Git (Recommended)

1. Push kode Anda ke GitHub/GitLab
2. Login ke [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Pilih **Pages** → **Create a project**
4. Connect repository Anda
5. Gunakan konfigurasi build di atas
6. Klik **Save and Deploy**

### Opsi 2: Deploy via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login ke Cloudflare
wrangler login

# Deploy
npx @cloudflare/next-on-pages@1
wrangler pages deploy .vercel/output/static
```

## Troubleshooting

### Build gagal
- Pastikan Node.js version 18 atau lebih tinggi
- Cek apakah semua dependencies terinstall dengan benar

### Images tidak muncul
- Sudah dikonfigurasi dengan `unoptimized: true` di next.config.ts
- Pastikan path images benar

### Environment variables tidak bekerja
- Pastikan prefix `NEXT_PUBLIC_` untuk client-side variables
- Restart build setelah menambah environment variables

## Custom Domain

1. Di Cloudflare Pages → Settings → Custom domains
2. Tambahkan domain Anda
3. Update DNS records sesuai instruksi Cloudflare

## Notes

- Cloudflare Pages menggunakan static export dari Next.js
- Beberapa fitur Next.js seperti API routes dan ISR tidak didukung
- Gunakan Cloudflare Workers untuk server-side logic jika diperlukan

import type { Language } from '..';

export const id: Language = {
  code: 'id',
  navbar: {
    home: 'Beranda',
    blog: 'Blog',
    me: 'Tentangku',
    gallery: 'Galeri'
  },
  blurb: {
    title: 'Hai! Aku Rendiichtiar',
    paragraph:
      'Aku seorang desainer grafis dan pengembang web berusia %s tahun yang tinggal di Kabupaten Bekasi. Aku mulai suka desain sejak 2017, dan belakangan ini mulai belajar tentang pengembangan web. Aku senang bikin desain yang keren. Sekarang, aku lagi fokus belajar React dan terus ningkatin skill setiap hari.'
  },

  gallery: {
    title: 'Lihat beberapa fotoku!',
    paragraph:
      'Semua jenis foto, momen, dan kenangan yang aku simpan untuk kehidupan sehari-hari dan dokumentasi pribadi.'
  },
  blog: {
    title: 'Lihat blog yang aku tulis akhir-akhir ini!',
    subtitle: 'Lihat postingan blog yang sudah aku tulis!',
    more: 'Lihat Selengkapnya',
    new: 'Baru!',
    readingTime: '%s menit baca'
  },
  footer: ['Dibuat dengan Svelte & SvelteKit', 'Dikembangkan oleh Rendiichtiar'],

  bookmarks: {
    title: 'Bookmark',
    paragraph: 'Beberapa situs/web favoritku yang sangat aku rekomendasikan',
    devUtils: '👨‍💻 Utilitas pengembang',
    design: '🎨 Desain',
    resources: '📦 Sumber daya',
    subreddits: '👽 Subreddit',
    english: '📚 Bahasa Inggris',
    extensions: '🌎 Ekstensi',
    accessibility: '🧏‍♀️ Aksesibilitas',
    miscellaneous: '👌 Lain-lain'
  },

  email: 'rendiichtiarprasetyo@gmail.com',
  posted: 'Dipublikasikan',
  skipToContent: 'Lewati ke konten',
  thankBusDriver: 'Kamu telah mengucapkan terima kasih kepada sopir bus',
  alt: {
    logo: 'Logo Rendiichtiar',
    selfie: 'Foto aku',
    copyleft: 'Pelajari apa itu Copyleft',
    listeningTo: 'Sedang mendengarkan',
    lastfm: 'Buka profil Last.fm aku.',
    imageBeach:
      'Foto aku, orang kulit putih dengan rambut coklat panjang, mengenakan kacamata hitam dan topi biru di pantai.',
    changeLanguage: 'Ganti bahasa ke',
    langEn: 'Inggris',
    langPt: 'Portugis',
    nowLive: 'Sedang live.',
    audioButton: 'Dengarkan pengucapan',
    home: 'Beranda',
    setup:
      'Foto meja kerjaku dengan laptop, monitor, casing komputer, mikrofon, keyboard, headphone, tablet gambar, dua pisau, dan botol air di atas. Ada tripod ponsel di samping meja.'
  },
  topbar: {
    content:
      '"Aku minta maaf, Lucas yang lama tidak bisa menjawab telepon sekarang. Kenapa? Oh karena mereka %s!" Aku telah sepenuhnya menerima nama panggilan DoceAzedo sebagai nama yang lebih baik mewakili siapa aku.',
    highlight: 'mati',
    readMore: 'Pelajari lebih lanjut tentang itu.'
  },
  settings: {
    title: 'Pengaturan',
    theme: 'Latar belakang',
    colorTheme: 'Warna tema',
    fontSize: 'Ukuran font',
    readingWidth: 'Panjang baca',
    lineHeight: 'Jarak baris',
    dyslexiaFont: 'Gunakan font untuk disleksia',
    elevatorSpeed: 'Kecepatan elevator',
    resetLabel: 'Gunakan pengaturan default',
    resetButton: 'Reset',
    themes: {
      purple: 'Ungu',
      blue: 'Biru Laut',
      orange: 'Oranye',
      carmine: 'Raspberry',
      green: 'Mint',
      pink: 'Flamingo',
      fortnite: 'Fortnite'
    },
    themeUnlock: 'Tema warna baru telah terbuka:',
    fontSizes: ['Kecil', 'Biasa', 'Besar', 'Sangat besar'],
    lineHeights: ['Kondensasi', 'Default', 'Jarak'],
    noLightMode: 'Tema ini tidak mendukung mode terang',
    adhdMode: 'Perhatian rendah'
  },
  uses: {
    title: 'Apa yang aku gunakan',
    paragraph:
      'Semua jenis aplikasi, pengaturan, dan layanan yang aku gunakan untuk kehidupan sehari-hari dan pengembangan',
    hardware: {
      title: 'Perangkat kerasku',
      gamingPC: {
        title: 'Komputer Utama',
        items: {
          cpu: 'CPU',
          mobo: 'Motherboard',
          ram: 'RAM',
          gpu: 'GPU',
          psu: 'PSU',
          storage: 'Penyimpanan',
          case: 'Casing'
        }
      },
      peripherals: {
        items: {
          display: 'Monitor',
          keyboard: 'Keyboard',
          mouse: 'Mouse',
          tablet: 'Tablet gambar',
          headphone: 'Headphone',
          mic: 'Mikrofon',
          webcam: 'Kamera',
          desk: 'Meja',
          chair: 'Kursi'
        }
      }
    },
    general: {
      title: 'Umum',
      items: {
        browser: 'untuk browsing web',
        music: 'untuk streaming musik',
        passwordManager: 'untuk pengelolaan kata sandi',
        docs: 'untuk menulis dokumen',
        slides: 'untuk membuat presentasi',
        cloud: 'untuk penyimpanan awan dan sinkronisasi file'
      }
    },
    productivity: {
      title: 'Produktivitas',
      items: {
        notes: 'untuk pengambilan catatan dan pengelolaan tugas',
        drafts: 'untuk konsep, diagram, dan papan tulis',
        raycast: 'untuk alternatif Spotlight dan pemilih emoji',
        screenshot: 'untuk screenshot dan rekaman layar',
        videoEditing: 'untuk pengeditan video'
      }
    },
    coding: {
      title: 'Pengkodean',
      items: {
        ide: 'untuk pengembangan umum',
        ideKotlin: 'untuk pengembangan Kotlin',
        terminal: 'untuk emulator terminal'
      },
      vscode: {
        theme: 'untuk tema',
        font: 'untuk font',
        settings: 'Pengaturan dan ekstensi'
      },
      web: {
        title: 'Pengembangan web',
        items: {
          language: 'sebagai bahasa yang dipilih',
          svelte: 'sebagai kerangka yang dipilih',
          svelteKit: 'sebagai meta-kerangka yang dipilih',
          css: 'untuk styling',
          icons: 'untuk ikon yang indah dan konsisten',
          brandIcons: 'untuk ikon merek',
          bundler: 'untuk alat frontend',
          tests: 'untuk menulis tes unit',
          hosting: 'untuk hosting'
        }
      }
    },
    streaming: {
      title: 'Streaming',
      items: {
        obs: 'untuk streaming dan rekaman layar',
        chat: 'untuk chat Twitch',
        audio: 'untuk pengaturan audio Mac'
      }
    },
    design: {
      title: 'Desain',
      items: {
        figma: 'untuk desain UI dan prototipe',
        illustrator: 'untuk desain vektor umum',
        photopea: 'untuk pengeditan gambar umum'
      }
    },
    social: {
      title: 'Sosial',
      items: {
        mastodonWeb: 'untuk klien web Mastodon',
        mastodonMobile: 'untuk klien iOS Mastodon',
        tweetdeck: 'untuk pengal aman Twitter yang lebih baik',
        discord: 'untuk bergabung dan mengelola komunitas'
      }
    },
    utils: {
      title: 'Utilitas',
      items: {
        pxToRem: 'untuk konverter PX ke REM dua arah',
        gridGenerator: 'untuk membuat grid CSS',
        svgomg: 'untuk mengoptimalkan SVG',
        bulkResize: 'untuk mengubah ukuran dan mengoptimalkan gambar',
        icons: 'untuk menjelajahi paket ikon dan font emoji'
      }
    },
    extensions: {
      title: 'Ekstensi',
      items: {
        adblocker: 'untuk memblokir iklan',
        darkReader: 'untuk mode gelap di mana-mana',
        rss: 'untuk pembaca RSS',
        wappalyzer: 'untuk mengetahui apa yang digunakan oleh situs web',
        jsonViewer: 'untuk melihat JSON',
        hardRefresh: 'untuk semua masalah cache',
        ogChecker: 'untuk mempratinjau tag meta sosial secara lokal',
        youtubeDislike: 'untuk menampilkan tidak suka YouTube',
        youtubeQuality: 'untuk memaksa video HD di YouTube',
        youtubeSponsorBlock: 'untuk melewatkan segmen sponsor di YouTube'
      }
    }
  }
};

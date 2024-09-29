import type { Language } from '..';

export const id: Language = {
  code: 'id',
  navbar: {
    home: 'Beranda',
    blog: 'Blog',
    me: 'Tentangku'
  },
  blurb: {
    title: 'Hai! Aku Rendiichtiar',
    paragraph:
      'Aku seorang desainer grafis dan pengembang web berusia %s tahun yang tinggal di Kabupaten Bekasi. Aku mulai suka desain sejak 2017, dan belakangan ini mulai belajar tentang pengembangan web. Aku senang bikin desain yang keren. Sekarang, aku lagi fokus belajar React dan terus ningkatin skill setiap hari.'
  },

  blog: {
    title: 'Lihat blog yang aku tulis akhir-akhir ini!',
    subtitle: 'Lihat postingan blog yang sudah aku tulis!',
    more: 'Lihat Selengkapnya',
    new: 'Baru!',
    readingTime: '%s menit baca'
  },
  footer: ['Dibuat dengan Svelte & SvelteKit', 'Dikembangkan oleh Rendiichtiar'],
  about: {
    tldr: {
      online: {
        key: 'Online',
        value: 'DoceAzedo'
      },
      physically: {
        key: 'Fisik',
        value: 'São Paulo, Brasil'
      },
      professionally: {
        key: 'Profesional',
        value: 'Pengembang Frontend @ %s'
      },
      casually: {
        key: 'Santai',
        value: 'Live coding, hyperpop, budaya klub'
      },
      pronouns: {
        key: 'Pronouns',
        value: 'dia/laki-laki atau mereka/mereka'
      }
    },
    contact:
      'Kamu bisa menghubungi aku melalui email di %email% atau langsung DM aku di %twitter% atau %discord%. Aku selalu senang bertemu orang baru!',
    me: {
      title: 'Hai, senang bertemu kamu!',
      photoCaption: 'Aku di Paris dengan Menara Eiffel di belakang (2022)',
      intro:
        'Kamu bisa memanggil aku Doce, aku adalah pengembang frontend yang saat ini tinggal di São Paulo, Brasil. Ini adalah tempat kecilku di web tempat aku berbicara tentang diriku sendiri dan hal-hal yang aku sukai, dan aku harap kamu bisa menemukan sesuatu yang keren atau berguna di sini.',
      interests:
        'Aku adalah orang non-biner — pronouns aku adalah <b>dia/laki-laki</b> atau <b>mereka/mereka</b> — yang suka coding (dan aku sangat menghargai pengalaman pengembang yang baik), aku suka live di %twitch% saat aku mengembangkan proyek pribadi. Aku juga suka semua hal yang terkait dengan emoji dan Unicode dan aku tidak pernah melewatkan kesempatan untuk berbicara tentang %svelte%.',
      music:
        'Juga, aku sangat suka mendengarkan musik. Aku adalah tipe orang yang suka mengambil jeda dan mendengarkan album secara keseluruhan tanpa gangguan atau skip. Genre musik favoritku adalah pop, k-pop, dan hyperpop, terutama di Brasil. Kamu bisa melihat lebih lanjut tentang selera musikku di %s.'
    },
    trivia: {
      title: 'Fakta random',
      items: [
        'Pertama kali aku berkenalan dengan pemrograman sekitar usia 12 dengan Visual Basic',
        'Aku suka trilogi Hunger Games dan aku memiliki semua empat buku seri tersebut',
        'Aku percaya bahwa ada limbo antara generasi 1998 dan 2003',
        'Saat aku bermain Habbo Hotel, aku menjadi bagian dari beberapa situs fan sebagai DJ dan jurnalis',
        'Meskipun aku tidak menganggap diriku sebagai "gamer", aku sangat suka dengan semua hal Portal, Valve, dan Facepunch',
        'Meskipun demikian, aku juga bermain Fortnite, Valorant, dan Beat Saber secara teratur',
        'Aku sangat suka dengan scene cheat game dan pertempuran abadi antara hacker dan anti-cheat'
      ]
    },
    wrapup: 'Punya pertanyaan atau ingin ngobrol? Hubungi aku!'
  },
  talks: {
    title: 'Pembicaraan',
    paragraph:
      'Ini adalah rekaman dan sumber daya dari pembicaraan yang aku sampaikan, jika kamu pikir itu akan keren untuk memiliki aku berbicara di acaramu, kirim email ke aku:',
    at: '@',
    watch: 'Tonton rekaman',
    resources: 'Sumber daya',
    resourcesPretitle: 'Sumber daya pembicaraan'
  },
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
  newsletter: {
    title: 'Tetap terhubung 🔔',
    paragraph:
      'Aku akan mengirim email semua postingan baru ke kamu segera setelah mereka keluar, tanpa jadwal tertentu. Kamu bisa berhenti berlangganan kapan saja.',
    placeholder: 'youremail@example.com',
    subscribe: 'Berlangganan',
    messages: {
      success: 'Bagus! Kamu akan segera mendapatkan notifikasi tentang postingan baru. ✨',
      error: 'Terjadi kesalahan! Coba lagi nanti atau %s. 😰',
      openIssue: 'buka issue'
    }
  },
  projects: {
    subtitle: 'Beberapa proyek open-source favoritku. Lihat semua',
    subtitleGitHub: 'di GitHub',
    url: 'Kunjungi',
    writeup: 'Tulisan',
    source: 'Sumber',
    demo: 'Demo',
    details: {
      fazendoca:
        'Permainan sosial tentang merawat peternakan, dibuat dengan UE5 dan API REST SvelteKit, saat ini dalam pengembangan awal.',
      overlay:
        'Kumpulan adegan visual dan perintah interaktif untuk mempercantik live codingku di Twitch.',
      ssn: 'Server Minecraft tanpa aturan, open-source, dengan autentikasi web pertama, plugin, dan patch.',
      emotettv: 'Perpustakaan sederhana untuk memparse emote Twitch dengan mudah',
      powerchat: 'Proyek tidak aktif yang bertujuan membuat chat Twitch lebih modern',
      'quarto-101': 'Proyek dengan tujuan merekayasa ulang semua sistem BBB (acara realitas)',
      autoparkour: 'Plugin Spigot yang membuat trek parkour secara otomatis',
      bitterctf: 'Plugin Spigot untuk server capture the flag mandiri'
    }
  },
  streams: {
    titleOnline: 'Sedang live!',
    titleOffline: 'Live terakhir',
    supportMe: 'Dukung kontenku',
    subscribe: {
      title: 'Berlangganan',
      paragraph:
        'Dengan berlangganan, kamu tidak hanya akan mendukung live streamingku, tetapi juga:',
      benefits: [
        'Bisa menonton tanpa iklan',
        'Mendapatkan badge dan emote eksklusif',
        'Mendapatkan peran dan emote eksklusif di Discord'
      ],
      prime: 'Berlangganan gratis dengan Prime',
      sub: 'Berlangganan seharga $4.99'
    },
    donate: {
      title: 'Donasi via PicPay',
      paragraph: 'Ingin memberi aku uang? Klik di sini, masukkan nilai dan pesan.'
    },
    icons: {
      title: 'Ikon',
      subtitle:
        'Pilih salah satu ikon di bawah ini untuk menyalin perintah dan menempelkannya ke chat untuk bergabung dengan tim dan menunjukkan kesenanganmu!',
      copied: 'Perintah disalin, sekarang tempelkan ke chat!'
    },
    pronouns: {
      title: 'Pronouns',
      subtitle:
        'Gunakan perintah berikut untuk memberitahu semua orang bagaimana cara menyebutmu (hanya PT-BR untuk saat ini):',
      command: 'pronouns',
      copy: 'Salin perintah'
    },
    tts: {
      title: 'TTS',
      subtitle:
        'Perintah TTS dapat digunakan untuk mengirim pesan suara, sederhana saja. Jika kamu ingin melangkah lebih jauh, beberapa suara, bahasa, dan fitur lainnya tersedia:',
      usage: {
        default: 'Gunakan %s untuk mengirim pesan suara dengan suara TikTok Brasil acak',
        google: 'Gunakan %s untuk mengirim pesan suara dengan suara Google Brasil perempuan',
        polly: 'Gunakan %s untuk mengirim pesan suara dengan salah satu suara di bawah',
        ssml: 'Gunakan %s untuk mengirim pesan suara dengan %s'
      },
      placeholder: {
        message: 'pesan',
        code: 'kode'
      },
      ssmlTags: 'Tag SSML',
      table: {
        lang: 'Bahasa',
        code: 'Nama / Kode',
        type: 'Tipe suara',
        voiceTypes: {
          f: '🎀 Perempuan',
          m: '🧢 Laki-laki'
        }
      }
    },
    prime: {
      title: 'Berlangganan gratis dengan Prime',
      paragraph: 'Cara mendapatkan berlangganan gratis di kanal Twitchku dengan Prime',
      steps: [
        {
          title: 'Berlangganan Prime gratis',
          description:
            '<a href="%prime_link%" target="_blank">Klik di sini</a> untuk mengakses halaman Prime Gaming dan klik "Coba Prime".'
        },
        {
          title: 'Masuk dengan akun Amazon',
          description: 'Jika kamu sudah memiliki akun Amazon, masuk. Jika tidak, buat akun baru.'
        },
        {
          title: 'Klik tombol berlangganan',
          description:
            '<a href="%channel_link%" target="_blank">Kunjungi kanal saya</a> dan klik "Berlangganan".'
        },
        {
          title: 'Berlangganan gratis',
          description:
            'Periksa opsi "Gunakan berlangganan Prime" dan kemudian klik "Berlangganan dengan Prime".'
        },
        {
          title: 'Gabung dengan server Discord',
          description:
            'Hubungkan akun Twitch dengan Discord, <a href="%discord_link%" target="_blank">gabung dengan HQ</a> dan dapatkan peran dan emote eksklusif.'
        }
      ]
    }
  },
  email: 'me@doceazedo.com',
  posted: 'Dipublikasikan',
  skipToContent: 'Lewati ke konten',
  thankBusDriver: 'Kamu telah mengucapkan terima kasih kepada sopir bus',
  alt: {
    logo: 'Logo DoceAzedo',
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
      purple: 'Anggur',
      blue: 'Pantai biru',
      orange: 'Koktil',
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
      mainPC: 'Komputer utama',
      gamingPC: {
        title: 'Komputer gaming',
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

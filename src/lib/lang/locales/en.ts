import type { Language } from '..';

export const en: Language = {
  code: 'en',
  navbar: {
    home: 'Home',
    blog: 'Blog',
    me: 'About Me',
    gallery: 'Gallery'
  },
  blurb: {
    title: "Hi! I'm Rendiichtiar",
    paragraph:
      "I'm a %s-year-old graphic designer and web developer living in Bekasi Regency. I started liking design since 2017, and lately, I've been learning about web development. I love making cool designs. Currently, I'm focused on learning React and improving my skills every day."
  },

  gallery: {
    title: 'Check out some of my photos!',
    paragraph:
      'All kinds of photos, moments, and memories that I save for daily life and personal documentation.'
  },
  blog: {
    title: 'Check out my latest blog posts!',
    subtitle: "Check out the blog posts I've written!",
    more: 'Read More',
    new: 'New!',
    readingTime: '%s minute read'
  },
  footer: ['Made with Svelte & SvelteKit', 'Developed by Rendiichtiar'],

  bookmarks: {
    title: 'Bookmarks',
    paragraph: 'Some of my favorite websites that I highly recommend',
    devUtils: '👨‍💻 Dev Utils',
    design: '🎨 Design',
    resources: '📦 Resources',
    subreddits: '👽 Subreddits',
    english: '📚 English',
    extensions: '🌎 Extensions',
    accessibility: '🧏‍♀️ Accessibility',
    miscellaneous: '👌 Miscellaneous'
  },

  email: 'rendiichtiarprasetyo@gmail.com',
  posted: 'Posted',
  skipToContent: 'Skip to Content',
  thankBusDriver: "You've thanked the bus driver",
  alt: {
    logo: 'Rendiichtiar Logo',
    selfie: 'My Photo',
    copyleft: 'Learn about Copyleft',
    listeningTo: 'Currently listening to',
    lastfm: 'Open my Last.fm profile.',
    imageBeach:
      'A photo of me, a white-skinned person with long brown hair, wearing black glasses and a blue hat at the beach.',
    changeLanguage: 'Change language to',
    langEn: 'English',
    langPt: 'Portuguese',
    nowLive: 'Currently live.',
    audioButton: 'Listen to pronunciation',
    home: 'Home',
    setup:
      "A photo of my workspace with a laptop, monitor, computer case, microphone, keyboard, headphone, graphics tablet, two knives, and a water bottle on top. There's a phone tripod on the side."
  },
  topbar: {
    content:
      "\"I'm sorry, Lucas, I couldn't answer the phone right now. Why? Oh because they %s!\" I've fully accepted the nickname DoceAzedo as a better name to represent who I am.",
    highlight: 'dead',
    readMore: 'Learn more about it.'
  },
  settings: {
    title: 'Settings',
    theme: 'Background',
    colorTheme: 'Color Theme',
    fontSize: 'Font Size',
    readingWidth: 'Reading Width',
    lineHeight: 'Line Height',
    dyslexiaFont: 'Use dyslexia font',
    elevatorSpeed: 'Elevator Speed',
    resetLabel: 'Use default settings',
    resetButton: 'Reset',
    themes: {
      purple: 'Purple',
      blue: 'Navy Blue',
      orange: 'Orange',
      carmine: 'Raspberry',
      green: 'Mint',
      pink: 'Flamingo',
      fortnite: 'Fortnite'
    },
    themeUnlock: 'New color theme unlocked:',
    fontSizes: ['Small', 'Normal', 'Large', 'Very Large'],
    lineHeights: ['Condensed', 'Default', 'Spaced'],
    noLightMode: 'This theme does not support light mode',
    adhdMode: 'Low attention mode'
  },
  uses: {
    title: 'What I Use',
    paragraph:
      'All kinds of applications, settings, and services that I use for daily life and development',
    hardware: {
      title: 'My Hardware',
      gamingPC: {
        title: 'Main Computer',
        items: {
          cpu: 'CPU',
          mobo: 'Motherboard',
          ram: 'RAM',
          gpu: 'GPU',
          psu: 'PSU',
          storage: 'Storage',
          case: 'Case'
        }
      },
      peripherals: {
        items: {
          display: 'Monitor',
          keyboard: 'Keyboard',
          mouse: 'Mouse',
          tablet: 'Graphics Tablet',
          headphone: 'Headphone',
          mic: 'Microphone',
          webcam: 'Webcam',
          desk: 'Desk',
          chair: 'Chair'
        }
      }
    },
    general: {
      title: 'General',
      items: {
        browser: 'for web browsing',
        music: 'for music streaming',
        passwordManager: 'for password management',
        docs: 'for writing documents',
        slides: 'for making presentations',
        cloud: 'for cloud storage and file synchronization'
      }
    },
    productivity: {
      title: 'Productivity',
      items: {
        notes: 'for note-taking and task management',
        drafts: 'for concept, diagram, and whiteboard',
        raycast: 'for Spotlight alternative and emoji picker',
        screenshot: 'for screenshot and screen recording',
        videoEditing: 'for video editing'
      }
    },
    coding: {
      title: 'Coding',
      items: {
        ide: 'for general development',
        ideKotlin: 'for Kotlin development',
        terminal: 'for terminal emulator'
      },
      vscode: {
        theme: 'for theme',
        font: 'for font',
        settings: 'Settings and extensions'
      },
      web: {
        title: 'Web Development',
        items: {
          language: 'as the chosen language',
          svelte: 'as the chosen framework',
          svelteKit: 'as the chosen meta-framework',
          css: 'for styling',
          icons: 'for beautiful and consistent icons',
          brandIcons: 'for brand icons',
          bundler: 'for frontend tool',
          tests: 'for writing unit tests',
          hosting: 'for hosting'
        }
      }
    },
    streaming: {
      title: 'Streaming',
      items: {
        obs: 'for streaming and screen recording',
        chat: 'for Twitch chat',
        audio: 'for Mac audio settings'
      }
    },
    design: {
      title: 'Design',
      items: {
        figma: 'for UI design and prototyping',
        illustrator: 'for general vector design',
        photopea: 'for general image editing'
      }
    },
    social: {
      title: 'Social',
      items: {
        mastodonWeb: 'for Mastodon web client',
        mastodonMobile: 'for Mastodon iOS client',
        tweetdeck: 'for a better Twitter client',
        discord: 'for joining and managing communities'
      }
    },
    utils: {
      title: 'Utilities',
      items: {
        pxToRem: 'for two-way PX to REM converter',
        gridGenerator: 'for creating CSS grid',
        svgomg: 'for optimizing SVG',
        bulkResize: 'for resizing and optimizing images',
        icons: 'for exploring icon packs and emoji fonts'
      }
    },
    extensions: {
      title: 'Extensions',
      items: {
        adblocker: 'for ad blocking',
        darkReader: 'for dark mode everywhere',
        rss: 'for RSS reader',
        wappalyzer: 'for detecting what a website uses',
        jsonViewer: 'for viewing JSON',
        hardRefresh: 'for all cache issues',
        ogChecker: 'for previewing social meta tags locally',
        youtubeDislike: 'for showing YouTube dislikes',
        youtubeQuality: 'for forcing HD video on YouTube',
        youtubeSponsorBlock: 'for skipping sponsor segments on YouTube'
      }
    }
  }
};

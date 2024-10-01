import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { id } from './locales/id';
import { en } from './locales/en';

export type Language = {
  code: string;

  navbar: {
    [slug: string]: string;
  };

  gallery: {
    title: string;
    paragraph: string;
  }

  blurb: {
    title: string;
    paragraph: string;
  };

  blog: {
    title: string;
    subtitle: string;
    more: string;
    new: string;
    readingTime: string;
  };

  footer: string[];

  bookmarks: {
    title: string;
    paragraph: string;
    devUtils: string;
    design: string;
    resources: string;
    subreddits: string;
    english: string;
    extensions: string;
    accessibility: string;
    miscellaneous: string;
  };

  email: string;
  posted: string;
  skipToContent: string;
  thankBusDriver: string;

  alt: {
    logo: string;
    selfie: string;
    copyleft: string;
    listeningTo: string;
    lastfm: string;
    imageBeach: string;
    changeLanguage: string;
    langEn: string;
    langPt: string;
    nowLive: string;
    audioButton: string;
    home: string;
    setup: string;
  };

  topbar: {
    content: string;
    highlight: string;
    readMore: string;
  };

  settings: {
    title: string;
    theme: string;
    colorTheme: string;
    fontSize: string;
    readingWidth: string;
    lineHeight: string;
    dyslexiaFont: string;
    elevatorSpeed: string;
    resetLabel: string;
    resetButton: string;
    themes: {
      [id: string]: string;
    };
    themeUnlock: string;
    fontSizes: string[];
    lineHeights: string[];
    noLightMode: string;
    adhdMode: string;
  };

  uses: {
    title: string;
    paragraph: string;
    hardware: {
      title: string;
      gamingPC: UsesThingSection;
      peripherals: {
        items: {
          [item: string]: string;
        };
      };
    };
    general: UsesThingSection;
    productivity: UsesThingSection;
    coding: UsesThingSection & {
      vscode: {
        [item: string]: string;
      };
      web: UsesThingSection;
    };
    streaming: UsesThingSection;
    design: UsesThingSection;
    social: UsesThingSection;
    utils: UsesThingSection;
    extensions: UsesThingSection;
  };
};

export type UsesThingSection = {
  title: string;
  items: {
    [item: string]: string;
  };
};

const updateAria = (code: string) => browser && document.documentElement.setAttribute('lang', code);

const initializeLang = () => {
  let defaultLang = id;
  if (browser && navigator.language.startsWith('en')) defaultLang = en;
  const { subscribe, set } = writable(defaultLang);
  updateAria(defaultLang.code);

  return {
    subscribe,
    change: (lang: string) => {
      set(lang == 'en' ? en : id);
      updateAria(lang);
    }
  };
};

const _ = initializeLang();

export default _;

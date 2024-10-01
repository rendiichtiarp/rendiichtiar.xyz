import {
  BookmarkIcon,
  FlagUnitedStatesIcon,
  FlagIndonesiaIcon,
  NewspaperIcon,
  RssIcon,
  UserIcon
} from '$lib/components/icons';
import type { SvelteComponent } from 'svelte';

type NavbarLink = {
  slug: string;
  icon: typeof SvelteComponent;
};

type NavbarShortcut = {
  icon: typeof SvelteComponent;
  href: string;
  target?: string;
};

type Languages = {
  [code: string]: {
    code: string;
    title: string;
    icon: typeof SvelteComponent;
  };
};

export const navbarItems: NavbarLink[] = [
  {
    slug: 'blog',
    icon: NewspaperIcon
  },
  {
    slug: 'gallery',
    icon: NewspaperIcon
  }
];

export const shortcuts: NavbarShortcut[] = [
  {
    icon: BookmarkIcon,
    href: '/uses'
  }
];

export const languages: Languages = {
  en: { code: 'en', title: 'EN', icon: FlagUnitedStatesIcon },
  id: { code: 'id', title: 'ID', icon: FlagIndonesiaIcon }
};

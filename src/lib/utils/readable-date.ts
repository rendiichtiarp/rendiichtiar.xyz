import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import 'dayjs/locale/id.js';
import { browser } from '$app/environment';

export const readableDate = (dateString: string, langCode: string) => {
  if (browser) {
    dayjs.extend(relativeTime);
    return dayjs(dateString)
      .locale(langCode == 'id' ? 'id' : 'en-us')
      .fromNow();
  }
  return '';
};

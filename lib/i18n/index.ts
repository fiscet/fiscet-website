import { en } from './en';
import { it } from './it';
import type { Dictionary, Locale } from './types';

export type { Dictionary, Locale } from './types';
export { LOCALES } from './types';

const DICTIONARIES: Record<Locale, Dictionary> = { it, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(locale === 'it' ? 'it-IT' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

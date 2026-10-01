// Path of each page mapped to its equivalent in the other language. Pages
// without an entry have no translation: the language switch falls back to
// the other language's home.
export function getLanguageSwitchMap(): Record<string, string> {
  const pairs: [it: string, en: string][] = [['/', '/en']];

  const map: Record<string, string> = {};
  for (const [itPath, enPath] of pairs) {
    map[itPath] = enPath;
    map[enPath] = itPath;
  }
  return map;
}

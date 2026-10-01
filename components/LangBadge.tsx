import { getLangLabel, type PostLang } from '@/lib/blog';

export default function LangBadge({
  lang,
  srLabel
}: {
  lang: PostLang;
  srLabel: string;
}) {
  const { code, name } = getLangLabel(lang);

  return (
    <span
      className="inline-flex items-center rounded border border-border px-1.5 py-0.5 text-[0.65rem] leading-none text-muted-foreground"
      title={name}
    >
      <span className="sr-only">{srLabel}</span>
      {code}
    </span>
  );
}

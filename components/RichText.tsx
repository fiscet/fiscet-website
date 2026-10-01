import { Fragment } from 'react';

const TOKEN = /(\*\*[^*]+\*\*|\[DA CONFERMARE:[^\]]*\]|\n)/g;

// Renders dictionary strings: **bold**, line breaks, and [DA CONFERMARE: ...]
// placeholders highlighted so they stand out until the text is confirmed.
export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text
        .split(TOKEN)
        .filter(Boolean)
        .map((part, i) => {
          if (part === '\n') return <br key={i} />;
          if (part.startsWith('**')) return <b key={i}>{part.slice(2, -2)}</b>;
          if (part.startsWith('[DA CONFERMARE:')) {
            return (
              <mark
                key={i}
                className="rounded border border-dashed border-amber-600 bg-amber-100 px-1 not-italic text-amber-900"
              >
                {part}
              </mark>
            );
          }
          return <Fragment key={i}>{part}</Fragment>;
        })}
    </>
  );
}

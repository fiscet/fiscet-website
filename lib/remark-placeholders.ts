// Remark plugin: wraps [DA CONFERMARE: ...] in markdown text (plain or in
// backticks) in a highlighted <mark>, matching how <RichText /> shows
// placeholders in dictionary strings.

type MdNode = {
  type: string;
  value?: string;
  children?: MdNode[];
  data?: Record<string, unknown>;
};

const PLACEHOLDER = /(\[DA CONFERMARE:[^\]]*\])/g;
const MARK_CLASS =
  'rounded border border-dashed border-amber-600 bg-amber-100 px-1 text-amber-900';

function markNode(value: string): MdNode {
  return {
    type: 'emphasis',
    data: { hName: 'mark', hProperties: { className: MARK_CLASS } },
    children: [{ type: 'text', value }]
  };
}

function splitText(node: MdNode): MdNode[] {
  const parts = (node.value ?? '').split(PLACEHOLDER).filter(Boolean);
  if (parts.length === 1 && !parts[0].startsWith('[DA CONFERMARE:')) {
    return [node];
  }

  return parts.map((part) =>
    part.startsWith('[DA CONFERMARE:')
      ? markNode(part)
      : { type: 'text', value: part }
  );
}

function transform(node: MdNode) {
  if (!node.children) return;
  node.children = node.children.flatMap((child) => {
    if (child.type === 'text') return splitText(child);
    if (
      child.type === 'inlineCode' &&
      child.value?.startsWith('[DA CONFERMARE:')
    ) {
      return [markNode(child.value)];
    }
    transform(child);
    return [child];
  });
}

export default function remarkPlaceholders() {
  return (tree: MdNode) => transform(tree);
}

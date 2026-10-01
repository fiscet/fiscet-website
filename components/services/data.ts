// Card icons, in the same order as the dictionary's home.services.items.
export const SERVICE_ICONS = [
  'rocket.gif',
  'like.gif',
  'idea.gif',
  'mortarboard.gif'
] as const;

export type Service = {
  title: string;
  description: string;
  icon?: string;
};

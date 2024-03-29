
import { To } from 'react-router';

export interface ExternalLink {
  id: number;
  name: string;
  link: To;
}

/* eslint-disable max-len */
export const externalLinks: ExternalLink[] = [
  { id: 1, name: 'GitHub', link: 'https://github.com/0o22/react-product-catalog' },
  { id: 2, name: 'Contacts', link: 'https://github.com/orgs/0o22' },
  { id: 3, name: 'Rights', link: 'https://creativecommons.org/licenses/by/4.0' },
];

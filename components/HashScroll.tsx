'use client';

import { useEffect } from 'react';
import { scrollToHash } from '@/lib/utils';

// On the home page, scrolls to the section named in the URL hash (e.g. /#about)
// after arriving from another route. No-op when there is no hash.
export default function HashScroll() {
  useEffect(() => {
    scrollToHash();
  }, []);

  return null;
}

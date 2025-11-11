'use client';

import { AlertTriangle } from 'lucide-react';

export function DeprecationBanner() {
  return (
    <div className="flex items-center justify-center border-b border-amber-300/50 bg-amber-50 px-4 py-3 text-sm text-amber-900 shadow-sm dark:border-amber-400/40 dark:bg-amber-900/30 dark:text-amber-100">
      <div className="flex w-full max-w-6xl items-center gap-3 text-center sm:text-left">
        <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-200" aria-hidden="true" />
        <p className="font-medium tracking-wide">
          This portfolio is the initial release and is now deprecated. It remains online for reference only and will not
          receive further updates.
        </p>
      </div>
    </div>
  );
}

'use client';

import { Loader2 } from 'lucide-react';

export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">
      <Loader2 className="animate-spin text-gray-600" size={48} />
    </div>
  );
}

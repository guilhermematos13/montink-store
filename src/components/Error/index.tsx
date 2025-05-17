'use client';

import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/Button';
import { ErrorProps } from './types';
import { ErrorButtonEnum, ErrorLabelEnum } from './constants';

export function Error({
  message = ErrorLabelEnum.SOMETHING_WRONG,
  onRetry,
  buttonLabel = ErrorButtonEnum.TRY_AGAIN,
}: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">
      <AlertTriangle className="text-red-500" size={48} />
      <p className="text-base font-medium">{message}</p>
      <Button onClick={onRetry}>{buttonLabel}</Button>
    </div>
  );
}

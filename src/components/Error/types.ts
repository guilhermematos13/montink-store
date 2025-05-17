import { ErrorButtonEnum, ErrorLabelEnum } from './constants';

export type ErrorProps = {
  onRetry?: () => void;
  message?: ErrorLabelEnum;
  buttonLabel?: ErrorButtonEnum;
};

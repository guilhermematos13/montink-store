import { ErrorComponentProps } from '@/@types/error-boundary';

type ResetErrorBoundaryProps = Omit<ErrorComponentProps, 'error'>;

export type { ResetErrorBoundaryProps };

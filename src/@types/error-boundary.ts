type ErrorComponentProps = {
  error?: (Error & { digest?: string }) | null;
  reset?: () => void;
};

export type { ErrorComponentProps };

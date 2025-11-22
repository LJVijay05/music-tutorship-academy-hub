import { memo, Component, ReactNode } from 'react';
import * as Sentry from '@sentry/react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Report to Sentry
    Sentry.captureException(error, {
      contexts: {
        react: {
          componentStack: errorInfo.componentStack,
        },
      },
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback />;
    }

    return this.props.children;
  }
}

const ErrorFallback = memo(() => {
  const isNewTab = window.self === window.top;
  const hasToken = window.location.search.includes('__lovable_token');
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          {isNewTab && hasToken 
            ? "There was an issue opening the preview. Please try refreshing the page."
            : "Please refresh the page or try again later."}
        </p>
        <button
          onClick={() => {
            // Clean URL before reload using history API to avoid reload loop
            const url = new URL(window.location.href);
            url.search = '';
            window.history.replaceState(null, '', url.pathname + url.hash);
            window.location.reload();
          }}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
});

ErrorFallback.displayName = 'ErrorFallback';
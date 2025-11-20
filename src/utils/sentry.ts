import * as Sentry from '@sentry/react';

// Initialize Sentry error tracking
export const initializeSentry = () => {
  // Only initialize in production or if DSN is provided
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  
  if (!dsn) {
    console.info('Sentry DSN not configured. Error tracking disabled.');
    return;
  }

  Sentry.init({
    dsn,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
    // Performance Monitoring
    tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0, // Lower in production
    // Session Replay
    replaysSessionSampleRate: 0.1, // 10% of sessions
    replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors
    
    environment: import.meta.env.MODE,
    
    beforeSend(event, hint) {
      // Filter out development errors in production
      if (import.meta.env.PROD && hint.originalException) {
        const error = hint.originalException as Error;
        // Don't send network errors or expected errors
        if (error.message?.includes('Failed to fetch') || 
            error.message?.includes('NetworkError')) {
          return null;
        }
      }
      return event;
    },
  });

  // Capture console errors
  const originalConsoleError = console.error;
  console.error = (...args: any[]) => {
    originalConsoleError.apply(console, args);
    
    // Send to Sentry if it looks like an error
    const firstArg = args[0];
    if (firstArg instanceof Error) {
      Sentry.captureException(firstArg);
    } else if (typeof firstArg === 'string' && firstArg.toLowerCase().includes('error')) {
      Sentry.captureMessage(firstArg, 'error');
    }
  };

  // Capture unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    Sentry.captureException(event.reason, {
      tags: { type: 'unhandled_rejection' },
    });
  });

  console.info('Sentry error tracking initialized');
};

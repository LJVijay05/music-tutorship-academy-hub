# Error Tracking Setup Guide

This project includes automatic error tracking using Sentry. Follow these steps to enable it:

## 1. Create a Sentry Account

1. Go to [sentry.io](https://sentry.io) and sign up for a free account
2. Create a new project and select "React" as the platform
3. Copy your DSN (Data Source Name) - it looks like: `https://xxxxx@xxxxx.ingest.sentry.io/xxxxx`

## 2. Add Sentry DSN to Environment

Add your Sentry DSN as an environment variable:

**Option A: Add to .env file (for local development)**
```env
VITE_SENTRY_DSN=your_sentry_dsn_here
```

**Option B: Add as a Lovable secret (recommended for production)**
Use the Lovable secrets feature to securely store your DSN.

## 3. What Gets Tracked

Once configured, Sentry automatically captures:

- ✅ **Console Errors**: Any `console.error()` calls with Error objects
- ✅ **Unhandled Promise Rejections**: Async errors that aren't caught
- ✅ **React Component Errors**: Errors caught by ErrorBoundary
- ✅ **Performance Metrics**: Page load times and resource timing
- ✅ **Session Replays**: Visual playback of user sessions with errors (10% sample rate)

## 4. Testing

Visit `/#/health` to:
- Check if Sentry is configured
- Test error reporting with the "Test Error" button
- View all system diagnostics

## 5. Filtering Errors

The configuration automatically filters out:
- Network errors (Failed to fetch)
- Expected development errors in production

## Configuration

Edit `src/utils/sentry.ts` to customize:
- Sample rates (currently 10% for traces, 100% for errors)
- Environment settings
- Error filtering logic
- Performance monitoring settings

## Viewing Errors

Log into your Sentry dashboard at [sentry.io](https://sentry.io) to:
- See real-time error reports
- Watch session replays
- Track error trends
- Set up alerts and notifications

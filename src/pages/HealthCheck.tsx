import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as Sentry from '@sentry/react';

export default function HealthCheck() {
  const [status, setStatus] = useState({
    envVars: false,
    supabaseConnection: false,
    authSession: null as any,
    sentryConfigured: false,
    timestamp: new Date().toISOString(),
    loadTime: 0,
  });
  const [loading, setLoading] = useState(true);

  const testSentryError = () => {
    Sentry.captureException(new Error('Test error from Health Check page'));
    alert('Test error sent to Sentry! Check your Sentry dashboard.');
  };

  useEffect(() => {
    const startTime = performance.now();
    
    const checkHealth = async () => {
      // Check environment variables
      const envVars = !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);
      const sentryConfigured = !!import.meta.env.VITE_SENTRY_DSN;
      
      // Check Supabase connection by attempting to get session
      let supabaseConnection = false;
      try {
        const { error } = await supabase.auth.getSession();
        supabaseConnection = !error;
      } catch (e) {
        console.error('Supabase connection check failed:', e);
      }
      
      // Check auth session
      const { data: { session } } = await supabase.auth.getSession();
      
      const endTime = performance.now();
      
      setStatus({
        envVars,
        supabaseConnection,
        authSession: session,
        sentryConfigured,
        timestamp: new Date().toISOString(),
        loadTime: Math.round(endTime - startTime),
      });
      setLoading(false);
    };
    
    checkHealth();
  }, []);

  const StatusBadge = ({ success }: { success: boolean }) => (
    success ? (
      <Badge variant="default" className="bg-green-600 hover:bg-green-700">
        <CheckCircle2 className="w-4 h-4 mr-1" />
        OK
      </Badge>
    ) : (
      <Badge variant="destructive">
        <XCircle className="w-4 h-4 mr-1" />
        Failed
      </Badge>
    )
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-foreground">System Health Check</h1>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {status.loadTime}ms
          </Badge>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Environment Variables</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">VITE_SUPABASE_URL</span>
              <StatusBadge success={!!import.meta.env.VITE_SUPABASE_URL} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">VITE_SUPABASE_PUBLISHABLE_KEY</span>
              <StatusBadge success={!!import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY} />
            </div>
            {import.meta.env.VITE_SUPABASE_URL && (
              <div className="mt-2 p-2 bg-muted rounded text-xs font-mono text-muted-foreground break-all">
                {import.meta.env.VITE_SUPABASE_URL}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Supabase Connection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Database Ping</span>
              <StatusBadge success={status.supabaseConnection} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Error Tracking (Sentry)</span>
              {status.sentryConfigured && (
                <Button onClick={testSentryError} size="sm" variant="outline">
                  Test Error
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Sentry DSN Configured</span>
              <StatusBadge success={status.sentryConfigured} />
            </div>
            {!status.sentryConfigured && (
              <div className="flex items-start gap-2 p-3 bg-muted rounded text-sm">
                <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sentry not configured</p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Add VITE_SENTRY_DSN to enable automatic error tracking
                  </p>
                </div>
              </div>
            )}
            {status.sentryConfigured && (
              <div className="space-y-2 mt-3 p-3 bg-green-50 dark:bg-green-950/20 rounded text-sm">
                <p className="text-green-700 dark:text-green-400">✓ Console errors are tracked</p>
                <p className="text-green-700 dark:text-green-400">✓ Unhandled rejections are tracked</p>
                <p className="text-green-700 dark:text-green-400">✓ React errors are tracked</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Authentication Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Active Session</span>
              <StatusBadge success={!!status.authSession} />
            </div>
            {status.authSession && (
              <div className="space-y-2 mt-4 p-3 bg-muted rounded">
                <div className="text-sm">
                  <span className="font-semibold">User ID:</span>
                  <span className="ml-2 font-mono text-xs">{status.authSession.user?.id}</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Email:</span>
                  <span className="ml-2">{status.authSession.user?.email}</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Expires:</span>
                  <span className="ml-2">{new Date(status.authSession.expires_at! * 1000).toLocaleString()}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Check Time:</span>
              <span className="font-mono text-xs">{new Date(status.timestamp).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Load Time:</span>
              <span className="font-mono">{status.loadTime}ms</span>
            </div>
            <div className="flex justify-between">
              <span>User Agent:</span>
              <span className="font-mono text-xs truncate max-w-xs">{navigator.userAgent}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

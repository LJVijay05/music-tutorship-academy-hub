// Utility to safely open external links, even in sandboxed preview if new tabs are blocked
export function openExternal(url: string, target: '_blank' | '_self' = '_blank') {
  try {
    // Try window.open first
    const opened = window.open(url, target, 'noopener,noreferrer');
    if (!opened) {
      // Fallback: navigate current tab
      window.location.href = url;
    }
  } catch {
    // Hard fallback
    try {
      const a = document.createElement('a');
      a.href = url;
      a.target = target;
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      window.location.href = url;
    }
  }
}

export default openExternal;

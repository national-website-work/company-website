declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Tracks a Meta (Facebook) Pixel Lead & Contact Event
 */
export function trackMetaLead(contentName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      window.fbq("track", "Lead", {
        content_name: contentName,
        ...params,
      });
      window.fbq("track", "Contact", {
        content_name: contentName,
      });
    } catch {
      // Ignore if adblocker blocks fbq
    }
  }
}

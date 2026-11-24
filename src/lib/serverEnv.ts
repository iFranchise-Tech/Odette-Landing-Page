import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Read a server-side env var in both Next.js Node and Cloudflare Workers.
 * Worker secrets are available on process.env after OpenNext patches them,
 * and also on getCloudflareContext().env as a fallback.
 */
export function getServerEnv(name: string): string | undefined {
  const fromProcess = process.env[name]?.trim();
  if (fromProcess) {
    return fromProcess;
  }

  try {
    const value = getCloudflareContext().env[name as keyof CloudflareEnv];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  } catch {
    // Not running inside a Cloudflare request context.
  }

  return undefined;
}

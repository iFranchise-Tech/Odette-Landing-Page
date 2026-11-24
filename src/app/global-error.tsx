"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#ffffff] px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#171717]">
            Application error
          </p>
          <h1 className="mt-3 text-3xl font-bold text-black">Something went wrong</h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-black/70">
            {error.message || "An unexpected error occurred while loading the application."}
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}

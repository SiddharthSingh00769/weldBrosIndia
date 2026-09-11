import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          404
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Page not found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist.
        </p>

        <Link href="/" className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full px-4 text-center space-y-4">
        <h1 className="text-3xl font-semibold">
          Shabuj Global – University Finder
        </h1>
        <p className="text-sm text-gray-600">
          Technical assessment module: server-side filtered university search with compare feature.
        </p>
        <Link
          href="/universities"
          className="inline-flex items-center justify-center px-4 py-2 rounded bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700"
        >
          Go to University Finder
        </Link>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-5xl">That page does not exist.</h1>
      <Link href="/" className="btn-primary mt-8">
        Back home
      </Link>
    </section>
  );
}

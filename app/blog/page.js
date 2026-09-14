import { getPosts } from "@/utils/dev-to";
import { personalData } from "@/utils/data/personal-data";
import PostCard from "../components/sections/post-card";

export const metadata = { title: `Writing — ${personalData.name}` };

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <section className="container-site py-16 sm:py-24">
      <p className="eyebrow">Writing</p>
      <h1 className="display mt-4 text-5xl sm:text-6xl">All posts.</h1>
      {posts.length ? (
        <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-muted">
          Nothing published yet. Follow along on{" "}
          <a href={`https://dev.to/${personalData.devUsername}`} className="link text-ink">
            dev.to
          </a>
          .
        </p>
      )}
    </section>
  );
}

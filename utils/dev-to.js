import { personalData } from "./data/personal-data";

// Fetches the author's dev.to posts. Cached for an hour; never throws so the page still renders.
export async function getPosts() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

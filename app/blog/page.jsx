import { getOneMeal } from "@/lib/meals";
import Link from "next/link";

async function BlogPage({ params }) {
  const meal = await getOneMeal(params.slug);

  return (
    <main>
      <h1>The Blog</h1>
      {meal && <h2>{meal.title}</h2>}
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post 2</Link>
      </p>
      <p>
        <Link href="/blog/post-3">Post 3</Link>
      </p>
      <p>
        <Link href="/blog/post-4">Post 4</Link>
      </p>
    </main>
  );
}

export default BlogPage;

import Link from "next/link";

function BlogPage() {
  return (
    <main>
      <h1>The Blog</h1>
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

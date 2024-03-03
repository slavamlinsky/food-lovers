function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post Page</h1>
      <h3>{params.slug}</h3>
    </main>
  );
}

export default BlogPostPage;

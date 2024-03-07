import { getMeal } from "@/lib/meals";

function BlogPostPage({ params }) {
  const meal = getMeal(params.mealSlug);

  console.log(meal);

  return (
    <main>
      <h1>Blog Post Page</h1>
      <h3>{params.slug}</h3>
    </main>
  );
}

export default BlogPostPage;

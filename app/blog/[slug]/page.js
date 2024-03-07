import { getMeal } from "@/lib/meals";

async function BlogPostPage({ params }) {
  const meal = await getMeal("chicken-nuggets");

  // console.log("Meal");
  // console.log(meal);

  return (
    <main>
      <h1>Blog Post Page</h1>
      <h3>{params.slug}</h3>
      <h3>{meal.creator}</h3>
    </main>
  );
}

export default BlogPostPage;

import { getMeal } from "@/lib/meals";

function BlogPostPage({ params }) {
  const meal = getMeal("chicken-nuggets");

  // console.log("Meal");
  // console.log(meal);

  return (
    <main>
      <h1>Blog Post Page</h1>
      <h3>{params.slug}</h3>
      <h3>{meal.title}</h3>
    </main>
  );
}

export default BlogPostPage;

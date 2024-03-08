import { getMeal, getMeals } from "@/lib/meals";

async function BlogPostPage({ params }) {
  const { slug } = params;

  const oneMeal = await getMeal(slug);
  // console.log("Meal", meal);

  const meals = await getMeals();
  // meals.map(meal => console.log("Meals", meal) );

  return (
    <main>
      <h1>Blog Post Page</h1>
      <h3>{params.slug}</h3>
      {oneMeal && <h3>{oneMeal.title}</h3>}
      {oneMeal && <h3>{oneMeal.slug}</h3>}
      {oneMeal && <h3>{oneMeal.image}</h3>}
      {oneMeal && <h3>{oneMeal.summary}</h3>}
      {oneMeal && <h3>{oneMeal.creator}</h3>}
      {meals.map((meal) => meal.slug)}
    </main>
  );
}

export default BlogPostPage;

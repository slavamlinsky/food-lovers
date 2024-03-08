import { getOneMeal, getAllMeals } from "@/lib/meals";

async function BlogPostPage({ params }) {

  const {slug}=params;

  const meal = await getOneMeal(slug);
  // console.log("Meal", meal);

  const meals = await getAllMeals();
  // meals.map(meal => console.log("Meals", meal) );  

  return (
    <main>
      <h1>Blog Post Page</h1>
      <h3>{params.slug}</h3>
      {meal && <h3>{meal.title}</h3>}
      {meal && <h3>{meal.slug}</h3>}
      {meal && <h3>{meal.image}</h3>}
      {meal && <h3>{meal.summary}</h3>}
      {meal && <h3>{meal.creator}</h3>}
      {meals.map(meal => meal.slug)}
    </main>
  );
}

export default BlogPostPage;

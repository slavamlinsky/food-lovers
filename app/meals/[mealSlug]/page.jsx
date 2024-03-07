import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal, getMeals } from "@/lib/meals";
import MealsGrid from "@/components/Meals/MealsGrid";
import { Suspense } from "react";

function MealDetails() {
  const meals = getMeals();

  return <MealsGrid meals={meals} />;
}

function MealDetailsPage({ params }) {
  let meal;
  // try {
  //   meal = getMeal(params.mealSlug);
  // } catch (error) {
  //   console.log(error);
  //   console.log(error.toString());
  // }

  // if (!meal) {
  //   notFound();
  // }
  // meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      {/* <h3>{params.slug}</h3> */}
      <header className={styles.header}>
        <div className={styles.image}>{/* <Image src={meal.image} alt={meal.title} fill sizes="20em" /> */}</div>
        <div className={styles.headerText}>
          {/* <h1>{meal.title}</h1> */}
          <h1>Testing</h1>
          <p className={styles.creator}>{/* by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a> */}</p>
          {/* <p className={styles.summary}>{meal.summary}</p> */}
        </div>
      </header>
      <main>
        {/* <p className={styles.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p> */}
        <Suspense fallback={<p className={styles.loading}>Fetching meals ...</p>}>
          <MealDetails />
        </Suspense>
      </main>
    </>
  );
}

export default MealDetailsPage;

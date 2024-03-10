import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getMeal } from "@/lib/meals";

export async function generateMetadata({ params }) {
  // console.log(params.mealSlug);
  const meal = await getMeal(params.mealSlug);
  // console.log(meal.title);

  if (!meal) {
    return notFound();
  }

  return {
    title: meal.title + " from food lovers.",
    description: meal.summary,
  };
}

async function MealDetailsPage({ params }) {
  const { mealSlug } = params;

  const meal = await getMeal(mealSlug);

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill sizes="20em" />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={styles.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
      </main>
    </>
  );
}

export default MealDetailsPage;

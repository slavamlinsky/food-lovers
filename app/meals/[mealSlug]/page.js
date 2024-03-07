import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getMeal } from "@/lib/meals";

async function MealDetailsPage({ params }) {
  const meal = await getMeal("chicken-nuggets");

  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <h3>{params.mealSlug}</h3>
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

import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/Meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

function Meals() {
  const meals = getMeals();

  return <MealsGrid meals={meals} />;
}

function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is fun and easy.</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Fetching meals ...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;

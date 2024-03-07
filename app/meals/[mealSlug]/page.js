// import { getMeal } from "@/lib/meals";
import { getMeal, getMeals } from "@/lib/meals";
import styles from "./page.module.css";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// import { getMeal } from "@/lib/meals";

// function MealDetailsPage({ params }) {
//   const meal = getMeal(params.slug);

//   if (!meal) {
//     notFound();
//   }
//   meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
//   return (
//     <>
//       {/* <h3>{params.slug}</h3> */}
//       <header className={styles.header}>
//         <div className={styles.image}>
//           <Image src={meal.image} alt={meal.title} fill sizes="20em" />
//         </div>
//         <div className={styles.headerText}>
//           <h1>{meal.title}</h1>
//           <p className={styles.creator}>
//             by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
//           </p>
//           <p className={styles.summary}>{meal.summary}</p>
//         </div>
//       </header>
//       <main>
//         <p className={styles.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
//       </main>
//     </>
//   );
// }

// export default MealDetailsPage;

// function MealDetailsPage({ params }) {
//   // const meal = getMeal(params.mealSlug);
//   return (
//     <main>
//       <h1>Meal Details Page</h1>
//       <h3>{params.mealSlug}</h3>
//       {/* <h3>{meal.title}</h3> */}
//     </main>
//   );
// }

// export default MealDetailsPage;

async function MealDetails(name) {
  const meal = await getMeal(name);

  return meal;
}

async function MealDetailPage({ params }) {
  // const meals = await getMeals();
  // console.log(meals);
  return (
    <>
      {/* <header className={styles.header}>
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
       </header> */}
      <main>
        <h1>Meal Details Page</h1>
        <div className={styles.headerText}>
          <h3>{params.mealSlug}</h3>
          <h1>{params.mealSlug}</h1>
          <MealDetails meal={params.mealSlug} />
        </div>
      </main>
    </>
  );
}

export default MealDetailPage;

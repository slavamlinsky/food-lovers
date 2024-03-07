import { getMeal } from "@/lib/meals";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

async function BlogPage() {
  const meal = await getMeal("chicken-nuggets");

  return (
    <main>
      <h1>The Blog New</h1>
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
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post 2</Link>
      </p>
      <p>
        <Link href="/blog/post-3">Post 3</Link>
      </p>
      <p>
        <Link href="/blog/post-4">Post 4</Link>
      </p>
    </main>
  );
}

export default BlogPage;

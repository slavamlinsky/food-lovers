import Link from "next/link";

function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <h3>
        <Link href="/meals/first-meal">Food One</Link>
      </h3>
      <h3>
        <Link href="/meals/second-meal">Food Second</Link>
      </h3>
    </main>
  );
}

export default MealsPage;

function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Meals Page</h1>
      <h2>Meal Details {params.slug}</h2>
    </main>
  );
}

export default MealDetailsPage;

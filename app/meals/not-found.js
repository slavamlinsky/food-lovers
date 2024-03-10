export const metadata = {
  title: "This meal was not found.",
  description: "We colud not find this fish in our menu. Please, try again.",
};

function NotFound() {
  return (
    <main className="not-found">
      <h1>404 - meal not found</h1>
      <p>We couldn`t find this meal in Data base.</p>
    </main>
  );
}

export default NotFound;

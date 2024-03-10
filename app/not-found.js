export const metadata = {
  title: "Page was not found.",
  description: "Unfortunately, we could not find the requested page or resource. Please, try again.",
};

function NotFound() {
  return (
    <main className="not-found">
      <h1>404 - page not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
    </main>
  );
}

export default NotFound;

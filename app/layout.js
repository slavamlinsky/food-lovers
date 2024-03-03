import MainHeader from "@/components/MainHeader/MainHeader";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MainHeader />

        {children}
      </body>
    </html>
  );
}

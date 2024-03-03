import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styles from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";
import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          Food Lovers
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
            {/* <li>
            <Link href="/meals/share">Share Meals</Link>
          </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}

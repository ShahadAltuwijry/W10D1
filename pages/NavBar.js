import Link from "next/link";
import styles from "./../styles/NavBar.module.css";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <ul className={styles.navBar}>
        <Link href="/" passHref>
          <Image
            style={{ cursor: "pointer" }}
            alt="logo"
            src="/logo-copy.png"
            width={70}
            height={50}
          />
        </Link>
        <Link href="/About">
          <li style={{ cursor: "pointer" }}>About</li>
        </Link>
        <Link href="/Contact">
          <li style={{ cursor: "pointer" }}>Contact</li>
        </Link>
        <Link href="/Posts">
          <li style={{ cursor: "pointer" }}>Posts</li>
        </Link>
      </ul>

      <hr />
    </>
  );
};

export default NavBar;

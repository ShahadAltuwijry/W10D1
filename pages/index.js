import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>next app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to our Home page</h1>
    </div>
  );
}
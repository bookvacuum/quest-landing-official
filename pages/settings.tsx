import Head from "next/head";
import Account from "../components/Account";
import Profile from "../components/Profile";
import styles from "../styles/dashboard.module.css";
import Link from "next/link";

export default function Settings({ session }) {
  return (
    <>
      <Head>
        <title>Quest Settings</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>Quest</div>
        <Link className={styles.settings} href="/settings">
          Settings
        </Link>
        <h1>Dashboard</h1>

        <p> Settings </p>
        <Account session={session} />
        {/* <Profile session={session} /> */}
        <a href="/justice-pot"> Justice Pot</a>
      </div>
    </>
  );
}

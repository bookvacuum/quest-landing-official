import Head from "next/head";
import Account from "../components/Account";
import Profile from "../components/Profile";
import styles from "../styles/dashboard.module.css";
import Link from "next/link";
import Settings from "../pages/settings";

export default function Dashboard({ session }) {
  return (
    <>
      <Head>
        <title>Quest Dashboard</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>Quest</div>
        <Link className={styles.settings} href="/settings">
          Settings
        </Link>
        <h1>Dashboard</h1>

        <Account session={session} />
        <a href="/justice-pot"> Justice Pot</a>
      </div>
    </>
  );
}

import Head from "next/head";
import Account from "../components/Account";
import Profile from "../components/Profile";
import styles from "../styles/dashboard.module.css";
import Link from "next/link";
import {useSession, useSupabaseClient} from "@supabase/auth-helpers-react"

export default function Settings() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <Head>
        <title>Quest Settings</title>
      </Head>

    {!session ? 
    (
      <>
      <p>login ok?</p>
      <Link href="/login"> Login here </Link>
      </>
    )
  : (<Account session={session}></Account>)}

      <div className={styles.container}>
        <div className={styles.header}>Quest</div>
        <Link className={styles.settings} href="/settings">
          Settings
        </Link>

        <h1> Settings Page </h1>
        {/* <Account session={session} /> */}

        <a href="/justice-pot"> Justice Pot</a>
      </div>
    </>
  );
}

import Head from "next/head";
import Account from "../components/Account";
import Profile from "../components/Profile";
import styles from "../styles/dashboard.module.css";
import Link from "next/link";
import Settings from "../pages/settings";

import { createClient } from '@supabase/supabase-js'
import { useState, useEffect} from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Dashboard({ session }) {
const [communityNames, setCommunityNames] = useState(null);
const [loading, setLoading] = useState(null);

useEffect(() => {
  if(session) {
    getCommunities()
  }
}, [session])

  async function getCommunities() {
    try {
      setLoading(true)
      const { data, error, status} = await supabase
      .from('communities')
      .select('name')
      if (data) {
        setCommunityNames(data)
        console.log(data)
        console.log(data[0])
        console.log(data[0].name)
      }
    } catch (error) {
      alert('Error loading communities data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

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
        <h2>Discover Communities</h2> 
        {
        communityNames ? 
        communityNames.map(item => <p key={item.name.toString()}>{item.name}</p>)
        : <></>
      }
      

        <a href="/justice-pot"> Justice Pot</a>
      </div>
    </>
  );
}

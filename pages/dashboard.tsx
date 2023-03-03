import Head from "next/head";
import Account from "../components/Account";
import Profile from "../components/Profile";
import styles from "../styles/dashboard.module.css";
import Link from "next/link";
import Settings from "../pages/settings";
import QuestCard from "../components/communityCard";

import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Dashboard({ session }) {
  const [communityNames, setCommunityNames] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (session) {
      getCommunities();
    }
  }, [session]);

  async function getCommunities() {
    try {
      setLoading(true);
      const { data, error, status } = await supabase
        .from("communities")
        .select("name, description, image");
      if (data) {
        setCommunityNames(data);
      }
    } catch (error) {
      alert("Error loading communities data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Quest Dashboard</title>
      </Head>
      <div className={styles.header}>Quest</div>
      <div className={styles.container}>
        <Link className={styles.settings} href="/settings">
          Settings
        </Link>
        <h1>Dashboard</h1>
        <h2>Discover Communities</h2>
        <div className={styles.projectRow}>
          {communityNames ? (
            communityNames.map((item) =>
              // <p key={item.name.toString()}>{item.name}</p>
              item.image != null ? (
                <QuestCard
                  logoImage={item.image}
                  description={item.description}
                  cardName={item.name}
                  key={item.name.toString()}
                ></QuestCard>
              ) : (
                <QuestCard
                  logoImage="https://imagedelivery.net/Mgig1zCtwXqG3Y6Tm-8KUQ/11e59e33-b19f-4b2d-051a-9b7cd7273100/public"
                  description={item.description}
                  cardName={item.name}
                  key={item.name.toString()}
                ></QuestCard>
              )
            )
          ) : (
            <></>
          )}
        </div>

        <a href="/justice-pot"> Justice Pot</a>
      </div>
    </>
  );
}

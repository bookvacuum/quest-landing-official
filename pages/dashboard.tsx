import Head from "next/head";
import Account from "../components/Account";
import Profile from "../components/Profile";
import styles from "../styles/dashboard.module.css";
import Link from "next/link";
import Settings from "../pages/settings";
import QuestCard from "../components/communityCard";

import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey, {
//   auth: {
//     autoRefreshToken: true,
//     persistSession: false,
//   },
// });

export default function Dashboard() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  const [communityNames, setCommunityNames] = useState(null);
  const [communities, setMyCommunities] = useState(null);
  const [memberships, setMyMemberships] = useState(null);

  const [loading, setLoading] = useState(null);
  const [loading2, setLoading2] = useState(null);

  // useEffect(() => {
  //   if (session) {
  //     getCommunities();
  //     getMyCommunities();
  //   }
  // }, [session]);
  useEffect(() => {
    async function getCommunities() {
      const { data } = await supabaseClient.from("communities").select("*");
      setCommunityNames(data);
    }
    async function getMyCommunities() {
      const { data } = await supabaseClient.from("memberships").select("*");
      console.log(data);
      setMyMemberships(data);
    }
    async function getACommunity(community_id) {
      const { data } = await supabaseClient
        .from("communities")
        .select("name, description, image")
        .eq("uuid", community_id);
      console.log(data);
      setMyCommunities(data);
    }
    // Only run query once user is logged in.
    if (user) {
      getCommunities();
      getMyCommunities();
    }
  }, [user]);

  // async function getCommunities() {
  //   try {
  //     setLoading(true);
  //     const { data, error, status } = await supabase
  //       .from("communities")
  //       .select("name, description, image");
  //     if (data) {
  //       setCommunityNames(data);
  //     }
  //   } catch (error) {
  //     alert("Error loading communities data!");
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // async function getCommunityInfo(community_id) {
  //   try {
  //     setLoading(true);
  //     const { data, error, status } = await supabase
  //       .from("communities")
  //       .select()
  //        .eq('uuid', session.user.id);

  // }

  // async function getMyCommunities() {
  //   try {
  //     setLoading2(true);
  //     const { data, error, status } = await supabase
  //       .from("profiles")
  //       .select("*");
  //     // .eq("user_id", session.user.id);
  //     // useEffect(() => {
  //     if (data) {
  //       console.log(data);
  //       // getACommunity(data);
  //     }
  //     // }, [session]);
  //   } catch (error) {
  //     alert("Error loading community!");
  //     console.log(error);
  //   } finally {
  //     setLoading2(false);
  //   }
  // }

  // async function getACommunity(community_id) {
  //   try {
  //     setLoading(true);
  //     const { data, error, status } = await supabase
  //       .from("communities")
  //       .select("name, description, image")
  //       .eq("uuid", community_id);
  //     if (data) {
  //       setMyCommunities(data);
  //     }
  //   } catch (error) {
  //     alert("Error loading communities data!");
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  if (!user) return <></>;

  return (
    <>
      <Head>
        <title>Quest Dashboard</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.navbar}>
          <Link className={styles.settings} href="/settings">
            <button className={styles.button}> Settings</button>
          </Link>
        </div>
        <div className={styles.container}>
          <h1 className={styles.header}>Discover</h1>
          <div className={styles.projectRow}>
            {communityNames ? (
              communityNames.map((item) =>
                item.image != null ? (
                  <QuestCard
                    logoImage={item.image}
                    description={item.description}
                    cardName={item.name}
                    key={item.name}
                  ></QuestCard>
                ) : (
                  <QuestCard
                    logoImage="https://imagedelivery.net/Mgig1zCtwXqG3Y6Tm-8KUQ/506daba1-2571-4653-aabe-5d786266be00/public"
                    description={item.description}
                    cardName={item.name}
                    key={item.name}
                  ></QuestCard>
                )
              )
            ) : (
              <></>
            )}
          </div>

          <h1 className={styles.header}>Your Community</h1>

          <div className={styles.projectRow}>
            {communities ? (
              communities.map((item) =>
                item.image != null ? (
                  <QuestCard
                    logoImage={item.image}
                    description={item.description}
                    cardName={item.name}
                    key={item.name}
                  ></QuestCard>
                ) : (
                  <QuestCard
                    logoImage="https://imagedelivery.net/Mgig1zCtwXqG3Y6Tm-8KUQ/506daba1-2571-4653-aabe-5d786266be00/public"
                    description={item.description}
                    cardName={item.name}
                    key={item.name}
                  ></QuestCard>
                )
              )
            ) : (
              <></>
            )}
          </div>

          <a href="/justice-pot"> Justice Pot</a>
        </div>
      </div>
    </>
  );
}

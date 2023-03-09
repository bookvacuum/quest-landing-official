import Head from "next/head";
import Account from "../components/Account";
import Profile from "../components/Profile";
import styles from "../styles/dashboard.module.css";
import Link from "next/link";
import Settings from "../pages/settings";
import QuestCard from "../components/communityCard";
import Modal from "../components/communityModal";

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
  const [isOpen, setIsOpen] = useState(false);
  const [communityInfo, setCommunityInfo] = useState(null);
  const [communityNames, setCommunityNames] = useState(null);
  const [communities, setMyCommunities] = useState(null);
  const [memberships, setMyMemberships] = useState(null);

  useEffect(() => {
    async function getCommunities() {
      const { data } = await supabaseClient.from("communities").select("*");
      setCommunityNames(data);
    }
    async function getMyCommunities() {
      const { data } = await supabaseClient.from("memberships").select("*");
      if (data) {
        for (const element of data) {
          getACommunity(element.community);
        }
      }
    }
    async function getACommunity(community_id) {
      const { data } = await supabaseClient
        .from("communities")
        .select("name, description, image")
        .eq("uuid", community_id);
      setMyCommunities(data);
    }
    // Only run query once user is logged in.
    if (user) {
      getCommunities();
      getMyCommunities();
    }
  }, [user]);

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
                  <div
                    onClick={() => {
                      setIsOpen(true);
                      setCommunityInfo(item);
                      console.log(communityInfo);
                    }}
                  >
                    <QuestCard
                      logoImage={item.image}
                      description={item.description}
                      cardName={item.name}
                      key={item.name}
                    ></QuestCard>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setIsOpen(true);
                      setCommunityInfo(item);
                      console.log(communityInfo);
                    }}
                  >
                    <QuestCard
                      logoImage="https://imagedelivery.net/Mgig1zCtwXqG3Y6Tm-8KUQ/506daba1-2571-4653-aabe-5d786266be00/public"
                      description={item.description}
                      cardName={item.name}
                      key={item.name}
                    ></QuestCard>
                  </div>
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
                  <div
                    onClick={() => {
                      setIsOpen(true);
                      setCommunityInfo(item);
                    }}
                  >
                    <QuestCard
                      logoImage={item.image}
                      description={item.description}
                      cardName={item.name}
                      key={item.name}
                    ></QuestCard>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setIsOpen(true);
                      setCommunityInfo(item);
                    }}
                  >
                    <QuestCard
                      logoImage="https://imagedelivery.net/Mgig1zCtwXqG3Y6Tm-8KUQ/506daba1-2571-4653-aabe-5d786266be00/public"
                      description={item.description}
                      cardName={item.name}
                      key={item.name}
                    ></QuestCard>
                  </div>
                )
              )
            ) : (
              <></>
            )}
          </div>

          <a href="/justice-pot"> Justice Pot</a>
        </div>
      </div>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          communityName={communityInfo.name}
          description={communityInfo.description}
        />
      )}
    </>
  );
}

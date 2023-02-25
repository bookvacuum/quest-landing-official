import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import community from "/public/images/community.png";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  const customTheme = {
    // You can also add more theme variations with different names.
    pink: {
      colors: {
        brandButtonText: "white",
        defaultButtonBackground: "#FF0000",
        defaultButtonBackgroundHover: "#2e2e2e",
        //..
      },
    },
    default: {
      colors: {
        brandButtonText: "white",
        defaultButtonBackground: "#1e1e1e",
        defaultButtonBackgroundHover: "#2e2e2e",
        //..
      },
    },
  };
  return (
    <div style={{ padding: "0 0 0 0" }}>
      {!session ? (
        <div className={styles.container}>
          <div className={styles.left}>
            <div>Quest</div>
            <Auth
              providers={["google", "github", "linkedin"]}
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          </div>
          <Image
            z-index={11}
            src={community}
            alt="Picture of the author"
            className={styles.image}
          />
        </div>
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default Home;

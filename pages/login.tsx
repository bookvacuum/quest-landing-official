import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import community from "/public/images/community.png";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div style={{ padding: "0 0 0 0" }}>
      {!session ? (
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.auth}>
              <div>Login to Quest</div>
              {/* <Auth
                providers={["google", "github", "linkedin"]}
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="dark"
              /> */}
              <Auth
                providers={["google", "github", "linkedin"]}
                supabaseClient={supabase}
                appearance={{
                  theme: ThemeSupa,
                  variables: {
                    default: {
                      colors: {
                        brand: "#ED03F4",
                        brandAccent: "#ED03F4",
                        defaultButtonBackground: "ED03F4",
                        defaultButtonBackgroundHover: "#A400A9",
                        defaultButtonBorder: "lightgray",
                        defaultButtonText: "gray",
                        dividerBackground: "#eaeaea",
                        inputBackground: "transparent",
                        inputBorder: "lightgray",
                        inputBorderHover: "gray",
                        inputBorderFocus: "gray",
                        inputText: "black",
                        inputLabelText: "gray",
                        inputPlaceholder: "darkgray",
                        messageText: "gray",
                        anchorTextColor: "gray",
                        anchorTextHoverColor: "darkgray",
                      },
                      fonts: {
                        bodyFontFamily: "avenir, helvetica, sans-serif",
                        buttonFontFamily: "avenir, helvetica, sans-serif",
                        inputFontFamily: "avenir, helvetica, sans-serif",
                        labelFontFamily: "avenir, helvetica, sans-serif",
                      },
                    },
                  },
                }}
              />
            </div>
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

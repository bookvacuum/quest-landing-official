import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import community from "/public/images/community.png";
import Dashboard from "../pages/dashboard";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div style={{ padding: "0 0 0 0" }}>
      {!session ? (
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.auth}>
              <div className={styles.loginHeader}>Login to Quest</div>
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
                        defaultButtonBackground: "transparent",
                        defaultButtonBackgroundHover: "#F1F1F1",
                        defaultButtonBorder: "gray",
                        defaultButtonText: "#372F37",
                        dividerBackground: "#eaeaea",
                        inputBackground: "transparent",
                        inputBorder: "lightgray",
                        inputBorderHover: "gray",
                        inputBorderFocus: "gray",
                        inputText: "black",
                        inputLabelText: "#372F37",
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
                      space: {
                        spaceSmall: "4px",
                        spaceMedium: "8px",
                        spaceLarge: "16px",
                        labelBottomMargin: "8px",
                        anchorBottomMargin: "4px",
                        emailInputSpacing: "4px",
                        socialAuthSpacing: "4px",
                        buttonPadding: "10px 15px",
                        inputPadding: "10px 15px",
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
        <Dashboard />
      )}
    </div>
  );
};

export default Home;

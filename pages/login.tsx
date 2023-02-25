import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";

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
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <>
          <div>Quest</div>
          <Auth
            providers={["google", "github", "linkedin"]}
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        </>
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default Home;

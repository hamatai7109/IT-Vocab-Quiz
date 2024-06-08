"use client";

// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// import GithubAuthButtonServer from "@/components/auth/github/GithubAuthButtonServer";
import EmailAuth from "@/components/auth/email/EmailAuth";
import { supabase } from "@/libs/supabase";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Home() {
  // const supabaseServer = createServerComponentClient({ cookies });
  // const { data: posts } = await supabaseServer.from("posts").select();

  return (
    <>
      <h1>Supabase + Nextjs Auth App</h1>
      <EmailAuth />
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "github"]}
        localization={{
          variables: {
            sign_in: {
              email_label: "メールアドレス",
              email_input_placeholder: "",
              password_label: "パスワード",
              password_input_placeholder: "",
              social_provider_text: "{{provider}}でログイン",
              button_label: "ログイン",
            },
          },
        }}
      />
      {/* <GithubAuthButtonServer />
      <pre>{JSON.stringify(posts, null, 2)}</pre>; */}
    </>
  );
}

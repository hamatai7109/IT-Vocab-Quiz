"use client";

import EmailAuth from "@/components/auth/email/EmailAuth";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/libs/supabase";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";

export default function Login() {
  const router = useRouter();
  return (
    <Container sx={{ padding: 3 }}>
      <main>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <EmailAuth />
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google", "github"]}
            onlyThirdPartyProviders
            localization={{
              variables: {
                sign_in: {
                  social_provider_text: "{{provider}}でログイン",
                },
              },
            }}
            redirectTo="http://localhost:3000/auth/callback"
          />
          <div>
            <Link href="signup">ユーザー登録がお済みでない方はこちらから</Link>
            <br />
            <Link href="sendEmail">パスワードをお忘れの方はこちらから</Link>
          </div>
        </Box>
      </main>
      <footer></footer>
    </Container>
  );
}

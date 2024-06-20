"use client";

import EmailAuth from "@/components/auth/email/EmailAuth";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/libs/supabase";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Button, Container, Divider, Typography } from "@mui/material";

export default function Login() {
  const router = useRouter();
  return (
    <Container
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "400px",
        padding: 3,
      }}
    >
      <main>
        <Typography variant="h3">IT-Vocab-Quiz</Typography>
        <Box mt={2}>
          <EmailAuth />
          <Divider sx={{ marginTop: "10px", marginBottom: "10px" }}></Divider>
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
          <Button href="signup">ユーザー登録がお済みでない方はこちら</Button>
          <Button href="resetPassword">パスワードをお忘れの方はこちら</Button>
        </Box>
      </main>
      <footer></footer>
    </Container>
  );
}

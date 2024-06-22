"use client";

import { supabase } from "@/libs/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Session } from "@supabase/auth-helpers-nextjs";

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  // supabaseでログインした情報をセッションから取得
  const getSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  };

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();

      console.log(session);
      if (!session) {
        router.push("user/login");
      } else {
        setSession(session);
        router.push("user/home");
      }
    };

    checkSession();
  }, [router]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

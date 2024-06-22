"use client";
import { supabase } from "@/libs/supabase";
import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/user/login");
    } else {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h3">Welcome to IT-Vocab-Quiz</Typography>
      <Button variant="outlined" onClick={handleSignOut}>
        Sign Out
      </Button>
    </Container>
  );
};

export default Page;

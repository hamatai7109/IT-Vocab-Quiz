"use client";
import { supabase } from "@/libs/supabase";
import { Button, Container, Typography, Box, Grid, Paper } from "@mui/material";
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
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSignOut}
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          margin: "10px",
        }}
      >
        サインアウト
      </Button>
      <Container
        maxWidth="md"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "400px",
          padding: 3,
        }}
      >
        <Paper elevation={3} sx={{ p: 5 }}>
          <Typography variant="h3" gutterBottom>
            Welcome to IT-Vocab-Quiz
          </Typography>
          <Typography variant="h6" gutterBottom>
            IT業界で頻出の英単語を学習して、英語のドキュメントをすらすら読めるようになりましょう!!
          </Typography>
          <Box textAlign={"center"} mt={4}>
            <Button variant="contained" color="secondary" href="quiz">
              問題を解く
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Page;

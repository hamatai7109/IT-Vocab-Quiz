"use client";

import { useState } from "react";
import { supabase } from "@/libs/supabase";
import { useRouter } from "next/navigation";
import { Box, Button, TextField } from "@mui/material";

const EmailAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) throw signInError;
      await router.push("/");
    } catch (error) {
      alert("エラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <TextField
        type="email"
        placeholder="Email"
        value={email}
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        placeholder="Password"
        value={password}
        fullWidth
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="outlined" onClick={handleLogin} disabled={isLoading}>
        ログイン
      </Button>
    </Box>
  );
};

export default EmailAuth;

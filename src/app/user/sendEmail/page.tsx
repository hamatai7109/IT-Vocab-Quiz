"use client";

import { supabase } from "@/libs/supabase";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function SendEmail() {
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSendEmail = async () => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {});
      if (error) {
        throw error;
      }
      alert("パスワード再設定メールを確認してください");
      await router.push("login");
    } catch (error) {
      alert("エラーが発生しました");
    }
  };

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
        <Typography textAlign={"center"} variant="h3">
          Reset Password
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            登録済みのメールアドレス
          </InputLabel>
          <OutlinedInput
            type="email"
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            label="登録済みのメールアドレス"
          />
        </FormControl>
        <Box
          mt={2}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          <Button variant="outlined" href="login">
            戻る
          </Button>
          <Button variant="outlined" onClick={handleSendEmail}>
            送信
          </Button>
        </Box>
      </main>
      <footer></footer>
    </Container>
  );
}

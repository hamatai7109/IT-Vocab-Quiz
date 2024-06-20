"use client";

import Head from "next/head";
import { supabase } from "@/libs/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export default function PasswordReset() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleResetPassword = async () => {
    try {
      const { error: passwordResetError } = await supabase.auth.updateUser({
        password,
      });
      if (passwordResetError) {
        throw passwordResetError;
      }
      await router.push("login");
      alert("パスワード変更が完了しました");
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
            新しいパスワード
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="新しいパスワード"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          alignItems={"center"}
          mt={2}
        >
          <Button variant="outlined" onClick={handleResetPassword}>
            パスワード変更
          </Button>
        </Box>
      </main>
      <footer></footer>
    </Container>
  );
}

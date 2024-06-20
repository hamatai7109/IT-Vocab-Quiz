"use client";

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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (signUpError) {
        throw signUpError;
      }
      alert("登録完了メールを確認してください");
      await router.push("/login");
    } catch (error) {
      console.log(error);
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
          Sign Up
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            メールアドレス
          </InputLabel>
          <OutlinedInput
            type="email"
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            label="メールアドレス"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            パスワード
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="パスワード"
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
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            パスワード（確認）
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={passwordConf}
            onChange={(e) => setPasswordConf(e.target.value)}
            label="パスワード（確認）"
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
          gap={2}
        >
          <Button variant="outlined" onClick={handleSignUp}>
            新規登録
          </Button>
          <Button variant="text" href="login" sx={{ marginTop: "20px" }}>
            アカウントをお持ちの方はこちら
          </Button>
        </Box>
      </main>
      <footer></footer>
    </Container>
  );
}

"use client";

import { useRouter } from "next/navigation";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

export const GithubAuthButton = ({ session }: { session: Session | null }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  // サインアウト処理
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  // サインイン処理
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return session ? (
    // Sessionがあるかどうかで認証ボタンを切り替える
    <button onClick={handleSignOut}>ログアウト</button>
  ) : (
    <button onClick={handleSignIn}>Githubでログイン</button>
  );
};

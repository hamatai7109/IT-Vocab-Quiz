"use client";

import Link from "next/link";

import { supabase } from "@/libs/supabase";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const Logout = async (e) => {
    e.preventDefault();
    try {
      const { error: logoutError } = await supabase.auth.signOut();
      if (logoutError) {
        throw logoutError;
      }
      await router.push("/user/login");
    } catch {
      alert("エラーが発生しました");
    }
  };
  return (
    <>
      <h1>Top Page</h1>
      <Link href="user/login">ログイン</Link>
      <form onSubmit={Logout}>
        <button type="submit">ログアウトする</button>
      </form>
    </>
  );
}

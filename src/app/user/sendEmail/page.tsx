"use client";

import Head from "next/head";
import { supabase } from "@/libs/supabase";
import { useState } from "react";

export default function Sendemail() {
  const [email, setEmail] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { error: sendEmailError } =
        await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: "http://localhost:3000/user/passwordReset/",
        });
      if (sendEmailError) {
        throw sendEmailError;
      }
      alert("パスワード設定メールを確認してください");
    } catch (error) {
      alert("エラーが発生しました");
    }
  };

  return (
    <>
      <div>
        <Head>
          <title>パスワードリセット送信画面</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div>
            <form onSubmit={onSubmit}>
              <div>
                <label>登録メールアドレス</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <button type="submit">メールを送信</button>
              </div>
            </form>
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { GithubAuthButton } from "./GithubAuthButton";

export default async function GithubAuthButtonServer() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <GithubAuthButton session={session} />;
}

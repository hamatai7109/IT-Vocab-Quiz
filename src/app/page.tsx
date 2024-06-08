import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from "next/headers";
import GithubAuthButtonServer from "@/components/auth/github/GithubAuthButtonServer";
import EmailAuth from "@/components/auth/email/EmailAuth";
import { useRouter } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase.from("posts").select();

  return (
    <>
      <h1>Supabase + Nextjs Auth App</h1>
      <EmailAuth />
      <GithubAuthButtonServer />
      <pre>{JSON.stringify(posts, null, 2)}</pre>;
    </>
  );
}

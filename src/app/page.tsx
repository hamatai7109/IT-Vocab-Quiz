import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import GithubAuthButtonServer from "@/components/auth/github/GithubAuthButtonServer";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase.from("posts").select();

  return (
    <>
      <GithubAuthButtonServer />
      <pre>{JSON.stringify(posts, null, 2)}</pre>;
    </>
  );
}

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButton } from "@/components/AuthButton";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase.from("posts").select();

  return (
    <>
      <AuthButton />
      <pre>{JSON.stringify(posts, null, 2)}</pre>;
    </>
  );
}

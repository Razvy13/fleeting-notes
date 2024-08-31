import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();
  console.log(notes);

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}

import { FleetingNote } from "@/types/note";
import { createClient } from "@/utils/supabase/server";

export async function getFleetingNotes() {
  const supabase = createClient();
  const { data: notes }: { data: FleetingNote[] | null } = await supabase
    .from("notes")
    .select()
    .order("created_at", { ascending: true });

  return notes;
}

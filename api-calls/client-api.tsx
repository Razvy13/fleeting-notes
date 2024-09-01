import { FleetingNote } from "@/types/note";
import { createClient } from "@/utils/supabase/client";

export async function updateFleetingNote(note: FleetingNote) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("notes")
    .update({ title: note.title })
    .eq("id", note.id)
    .select();

  return { data, error };
}

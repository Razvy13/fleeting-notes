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

export async function insertEmptyFleetingNoteWithColor(
  tailwindClassName: string
) {
  const supabase = createClient();
  const userId = (await supabase.auth.getUser()).data.user?.id;

  const { data, error } = await supabase
    .from("notes")
    .insert([{ background_color: tailwindClassName, user_id: userId }]);

  return { data, error };
}

export async function deleteFleetingNoteById(id: string) {
  const supabase = createClient();

  const { data, error } = await supabase.from("notes").delete().eq("id", id);

  return { data, error };
}

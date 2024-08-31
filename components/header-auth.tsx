import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { createClient } from "@/utils/supabase/server";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center">
          <div>
            <Badge
              variant={"default"}
              className="font-normal pointer-events-none"
            >
              Please update .env.local file with anon key and url
            </Badge>
          </div>
        </div>
      </>
    );
  }
  return user ? (
    <div className="flex items-center gap-4">
      <img
        src={user.user_metadata.avatar_url}
        alt="User profile image"
        className="w-8 h-8 rounded-full"
      />
      Hey, {user.user_metadata.full_name}!
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Sign out
        </Button>
      </form>
    </div>
  ) : null;
}

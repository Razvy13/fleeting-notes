"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    const handleSignInWithGoogle = async (response: { credential: any }) => {
      console.log(response);
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: response.credential,
      });
    };

    // Make handleSignInWithGoogle globally accessible
    (window as any).handleSignInWithGoogle = handleSignInWithGoogle;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="26441734260-uccuhjv9f04c4diqavn6s19a21des00h.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleSignInWithGoogle"
        data-nonce=""
        data-auto_select="true"
        data-itp_support="true"
        data-use_fedcm_for_prompt="true"
      ></div>
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="filled_black"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </>
  );
};

export default Login;

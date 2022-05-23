// import { Button } from "@material-ui/core"
import { useCallback, useEffect, useState } from "react"
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

type IUser = {
  _id: number | undefined
};

// We use an approach that is described on 
// https://dev.to/mremanuel/add-the-new-google-sign-in-to-your-react-app-p6m


export default function GoogleSignin() {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false)
  const [user, setUser] = useState<IUser>({_id: undefined})
  
  const handleGoogleSignIn = useCallback((res: CredentialResponse) => {
    if (!res.clientId || !res.credential) return;
      // Implement your login mutations and logic here.
      // Set cookies, call your backend, etc. 
      console.log(res);
      
      // TODO: retrieve user data
      setUser({_id: 1});
    }, []);

  useEffect(() => {
    if (user?._id || gsiScriptLoaded) return

    const initializeGsi = () => {
      if (!window.google || gsiScriptLoaded) return

      setGsiScriptLoaded(true)
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID || "",
        callback: handleGoogleSignIn,
      })
    }

    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.onload = initializeGsi
    script.async = true
    script.id = "google-client-script"
    document.querySelector("body")?.appendChild(script)

    return () => {
      // Cleanup function that runs when component unmounts
      window.google?.accounts.id.cancel()
      document.getElementById("google-client-script")?.remove()
    }
  }, [handleGoogleSignIn, gsiScriptLoaded, user?._id])

  return <div className={"g_id_signin"} 
    data-type="standard "
    data-size="large"
    data-theme="outline"
    data-text="sign_in_with"
    data-shape="rectangular"
    data-logo_alignment="center" />
}
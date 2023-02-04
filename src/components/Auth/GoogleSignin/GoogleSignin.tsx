// import { Button } from "@material-ui/core"
import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { AppDispatch } from "../../../redux/storeTypes";
import { authThunkCreator } from "./authActions";



const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

type IUser = {
  _id: number | undefined
};

// We use an approach that is described on 
// https://dev.to/mremanuel/add-the-new-google-sign-in-to-your-react-app-p6m


export default function GoogleSignin() {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false)
  const [user, setUser] = useState<IUser>({ _id: undefined })
  const dispatch: AppDispatch = useDispatch()
  let navigate = useNavigate()

  const handleGoogleSignIn = useCallback(async (res: CredentialResponse) => {
    if (!res.clientId || !res.credential) return;
    // Implement your login mutations and logic here.
    // Set cookies, call your backend, etc.
    let token: any = res.credential
    let decoded: any = jwt_decode(token);
    dispatch(authThunkCreator(decoded.given_name, decoded.family_name, decoded.email, res.credential))

    let givenName = decoded.given_name
    let email = decoded.email
    let familyName = decoded.family_name
    let credential = res.credential
    localStorage.givenName = givenName;
    localStorage.familyName = familyName;
    localStorage.Email = email;
    localStorage.credential = credential;
    // givenName = decoded.given_name.parse(localStorage.a); // parse to date object
    // Email = decoded.family_name.parse(localStorage.b);
    // familyName = decoded.email.parse(localStorage.b);
    // console.log(givenName - Email - familyName); // now, this will work
    navigate("/")
    console.log(decoded);

    // TODO: retrieve user data
    setUser({ _id: 1 });
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

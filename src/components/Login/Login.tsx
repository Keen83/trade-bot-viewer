import React from "react";
import GoogleSignin from "../Auth/GoogleSignin/GoogleSignin";

import styles from './Login.module.css'

export function Login() {
    return(
        <div className={styles.loginContainer}>
          <div className="login-header">Login with:</div>
          <div className="login-items">
            <GoogleSignin/>
          </div>
        </div>
    )
}

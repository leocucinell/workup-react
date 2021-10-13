import React from "react";

import LogIn from "./LogIn";
import SignUp from "./SignUp";

import "./AuthForm.css"

const AuthFrom = () => {
    return(
        <div className="auth-form___container">
            <h2>Log In</h2>
            <LogIn />
            <h2>Sign Up</h2>
            <SignUp />
        </div>
    )
}

export default AuthFrom;
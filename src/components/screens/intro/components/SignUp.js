import React, { useState } from "react";

import "./AuthForm.css"

const SignUp = () => {

    const [emailVal, setEmailVal] = useState("");
    const [usernameVal, setUsernameVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [cityVal, setCityVal] = useState("");

    return(
        <div className="signup-form___container">
            <form className="signup-form">
                <input className="intro-input" placeholder="username" type="text" name="username" value={usernameVal} onChange={(e) => setUsernameVal(e.target.value)} />
                <input className="intro-input" placeholder="email" type="text" name="email" value={emailVal} onChange={(e) => setEmailVal(e.target.value)} />
                <input className="intro-input" placeholder="password" type="password" name="password" value={passwordVal} onChange={(e) => setPasswordVal(e.target.value)} />
                <input className="intro-input" placeholder="city" type="text" name="city" value={cityVal} onChange={(e) => setCityVal(e.target.value)} />
            </form>
        </div>
    );
}

export default SignUp;
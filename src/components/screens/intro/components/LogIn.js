import React, { useState } from "react";

import "./LogIn.css"

const LogIn = () => {

    const [emailVal, setEmailVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");

    return(
        <div className="login-form___container">
            <form className="login-form">
                <input className="intro-input" placeholder="email" type="text" name="email" value={emailVal} onChange={(e) => setEmailVal(e.target.value)} />
                <input className="intro-input" placeholder="password" type="password" name="password" val={passwordVal} onChange={(e) => setPasswordVal(e.target.value)} />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default LogIn;
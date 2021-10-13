import React from "react";
import { Link } from "react-router-dom";

import "./Intro.css"

const Intro = () => {
    return(
        <div className="intro-page___container">
            <div className="intro-grid___container">
                <div className="intro-greeting___container">
                    <h1>Welcome to WorkUp!</h1>
                    <p>fghwegr htegrfwe2 546htrefvd werh tjyh tgrfw bghntju 5y4t3r wfe grhyt ju6 jth rerf 23g 4h5j y trfefr3gt4h5ju6kuj5yh4 tg34354657j h4t</p>
                </div>
                <div className="intro-auth___container">
                    <h2>Log In</h2>
                    <h2>Sign Up</h2>
                </div>
                <div className="intro-routing___container">
                    <p><Link to="/jobs">continue</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Intro;
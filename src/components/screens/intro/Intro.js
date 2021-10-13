import React from "react";
import { Link } from "react-router-dom";

import Article from "./components/Article";
import AuthForm from "./components/AuthForm";

import "./Intro.css"
import angryBuild from "./angry-ikea.jpeg";
import carnival from "./carnival.jpg";
import plumber from "./plumber.jpeg"


const Intro = () => {
    return(
        <div className="intro-page___container">
            <div className="intro-grid___container">

                <div className="intro-greeting___container">
                    <h1 id="greeting-title">Welcome to WorkUp!</h1>
                    <div className="intro-articles___container">
                        <Article
                            image={angryBuild} 
                            text="Everybody has been here, hour 3 into an assembly that should have taken 30 minutes. 
                            Take a breather from the diagrams and get some help! Make a quick post and get a reliable
                            neighbor to take some of the pressure off your shoulders."
                        />
                        <Article
                            image={plumber}
                            text="Need some handy work done around the house? With WorkUp, a local technician can be at your house
                            as soon as you need! No more waiting at your house all day for someone to show up an hour late. Make appointments
                            on your own time and get back to your life!"
                        />
                        <Article 
                            image={carnival}
                            text="Do you have an event coming up soon that you need staffed and have no idea where to get started? WorkUp can
                            get you the people you need to keep things running smoothly. Just post your job online and have people who are 
                            interested in working come to you!"
                        />
                    </div>
                </div>

                <div className="intro-auth___container">
                    <AuthForm />
                </div>

                <div className="intro-routing___container">
                    <p><Link to="/jobs">continue</Link></p>
                </div>

            </div>
        </div>
    );
}

export default Intro;
// import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleprovider,githubprovider } from "../config/firebase.config.ts";

function Login() {
    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleprovider);
            const user = result.user;
            alert(`Welcome user ${user.displayName}`);
        } catch (error) {
            alert("Google Sign-In is failing due to an authentication error.");
        }
    };

    const loginWithGithub = async ()=>{
        try {
            const result = await signInWithPopup(auth, githubprovider);
            const user = result.user;
            alert(`Welcome user ${user.displayName}`);
        } catch (error) {
            alert("Github Sign-In is failing due to an authentication error.")
        }
    }
    return (
        <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            <h3>OAuth login</h3>
            <button onClick={loginWithGoogle}>login with google</button>
            <br />
            <button onClick={loginWithGithub}>login with github</button>
        </div>
    );
}

export default Login;
import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        phone: '',
        error: '',
        success: false
    });
    const handleSubmit = (event) => {
        console.log(user.email, user.password);
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((response) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log('Sign in User Info', response.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
    }
    const handleBlur = (event) => {
        console.log(event.target.name, event.target.value);
        let isFieldValid = true;
        if (event.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(event.target.value);
            isFieldValid = isEmailValid;
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length >= 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Log in</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onBlur={handleBlur} placeholder="Email Address" required />
                <br />
                <input type="password" name="password" id="" onBlur={handleBlur} placeholder="Password" required />
                <br />
                <div className="">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="user">Remember me</label>
                    <p className="forgot-password text-right">
                        <a href="/">Forgot password?</a>
                    </p>
                </div>
                <input type="submit" value="Log in" />
            </form>
            <h4>Don't have an Account? <a href="/signup">Create an Account</a> </h4>
        </div >
    );
};

export default Login;
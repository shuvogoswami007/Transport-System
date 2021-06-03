import React, { useState } from 'react';
import './Signup.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Signup = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        phone: '',
        error: '',
        success: false
    });

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(response => {
                console.log(response);
                const { displayName, email, photoURL } = response.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(response => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    photo: '',
                    email: ''
                }
                setUser(signedOutUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleBlur = (event) => {
        console.log(event.target.name, event.target.value);
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);

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
    const handleSubmit = (event) => {
        console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((response) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    console.log(response);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        event.preventDefault();
    }

    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        })
            .then(function () {
                console.log('User updated successfully');
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Create an Account</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onBlur={handleBlur} placeholder="Name" required />
                <br />
                <input type="text" name="email" onBlur={handleBlur} placeholder="Email Address" required />
                <br />
                <input type="password" name="password" id="" onBlur={handleBlur} placeholder="Password" required />
                <br />
                <input type="submit" value="Create an Account" />
            </form>
            <h3>Already have an account? <a href="/login">login</a></h3>
            { user.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button> :
                <button onClick={handleSignIn}>Sign in using Google</button>
            }
        </div>
    );
};

export default Signup;
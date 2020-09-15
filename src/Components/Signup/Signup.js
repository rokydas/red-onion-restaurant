import React, { useContext, useState } from 'react';
import './Signup.css';
import logo from '../../images/logo2.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Signup = () => {

    const provider = new firebase.auth.GoogleAuthProvider();

    const [user, setUser] = useState({});

    const [signedInUser, setSignedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const setInformation = (event) => {
        let isFieldValid = true;

        if(event.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        else if(event.target.name === 'password' || event.target.name === 'confirm-password'){
            isFieldValid = event.target.value.length >= 6 && /\d{1}/.test(event.target.value);
        }

        // console.log(isFieldValid);
        
        if(isFieldValid){
            // debugger;
            const newUser = {...user};
            newUser[event.target.name] = event.target.value;
            setUser(newUser);
            console.log(user);
        }
    }

    const handleSignUp = (event) => {
        
        if(user.email && user.password && user.password === user.confirm_password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                setSignedInUser(user);
                history.replace(from);
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        }
        event.preventDefault();
    }

    const googleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res);
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorMessage);
        });
    }

    return (
        <div className="signup">
            <Link to="/"><img src={logo} alt=""/></Link><br/><br/><br/>
            <h3>Sign Up</h3><br/>
            <input onClick={googleSignIn} type="submit" value="Sign in with google"/><br/><br/>
            <form className="">
                <input id="first" onBlur={setInformation} type="text" name="first_name" placeholder="First Name" required/><br/><br/>
                <input id="last" onBlur={setInformation} type="text" name="last_name" placeholder="Last Name" required/><br/><br/>
                <input id="address" onBlur={setInformation} type="text" name="address" placeholder="Address" required/><br/><br/>
                <input id="email" onBlur={setInformation} type="email" name="email" placeholder="Email" required/><br/><br/>
                <input id="pass" onBlur={setInformation} type="password" name="password" placeholder="Password" required/><br/><br/>
                <input id="con-pass" onBlur={setInformation} type="password" name="confirm_password" placeholder="Confirm Password" required/><br/><br/>
                <input onClick={handleSignUp} type="submit" value="Sign Up"/>
                <p>Already registered? <Link to="/signin">Sign In here</Link></p>
            </form>

        </div>
    );
};

export default Signup;
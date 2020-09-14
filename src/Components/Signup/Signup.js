import React from 'react';
import './Signup.css';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';

const Signup = () => {

    

    return (
        <div className="signup">
            <img src={logo} alt=""/><br/><br/><br/>
            <h3>Sign Up</h3><br/>
            <form className="">
                <input type="text" placeholder="First Name" required/><br/><br/>
                <input type="text" placeholder="Last Name" required/><br/><br/>
                <input type="email" name="" id="" placeholder="Email" required/><br/><br/>
                <input type="password" name="" id="" placeholder="Password" required/><br/><br/>
                <input type="password" name="" id=""placeholder="Confirm Password" required/><br/><br/>
                <input type="submit" value="Sign Up" name=""/>
                <p>Already registered? <Link to="/signin">Sign In here</Link></p>
            </form>


        </div>
    );
};

export default Signup;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';

const Signin = () => {
    return (
        <div className="signup">
            <img src={logo} alt=""/><br/><br/><br/>
            <h3>Signin</h3>
            <form className="">
                <input type="email" name="" id="" placeholder="Email" required/><br/><br/>
                <input type="password" name="" id="" placeholder="Password" required/><br/><br/>
                <input type="submit" value="Sign In" name=""/>
                <p>New User? <Link to="/signup">Create Account here</Link></p>
            </form>
        </div>
    );
};

export default Signin;
import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo2.png';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="header">
            <Navbar bg="white" expand="lg">
                <Navbar.Brand className="brand" href="/"><img width="150px" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="nav-text"><ShoppingCartOutlinedIcon/></Navbar.Text>
                    <Link to="/signin"><Navbar.Text className="nav-text">Login</Navbar.Text></Link>
                    <button className="custom-btn"><Navbar.Text><Link to="/signup">Sign Up</Link></Navbar.Text></button>
                </Navbar.Collapse>
            </Navbar>
            <section className="banner">
                <h1>Best food waiting for your belly</h1><br/>
                <input type="text" name="" id="" placeholder="Search your food" /> &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="custom-btn">Search</button>
            </section>

        </div>
    );
};

export default Header;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = (props) => {
    const {id, name, description, img, price} = props.data;

    return (
        <div className="menu-box">
            <img src={img} alt="menu_image"></img><br/>
            <Link to={"/menu/"+id}>{name}</Link>
            <p>{description}</p>
            <h3>$ {price}</h3>
        </div>
    );
};

export default Menu;
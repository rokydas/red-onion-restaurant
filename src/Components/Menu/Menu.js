import React from 'react';
import './Menu.css';

const Menu = (props) => {
    const {name, description, img, price} = props.data;
    return (
        <div className="menu-box">
            <img src={img} alt="menu_image"></img>
            <h5>{name}</h5>
            <p>{description}</p>
            <h3>$ {price}</h3>
        </div>
    );
};

export default Menu;
import React from 'react';
import './hamburgers.css';
import './NavMenu.css';

let NavMenu = (props) => {
    return (
        <div className="NavMenu">
            <button className={"hamburger hamburger--spring " + (props.active && "is-active")} type="button" onClick={props.onClick}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    );
}

export default NavMenu;
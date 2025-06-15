import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.FDgd7O_RJoZqYD40UGEXcgHaHa%26pid%3DApi&f=1"
            alt="Loading error"/>
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}

export default Header;
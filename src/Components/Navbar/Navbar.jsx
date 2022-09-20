import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return <nav className={classes.nav}>

        {/*
          *
          *  className={({ isActive })  allow us to use special styles if our link is active
          *  like example below we choose style class  "classe s.activeLink"
          *
            */}

        <div className={classes.item}>
            <NavLink to="/profile" className={({isActive}) => (isActive ? (classes.activeLink) : "")}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" className={({isActive}) => (isActive ? (classes.activeLink) : "")}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/news" className={({isActive}) => (isActive ? (classes.activeLink) : "")}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/music" className={({isActive}) => (isActive ? (classes.activeLink) : "")}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/settings"
                     className={({isActive}) => (isActive ? (classes.activeLink) : "")}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;
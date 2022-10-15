import React from 'react';
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom';
import '../../App.css';


export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <nav>
                <div className={styles.navItem}>
                    <NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Profile</NavLink>
                </div>
                <div className={styles.navItem}>
                    <NavLink to="/messages" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Messages</NavLink>
                </div>
                <div className={styles.navItem}>
                    <NavLink to="/users" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Users</NavLink>
                </div>
                <div className={styles.navItem}>
                    <NavLink to="/music" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Music</NavLink>
                </div>
                <div className={styles.navItem}>
                    <NavLink to="/settings" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Settings</NavLink>
                </div>
            </nav>
        </div>
    )
}
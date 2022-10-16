import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { authAPI } from '../../api/api';

export default function Header({me, logoutCreator}) {

  return (
    <div className={styles.header}>
      {
        !me.resultCode ? <div style={{color: 'white', float: 'right'}}>{me.data?.login} <button onClick={logoutCreator}>Sign out</button></div> : <NavLink to="/login">Login</NavLink>
      }
    </div>
  )
}
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss'

export default function Header({me}) {
  return (
    <div className={styles.header}>
      {
        !me.resultCode ? <div style={{color: 'white', float: 'right'}}>{me.data?.login}</div> : <NavLink to="/login">Login</NavLink>
      }
    </div>
  )
}
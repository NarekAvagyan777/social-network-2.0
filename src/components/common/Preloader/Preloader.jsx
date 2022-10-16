import React from 'react';
import loader from '../../../assets/images/loader.gif';


export default function Preloader() {
  return (
    <div>
        <img src={loader} style={{width: '80px'}} alt="" />
    </div>
  )
}
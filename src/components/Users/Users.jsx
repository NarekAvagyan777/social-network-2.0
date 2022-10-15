import React from 'react';
import styles from './Users.module.scss';
import userPng from '../../assets/images/user.png';

export default function Users(props) {
  let pages = Math.ceil(props.totalCount / props.pageSize);
  let pagesArr = [];


  for(let i = 1; i <= pages; i++) {
    pagesArr.push(i);
  };

  return (
    <div className={styles.usersPageWrapper}>
      <div className={styles.pagesNumberWrapper}>
        {
          pagesArr.map(el => <span key={el} className={props.currentPage === el ? `${styles.pageNumber} ${styles.currentPage}` : styles.pageNumber} onClick={ () => props.onPageChangeCreator(el, props.pageSize) }>{el}</span>)
        }
      </div>
      <div>
        {
          props.users.map(el => <div className={styles.singleUser} key={el.id}>
            <img src={el.photos.small ? el.photos.small : userPng} />
            <span>{el.name}</span>
              {
                el.followed ? <button>Unfollow</button> : <button>Follow</button>
              }
          </div>)
        }
      </div>
    </div>
  )
}
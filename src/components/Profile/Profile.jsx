import React, { useState } from 'react';
import styles from './Profile.module.scss';
import Post from './Post/Post';
import userPng from '../../assets/images/user.png';

export default function Profile(props) {

    const [inputValue, setInputValue] = useState('');

    const addPost = () => {
        let post = {
            postText: inputValue,
            likesCount: 0,
            avatar: userPng,
            id: Date.now()
        };

        if(inputValue.trimStart()) {
            props.addNewPost(post);
        }
        setInputValue('');
    }

    return (
        <div>
          <div className={styles.postsWrapper}>
            <div className={styles.posts}>
              {
                  props.posts.map((el) => {
                    return <Post postText={el.postText} likesCount={el.likesCount} avatar={el.avatar} key={el.id} />
                  })
              }
            </div>

            <div >
              <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <div>
              <button onClick={addPost}>Add Post</button>
            </div>
          </div>
        </div>
    )
}
import React from 'react'

export default function Post(props) {
  return (
    <div>
      <div>
        <img src={props.avatar} />
        <span>{props.postText}</span>
      </div>
      <div>
        <span>likes {props.likesCount}</span>
      </div>
    </div>
  )
}
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {


    return (
        <div className={s.item}>
            <img src='https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )

}

export default Post;
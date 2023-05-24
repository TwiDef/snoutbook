import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img width={50} height={50} src="https://cdn-icons-png.flaticon.com/512/3617/3617143.png" alt="post_img" />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post;
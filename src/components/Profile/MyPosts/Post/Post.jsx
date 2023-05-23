
import React from 'react';
import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.item}>
            <img width={50} height={50} src="https://cdn-icons-png.flaticon.com/512/3617/3617143.png" alt="post_img" />
            opost 1
            <div>
                <span className="like">like</span>
            </div>

        </div>
    )
}

export default Post;
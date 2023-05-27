import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    const posts = [
        { id: 1, message: "first post", likesCount: 15 },
        { id: 2, message: "second post", likesCount: 5 },
        { id: 3, message: "another post", likesCount: 23 },
    ]

    const postsElements = posts.map(post =>
        <Post
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
        />)

    return (
        <div className={classes.postBlock}>

            <h3>My posts</h3>

            <div>

                <div>
                    <textarea cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>

    )
}

export default MyPosts;
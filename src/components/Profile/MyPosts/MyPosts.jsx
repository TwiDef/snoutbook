import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    const postsElements = props.posts
        .map((post, index) => <Post
            key={index}
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
        />)

    let newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = '';
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>

    )
}

export default MyPosts;
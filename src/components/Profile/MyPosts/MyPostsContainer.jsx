import React from 'react';
import { addPostActionCreator, updateNewTextPostActionsCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    const onPostChange = (text) => {
                        store.dispatch(updateNewTextPostActionsCreator(text))
                    }

                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    //posts={state.profilePage.posts}
                    //newPostText={state.profilePage.newPostText} 
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
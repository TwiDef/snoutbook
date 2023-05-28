import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


/* ######## DATA ######## */
const posts = [
    { id: 1, message: "first post", likesCount: 15 },
    { id: 2, message: "second post", likesCount: 5 },
    { id: 3, message: "another post", likesCount: 23 },
]

const dialogs = [
    { id: 1, name: "Dmitriy" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Sarah" },
    { id: 5, name: "Galthran" },
]

const messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Lorem" },
    { id: 3, message: "How are you" },
]
/* ######## DATA ######## */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App
            posts={posts}
            dialogs={dialogs}
            messages={messages} />
    </React.StrictMode>
);



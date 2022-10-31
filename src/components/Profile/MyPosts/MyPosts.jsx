import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.create_post}>
            <h2>My Posts</h2>
            <textarea name="" id="" cols="" rows="5" value='Something write...'></textarea><br/>
            <button>Create</button>
            <Post message = 'Hello, I am Vasya!' />
            <Post message = 'How are you ?' />
        </div>

    );
}

export default MyPosts;
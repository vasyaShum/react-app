import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://wallpaperaccess.com/full/2461293.jpg" alt=""/>
            <MyPosts />
        </div>

    );
}


export default Profile;
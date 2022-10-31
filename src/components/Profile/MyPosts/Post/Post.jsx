import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/2048px-Google_Contacts_icon.svg.png" alt=""/>
            </div>
            <div>
                {props.message}
            </div>
        </div>
    );
}

export default Post;
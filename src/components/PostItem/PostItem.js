import React from 'react';
import DefButton from "../Button";
import style from "./PostItem.module.css"

const PostItem = ({post, setPosts, posts}) => {

    const doneBtn = (id) => {
        const newPosts = posts.map(value => {
            if (value.id === id) {
                return {...value, done: !value.done}
            }
            return value
        })
        setPosts(newPosts)
    }

    const deleteBtn = (id) => {
        const newPosts = posts.filter(item => item.id !== id)
        setPosts(newPosts)
    }

    let postClass = `${style.post} `

    if (post.done) {
        postClass += style.postSuccess
    }

    return (
        // <div className={`post ${post.done ? style.postSuccess : ''}`}>
        <div className={postClass}>
            <div className={style.postContent}>
                <strong>{post.title}</strong>
            </div>
            <div className={style.postBtn}>
                <DefButton className={style.doneBtn} onClick={() => doneBtn(post.id)}>done</DefButton>
                <DefButton color={'error'} onClick={() => deleteBtn(post.id)}>delete</DefButton>
            </div>
        </div>
    );
};

export default PostItem;
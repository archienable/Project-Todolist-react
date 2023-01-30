import React from 'react';
import Button from "./Button";
import style from "./PostItem.module.css"

const PostItem = ({post, setPosts, posts}) => {

    let keyName = 'fff'
    
    const doneBtn = (id) => {
        const newPosts = posts.map(value => {
            if (value.id === id) {
                return {...value, done: !value.done}
            }
            return value
        })
        setPosts(newPosts)
        localStorage.setItem(keyName, JSON.stringify(newPosts))
    }

    const deleteBtn = (id) => {
        const newPosts = posts.filter(item => item.id !== id)
        setPosts(newPosts)
        localStorage.setItem(keyName, JSON.stringify(newPosts))
    }

    let postClass = 'post '

    if (post.done) {
        postClass += style.postSuccess
    }

    return (
        // <div className={`post ${post.done ? style.postSuccess : ''}`}>
        <div className={postClass}>
            <div className='postContent'>
                <strong>{post.title}</strong>
            </div>
            <div className='postBtn'>
                <Button onClick={() => deleteBtn(post.id)}>delete</Button>
                <Button className={style.doneBtn} onClick={() => doneBtn(post.id)}>done</Button>
            </div>
        </div>
    );
};

export default PostItem;
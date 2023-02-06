import React, {useState, useEffect, useCallback} from "react";
import InputGroup from "./components/InputGroup/InputGroup";
import MyPosts from "./components/MyPosts/MyPosts";
import Input from "./components/Input/Input";
import './App.css'
import DefButton from "./components/Button";
import {getTag} from "@testing-library/jest-dom/dist/utils";

function App() {

    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('fff')) || [])
    const [s, setS] = useState('')
    const [keyPressed, setKeyPressed] = useState('')

    const press = useCallback(({key, target}) => {
        if (target.tagName === 'BODY') {
            setKeyPressed((prevState) => {
                return prevState + key
            })
        } else {
            setKeyPressed('')
        }
        // console.log('target', target.tagName === 'BODY')
        console.log('keyPressed', keyPressed)
    }, [keyPressed])
        console.log('keyPressedAAAAAAAAA', keyPressed)

    useEffect(() => {
        const deletePosts = []
        if (keyPressed.includes('delete')) {
            setPosts(deletePosts)
            setKeyPressed('')
        }
    }, [keyPressed])

    useEffect(() => {
        window.addEventListener('keyup', press)
    }, [])


    const searchFilter = () => {
        return posts.filter(item => item.title.includes(s))
    }

    const addCase = (text) => {
        const newPosts = [...posts, { id: Date.now(), title: text, done: false }]
        setPosts(newPosts)
    }

    useEffect(() => {
        localStorage.setItem('fff', JSON.stringify(posts))
    }, [posts])

    return (
        <div className="App">
            <h2>TodoList</h2>
            <DefButton>Delete all posts</DefButton>
            <InputGroup addCase={addCase}/>
            <Input className='searchInput' text={s} setText={setS} placeholder='поиск' />
            <h3>Posts</h3>
            <MyPosts posts={searchFilter()} setPosts={setPosts} s={s}/>
        </div>
    );
}

export default App;

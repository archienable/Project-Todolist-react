import React, {useState} from "react";
import InputGroup from "./components/InputGroup/InputGroup";
import MyPosts from "./components/MyPosts";

function App() {

    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('fff')) || [])

    const addCase = (text) => {
        const newPosts = [...posts, { id: Date.now(), title: text, done: false }]
        setPosts(newPosts)
        localStorage.setItem('fff', JSON.stringify(newPosts))
    }

    return (
        <div className="App">
            <h2>todoList</h2>
            <InputGroup addCase={addCase}/>
            <MyPosts posts={posts} setPosts={setPosts}/>
        </div>
    );
}

export default App;

import React, {useState} from "react";

function App() {

        const [posts, setPosts] = useState([])

        const [text, setText] = useState('')

        const addCase = (e) => {
            e.preventDefault()
            const newTodo = {id: Date.now(), title: text}
            setPosts([...posts, newTodo])
            setText('')
        }

    const deleteBtn = (id) => {
        console.log(id)
        // console.log(posts)
        setPosts(posts.filter(item => item.id !== id))

    }

  return (
    <div className="App">
        <h2>todoList</h2>
        <div>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                type='text'
                placeholder='введите текст'/>
            <button disabled={!text} onClick={addCase}>добавить дело</button>
        </div>
        {posts.map((post) => {
            return (
                <div className='post'>
                    <div className='postContent'>
                        <strong>{post.title}</strong>
                    </div>
                    <div className='postBtn'>
                        <button onClick={() => deleteBtn(post.id)} key={post.id}>delete</button>
                    </div>
                </div>
                )
            }
        )}
    </div>
  );
}

export default App;

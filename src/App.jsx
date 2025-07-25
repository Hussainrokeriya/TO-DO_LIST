import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {v4 as uuidv4} from 'uuid'
function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [finished, setFinished] = useState([]);

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let new_todos = [...todos];
    let new_finished = [...finished];
    new_finished.push(new_todos[index]);
    new_todos.splice(index, 1);
    setTodos(new_todos);
    setFinished(new_finished);
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleEdit = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item) => {
      return item.id === id
    })
    let new_todos = [...todos]
    console.log("Old todos: ", todos)
    let content = new_todos[index].todo
    new_todos.splice(index, 1);
    console.log("New todos: ", new_todos)
    setTodos(new_todos)
    setTodo(content)
  }

  const handleDelete = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item) => {
      return item.id === id;
    })
    console.log("Old todos: ", todos)
    let new_todos = [...todos]
    new_todos.splice(index, 1);
    console.log("New todos: ", new_todos)
    setTodos(new_todos)
  }

  const handleAdd = () => {
    setTodos([...todos, {todo, id: uuidv4(), isCompleted: false}])
    setTodo("");
    console.log("Added todos are: ", todos)
  }

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl py-2 px-3 bg-violet-100 min-h-[80vh]">
        <div className="">
          <div className="addTodo">
            <h2 className="text-lg font-bold">Add a Todo!</h2>
            <input onChange={handleChange} value={todo} placeholder="Add your todo" type="text" className="bg-white w-2/3 border-2px-solid-black"/>
            <button className='bg-violet-800 hover:bg-violet-950 py-1 px-2 text-white rounded-md mx-6 text-sm font-bold' onClick={handleAdd}>Add</button>
          </div>
          <h1 className="text-lg font-bold">Your Tasks!</h1>
          <div className="todos">
              
              {todos.map(item => {
                return (
                  <div key={item.id} className="todo flex w-3/4 my-3 justify-between">
                    <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id=""/>
                    <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                    <div className="buttons">
                      <button name={item.id} className='bg-violet-800 hover:bg-violet-950 py-1 px-2 text-white rounded-md my-1 mx-1 text-sm font-bold' onClick={handleEdit}>Edit</button>
                      <button name={item.id} className='bg-violet-800 hover:bg-violet-950 py-1 px-2 text-white rounded-md my-1 mx-1 text-sm font-bold' onClick={handleDelete}>delete</button>
                    </div>
                  </div>
                )
              })}
          </div>
          <h1 className="text-lg font-bold">Your Finished tasks!</h1>
          <div className="todos"> 
              {
                finished.map(item => {
                return (
                  <div key={item.id} className="todo flex w-3/4 my-3 justify-between text-align-center">
                    <div>{item.todo}</div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

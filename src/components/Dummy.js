/* 
using hooks you can replace Rcc with Rfc 
1) useState (which helps us to define a state in RFC)

*/


import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Dummy(){
 const [todos, setTodos] = useState([]);
 // similar to ComponentdidMount , we have useEffect Hook
 useEffect( async () =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setTodos(res.data)
 })


    return(
        <div>
                <h1>Does it matter!</h1>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <div >
                            <p><b>To Do ID : </b> {todo.id}</p>
                            <p>ToDo Item is : {todo.title}</p>
                            <p>Status of the Task : <b>{todo.completed ? "True" : "False"}</b></p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
    )
}

export default Dummy


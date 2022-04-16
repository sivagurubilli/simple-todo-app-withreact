

import { useState } from "react"
import Todolist from "./todolist"

const Todo =()=>{
    const [todos,setTodos]= useState([])
    const [todotext,setTodotext] = useState("")


    const handleTodo = ()=>{
        let singleTodo ={
            text:todotext,
status:false,
id:Math.random()

        }
        setTodos([...todos,singleTodo])
    setTodotext('')
    
    }


    const handleStatus= id =>{
        setTodos(
            todos.map(ele=>(ele.id===id?{...ele,status:!ele.status}:ele))

        )
    }

    return(
        <div className="todobox">
            <Todolist todos ={todos} handleStatus={handleStatus}/>
            <input type ="text"
            placeholder="write todo..."
            value ={todotext}
            onChange ={e=>setTodotext(e.target.value)}/>
            <button onClick={handleTodo}>+</button>
        </div>
    )

    
}

export default Todo
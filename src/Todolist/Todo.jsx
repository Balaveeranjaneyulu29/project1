
import React,{useState} from 'react'
import todo from './todo.css'
import Todocomponent from './Todocomponent';
const Todo= () => {

const [task,setTask]=useState("");
const [todos,setTodos]=useState([]);

const changeHandler= e =>{
setTask(e.target.value);
}
const submitHandler= e =>{
  e.preventDefault();
  console.log(task);
  const newtodos=[...todos,task];
  setTodos(newtodos);
  setTask("");
}

const deleteHandler=(indexValue)=>{
  const newTodos=todos.filter((todo,index)=> index !==indexValue);
  setTodos(newTodos);
}

  return (
    <div className='box'>
      <h1> this is to do list</h1>
      <form className='form' onSubmit={submitHandler}>
        <input type='text' name='task' value={task} onChange={changeHandler}></input>
        <input type='submit' name='add' value="Add "></input>
      </form>
      <Todocomponent list={todos} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default Todo

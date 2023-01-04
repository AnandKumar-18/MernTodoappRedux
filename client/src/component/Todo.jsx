import React from 'react'
import { toggleTodo, updateTodo,deleteTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


const Todo = ({newtodo})=> {
  const [edit,setEdit] = useState(false);
  const [text,setText] = useState(newtodo.data);
  const dispatch = useDispatch();
  

  const onFormSubmit = (e) =>{
    e.preventDefault()
    setEdit(prevState=>!prevState)

    dispatch(updateTodo(newtodo._id,text))
  }
  return (
    <li className='task' 
    onClick={()=>dispatch(toggleTodo(newtodo._id))}
    style={{textDecoration: newtodo.done ? 'line-through':'',
    color: newtodo.done ? 'white':''}}>

      <span style={{display:edit ? 'none':''}}>{newtodo.data}</span>

      <form style={{display:edit ? 'inline':'none'}} onSubmit={onFormSubmit} >
        <input type="text" value={text} className='edit-todo' onChange={(e)=>setText(e.target.value)} />
      </form>

      <span className='icon' onClick={()=>setEdit(edit => !edit)}>
        <button className='btn edit'>Edit</button>
      </span>

      <span className='icon' onClick={()=>dispatch(deleteTodo(newtodo._id))} >
        <button className='btn delete'>Delete</button>
      </span>
    </li>
  )
}

export default Todo
import React from 'react'
import { useState } from 'react'
import { AddNewTodo } from '../redux/actions';
import {useDispatch} from 'react-redux';


const TodoForm = () => {
    const [val,stateVal] = useState('');

    const dispatch = useDispatch();

    const onInputSubmit=(e)=>{
      e.preventDefault();
      dispatch(AddNewTodo(val));

      stateVal('')
    }
    const onInputChange =(e)=>{
        stateVal(e.target.value)
    }

  return (
    <div>
        <form className='form' onSubmit={onInputSubmit}>
            <input onChange={onInputChange} className='input' type="text" value={val} placeholder='Enter new Todo...'/>
        </form>
    </div>
  )
}

export default TodoForm;
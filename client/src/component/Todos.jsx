import React from 'react'
import { useEffect } from 'react';
import { deleteTodo, getAllTodo } from '../redux/actions/index';
import { useDispatch, useSelector } from  'react-redux';
import Todo from './Todo';
import Tabs from './Tabs';
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../redux/actions/type';

const Todos = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllTodo())
  })

  const todos = useSelector(state => state.todos);
  const currentTab = useSelector(state => state.currentTab);

  const todoss = todos.data
  const getTodos = ()=>{
    if(currentTab === ALL_TODOS){
      console.log(todoss);
      return todoss;
    } else if(currentTab === ACTIVE_TODOS){
      return todos.data.filter(todo=>!todo.done)
    }else if(currentTab === DONE_TODOS){
      return todos.data.filter(todo=>todo.done)
    }
  }
  const mayData=todos.data

  const removeDoneTodos=()=>{
    mayData.forEach(({done,_id})=>{
      if(done){
        dispatch(deleteTodo(_id))
      }
    })
  }
  
  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />
        {
          todoss.some(todo=>todo.done) ? (
            <button onClick={removeDoneTodos}
             className='buttonClear' >Remove Done Todos</button>
          ):null
        }
      </div>
      {/* <ul>
        {mayData.map((data,index)=>{
          return(<><li key={index}>{data.data}</li></>)
        })}
      </ul> */}

      <ul>
        
      {getTodos().map((data,index)=>{
      return(<Todo 
        key={index} 
        newtodo={data} 
        />)  
      })}
      </ul>
    </article>
  )
}

export default Todos;
import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODO ,TOGGLE_TODO,UPDATE_TODO,DELETE_TODO,TOGGLE_TAB} from './type';

const URL = 'http://localhost:8000';
export const AddNewTodo = (data) => async(dispatch) =>{

    try {
        const res = await axios.post(`${URL}/todos`,{data})

        dispatch({type: ADDNEW_TODO,payload:res})
    }
    catch(error){
        console.log('Error while calling AddNewTodo',error.message );
    }
    
}

export const getAllTodo = ()=> async (dispatch)=>{
    try {
        const res = await axios.get(`${URL}/todos`)

        dispatch({type: GETALL_TODO,payload:res})
    }
    catch(error){
        console.log('Error while calling getAllTodo',error.message );
    }
}


export const toggleTodo = (id)=> async (dispatch)=>{
    try {
        const res = await axios.get(`${URL}/todos/${id}`)

        dispatch({type: TOGGLE_TODO,payload:res})
    }
    catch(error){
        console.log('Error while calling toggleTodo',error.message );
    }
}

export const updateTodo = (id,data )=> async (dispatch)=>{
    try {
        const res = await axios.put(`${URL}/todos/${id}`, {data})

        dispatch({type: UPDATE_TODO,payload:res})
    }
    catch(error){
        console.log('Error while calling updateTodo',error.message );
    }
}

export const deleteTodo = (id)=> async (dispatch)=>{
    try {
        const res = await axios.delete(`${URL}/todos/${id}`)

        dispatch({type: DELETE_TODO,payload:res})
    }
    catch(error){
        console.log('Error while calling deleteTodo',error.message );
    }
}

export const toggleTab = (tab)=> async (dispatch)=>{
    dispatch({type:TOGGLE_TAB,selected:tab})
}
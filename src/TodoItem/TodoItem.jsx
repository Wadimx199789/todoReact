import React from 'react';
import { Box, Checkbox } from '@mui/material';
import { Star, StarBorder, Edit, Delete } from '@mui/icons-material';
import TodoList from '../components/TodoList/TodoList';

function TodoItem({title,date,completed,favorite,todos,setTodos}) {
    const completeHandler = () =>{
       setTodos(
        todos.map((todo)=>{
            if(todo.date===date){
                return {...todo,completed:!completed}
            }
            else return {...todo};
        })
       )
    }
    const favoriteHandler = () =>{
        setTodos(
         todos.map((todo)=>{
             if(todo.date===date){
                 return {...todo,favorite:!favorite}
             }
             else return {...todo};
         })
        )
     }
    const deleteHandler = () =>{
        setTodos(todos.filter((todo)=>todo.date!==date));
    }
    return (
        <Box sx={{ backgroundColor: "#ffffff", display: "flex", justifyContent: 'space-between', alignItems: "center", borderRadius: "20px", padding: "20px" }}>
            <div className='left'>
                <Checkbox fontSize="large" defaultChecked={completed} onChange={completeHandler}/>
                <Checkbox icon={<StarBorder fontSize="large" />} checkedIcon={<Star fontSize="large" />} defaultChecked={favorite} onChange={favorite}/>
            </div>
            <Box sx={{ flex: "1" }}>
                <Box component="h2" sx={{color: completed ? "red":"blue",  textDecoration:completed? "line-through":"none"}}>{title}</Box>
                <p className='todo-date'>{date}</p>
            </Box>
            <div className='right'>
                <span>
                    <Edit fontSize="large"></Edit>
                </span>
                <span>
                    <Delete onClick = {deleteHandler} fontSize="large"></Delete>
                </span>
            </div>
        </Box>
    )
}

export default TodoItem
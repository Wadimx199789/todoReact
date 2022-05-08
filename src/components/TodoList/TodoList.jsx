import React from 'react';
import { Box, Button, Container, TextField, FormControl, MenuItem, Select, Checkbox } from '@mui/material';
import { Star, StarBorder, Edit, Delete } from '@mui/icons-material';
import TodoItem from '../../TodoItem/TodoItem';

function TodoList({todos,setTodos,filtration,search}) {
    return (
        <main>
            <div className='app-container'>
                <Box sx={{ backgroundColor: "rgb(236,237,245)", padding: "30px", display: "flex", flexDirection: "column", rowGap: "30px", borderRadius: "20px", marginTop: "30px" }}>
                    {todos.filter((todo)=>{
                        return todo.title.includes(search) || todo.date.includes(search);
                    }).filter((todo)=>{
                        switch(filtration){
                            case "completed": return todo.completed;
                            case "favorite":return todo.favorite;
                            default:
                            return todo; 
                        }
                    }).map((todo)=>{
                        return(
                            <TodoItem key={todo.date} date={todo.date} title={todo.title} completed={todo.completed} favorite={todo.favorite} todos={todos} setTodos={setTodos}></TodoItem>
                        );
                    })}
                </Box>
            </div>
        </main>
    )
}

export default TodoList
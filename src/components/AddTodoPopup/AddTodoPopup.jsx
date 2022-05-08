import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import "./AddTodoPopup.css";
import { textAlign } from '@mui/system';
import { SettingsOutlined } from '@mui/icons-material';

function AddTodoPopup({closePopup,setTodos,todos}) {

  const [title,setTiile]=React.useState("")
  const addNewTodo = ()=>{
    setTodos([...todos,{
      title:title,
      date:new Date().toLocaleString(),
      completed:false,
      favorite:false,

        }]);
        closePopup();
  }
  const onChangeInput = (e)=>{
    setTiile(e.target.value);
  }
  return (
    <Box className='popup-backdrop'>
       <Box className="popup">
      <Box component="h2" sx={{ marginBottom: "20px", textAlign: "center" }}>Add Todo</Box>
      <TextField required fullWidth label="title" onChange={onChangeInput}/>
      <Box sx={{ display: "flex", justifyContent: "flex-end", columnGap:"10px", marginTop:"20px" }}>
        <Button variant="contained" onClick={addNewTodo}>Add</Button>
        <Button variant="outlined" onClick={closePopup} >Cancel</Button>
      </Box>
    </Box>
    </Box>
   
  )
}

export default AddTodoPopup
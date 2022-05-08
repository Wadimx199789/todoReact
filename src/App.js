import React from 'react';
import { Box, Button, Container, TextField, FormControl, MenuItem, Select, Checkbox } from '@mui/material';
import { Star, StarBorder,Edit,Delete } from '@mui/icons-material';
import AddTodoPopup from './components/AddTodoPopup/AddTodoPopup';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [filtration, setFiltration] = React.useState('all');
  const[popUp,setpopUp] = React.useState(false);
  const[todos,setTodos] = React.useState(JSON.parse(localStorage.getItem('todos')) || []);
  const[search,setSearch] = React.useState("");

  const popupHandler =()=>{
    setpopUp(!popUp);
  }
  const handleChange = (event) => {
    setFiltration(event.target.value);
  };
  localStorage.setItem('todos',JSON.stringify(todos));
  return (
    <Container maxWidth='lg'>
      <Header  />
      <Navigation filtration={filtration} handleChange={handleChange} popupHandler={popupHandler} search={search} setSearch={setSearch}/>
      {todos.length > 0?(
        <TodoList todos={todos} setTodos={setTodos} filtration={filtration} search={search}/>
      ):null}
      {popUp ? <AddTodoPopup todos={todos} setTodos={setTodos} closePopup={popupHandler} />: null}
    </Container>
  )
}

export default App;

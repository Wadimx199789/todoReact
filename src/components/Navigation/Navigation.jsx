import React from 'react';
import { Box, Button, Container, TextField, FormControl, MenuItem, Select, Checkbox } from '@mui/material';

function Navigation({popupHandler,filtration,handleChange,search,setSearch}) {
    const searchHandler = (event)=>{
        setSearch(event.target.value);
    }
  return (
    <nav>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button onClick={popupHandler} variant="contained">Add ToDo</Button>
      <TextField sx={{ maxWidth: '50%' }} fullWidth label="search field" type="search" onChange={searchHandler}></TextField>

      <FormControl sx={{ maxWidth: 320 }} fullWidth>
        <Select
          labelId="filtering-select"
          id="demo-simple-select"
          value={filtration}
          onChange={handleChange}
        >
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="favorite">Completed</MenuItem>
          <MenuItem value="favorite">favorite</MenuItem>
        </Select>
      </FormControl>

    </Box>
  </nav>
  )
}

export default Navigation
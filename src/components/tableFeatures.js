import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, InputAdornment, IconButton, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import exportToCsv from './exportToCsv';
import { SaveAlt } from '@mui/icons-material';

function TableFeatures(props) {
  const [selectedValue, setSelectedValue] = useState('Select');
  const [alignment, setAlignment] = React.useState('Day');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div  className='table-features'>
      <div className='features'>
        <h1 >Books Details</h1>
        <TextField
          placeholder="Search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormControl>
          <Select
            labelId="select-label"
            id="select"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}

          >
            <MenuItem value="Select" disabled>
              Select an option
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
        >
          <ToggleButton value="Day" aria-label="left aligned">
          Day
          </ToggleButton>
          <ToggleButton value="Month" aria-label="centered">
          Month
          </ToggleButton>
          <ToggleButton value="Year" aria-label="right aligned">
          Year
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
       
        <IconButton className='export-icon' onClick={(data)=>exportToCsv(props?.data)}>
          
          <SaveAlt />
          <span>Export as Csv</span>
        </IconButton>
      </div>
    </div>
  );
}

export default TableFeatures;

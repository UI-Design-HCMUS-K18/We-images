import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
const FilterListComponet = ({ 
  name, 
  items, 
  onChangeHandler
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 1, marginBottom:0 }} component="fieldset" variant="standard">
        <FormLabel component="legend">
          {name}
          <span>
            <ExpandMoreIcon sx={{ ml: 0, position: 'absolute' }} />
          </span>
        </FormLabel>
        {items.map((item) => (
          <FormGroup key={item.name}>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={item.checked}
                  onChange={onChangeHandler}
                  name={item.name.toLowerCase()}
                />
              }
              label={item.name}
            />
          </FormGroup>
        ))}
      </FormControl>
    </Box>
  );
};

export default FilterListComponet;

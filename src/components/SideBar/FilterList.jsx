import React from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import classes from './Filter.module.css'
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

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 1, marginBottom:0 }} component="fieldset" variant="standard">
        <FormLabel component="legend" className={classes['filter-label']} onClick={handleClick}>
          {name}
          {open ? <ExpandLess sx={{ position: 'absolute' }}/> : <ExpandMore sx={{ position: 'absolute' }}/>} 
        </FormLabel>
        {items.map((item) => (
          <Collapse in={open} timeout="auto" unmountOnExit>
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
          </Collapse>
        ))}
      </FormControl>
    </Box>
  );
};

export default FilterListComponet;

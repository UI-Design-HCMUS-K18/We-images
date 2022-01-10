import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      mt: 4,
      padding: '40px 60px 40px 60px',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: "100%"
    }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" style={{fontSize:"32px"}} />
          <Tab label="Detail" style={{fontSize:"32px"}} />
          <Tab label="Social" style={{fontSize:"32px"}} />
          <Tab label="Collecitons" style={{fontSize:"32px"}} />
          <Tab label="Account" style={{fontSize:"32px"}} />
          <Tab label="Settings" style={{fontSize:"32px"}} />
        </Tabs>
      </Box>
    </Box>
  );
}

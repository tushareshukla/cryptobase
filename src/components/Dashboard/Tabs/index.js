import  React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';

export default function LabTabs() {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const theme =createTheme(
    {
      palette: {
        primary: {
          main: 'var(--blue)'
        }
       
      }
    }
  )
  const styles ={
    color: 'var(--white)',
    width: '100%',
    fontSize:'1.2rem',
    fontWeight: '600', 
    fontFamily: 'inter',
    textTransform: 'capitalize',

  }
  return (
    <ThemeProvider theme={theme} >
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={styles}/>
            <Tab label="List" value="list" sx={styles} />
         
          </TabList>
        <TabPanel value="grid">Mapping for Grids</TabPanel>
        <TabPanel value="list">Mapping for Lists</TabPanel>
       
      </TabContext>
    </ThemeProvider>
  );
}
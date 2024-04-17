import  React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
         
          </TabList>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
       
      </TabContext>
    </div>
  );
}
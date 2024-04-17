import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider, createTheme } from "@mui/material";

export default function Tabs({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#007bff",
      },
    },
  });
  const styles = {
    color: "var(--white)",
    width: "100%",
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "inter",
    textTransform: "capitalize",
  };
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={styles} />
          <Tab label="List" value="list" sx={styles} />
        </TabList>
        <TabPanel value="grid">
          {coins.map((coin, index) => {
            return (
             <div key={index}>
              <img src={coin.image} alt={coin.name} />
               <p >
                {index + 1}.{coin.name}
              </p>
             </div>
            );
          })}
        </TabPanel>
        <TabPanel value="list">
        {coins.map((coin, index) => {
            return (
             <div key={index}>
              <img src={coin.image} alt={coin.name} />
               <p >
                {index + 1}.{coin.name}
              </p>
             </div>
            );
          })}
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{marginRight: "6px"}}>
      <Box >
        <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example"
            sx={{
                "& .MuiTab-root.Mui-selected": {
                    color: (theme) => theme.palette.button.hovertext,
                },
                "& .MuiTab-root": {
                    color: "(theme) => theme.palette.text.primary",
                    width: {xs: 60, sm: 75},
                    minWidth: {xs: 60, sm: 75},
                },
            }}
            TabIndicatorProps={{
                sx: {
                  backgroundColor: "transparent",
                  border: "1px solid #dd00ff",
                  borderRadius: "6px",
                  height: {xs: "20px", sm: "28px"},
                  margin: {xs: "0px 0px 14px 0px", sm: "0px 0px 10px 0px"},
                }
            }}
        >
          <Tab label="Events" /*{...a11yProps(0)}*/ />
          <Tab label="Spaces" /*{...a11yProps(1)}*/ />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel> */}
    </Box>
  );
}
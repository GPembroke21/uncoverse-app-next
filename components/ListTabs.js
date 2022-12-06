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
    <Box sx={{ width: '100%', mb: "-20px", mt: "-10px" }}>
      <Box sx={{padding: "1em"}}>
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
                },
            }}
            TabIndicatorProps={{
                sx: {
                  backgroundColor: (theme) => theme.palette.button.hovertext,
                }
            }}
        >
          <Tab label="Events" /*{...a11yProps(0)}*/ />
          <Tab label="Spaces" /*{...a11yProps(1)}*/ />
        </Tabs>
        <Divider/>
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
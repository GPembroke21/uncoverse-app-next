import React from 'react'
import { useState } from 'react'
import { styled } from "@mui/system"
import { useAnalyticsContext } from '../components/ContextProvider'
import Chart from '../components/Chart'
import ChartTable from '../components/ChartTable'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

const Wrapper = styled(Grid)(({ theme }) => ({ height: "calc(100%)", flexDirection: "row", }));
const Content = styled(Grid)(({ theme }) => ({ padding: "1rem 1rem", flexDirection: "row", height: "100%", width: "100%", [theme.breakpoints.down("sm")]: { flexDirection: "column", "> div": { marginLeft: 0, marginRight: 0, }, }, }));

const TableCard = styled(Grid)(({ theme }) => ({
  // background: theme.palette.card.main,
  contain: "size",
  overflow: "scroll",
  border: "1px solid #2e2e2e",
  borderRadius: "10px",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  '&::-webkit-scrollbar': { display: 'none' },
  [theme.breakpoints.down("md")]: {
    contain: "none",
    marginBottom: "16px",
    overflow: "scroll",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    '&::-webkit-scrollbar': { display: 'none' },
    "> div": {
      height: 200,
      minHeight: "100%",
    },
  },
}));

const ChartCard = styled(Grid)(({ theme }) => ({
  border: "1px solid #2e2e2e",
  borderRadius: "10px",
  padding: "1rem 2rem",
  position: "relative",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem 1rem",
    width: "100%",
  },
}));

const ChartContainer = styled("div")(({ theme }) => ({
  position: "relative",
  height: "50vh",
  [theme.breakpoints.down("sm")]: {
    height: "25vh"
  },
  [theme.breakpoints.up("lg")]: {
    height: "450px"
  },
}));

const ChartHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const ChartHeaderLeft = styled("div")(({ theme }) => ({}));
const ChartHeaderRight = styled("div")(({ theme }) => ({ [theme.breakpoints.down("sm")]: { width: "100%", } }));
const DateButtons = styled(ButtonGroup)(({ theme }) => ({ '& .MuiButtonGroup-grouped:not(:last-of-type)': { borderColor: theme.palette.button.hover }, [theme.breakpoints.down("sm")]: { marginTop: "12px" }, }));
const DateButton = styled(Button)(({ theme }) => ({ fontSize: "clamp(8px, 1.2vw, 16px)", background: theme.palette.button.main, "&:hover": { color: theme.palette.button.hovertext, backgroundColor: theme.palette.button.hover }, }));
const ChartSubtitle = styled("div")(({ theme }) => ({ color: "#8a919e", fontSize: "0.9rem", margin: "0 0 0.25rem 0" }));
const ChartTitle = styled("div")(({ theme }) => ({ fontSize: "1rem", fontWeight: "700", color: theme.palette.button.text }));


function GetDates(startDate, daysToAdd) {
  var aryDates = [];

  for (var i = 0; i <= daysToAdd; i++) {
    var currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);
    aryDates.push(DayAsString(currentDate.getDay())
      // + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear()
    );
  }

  return aryDates;
}

function MonthAsString(monthIndex) {
  var d = new Date();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  return month[monthIndex];
}

function DayAsString(dayIndex) {
  var weekdays = new Array(7);
  weekdays[0] = "Sun";
  weekdays[1] = "Mon";
  weekdays[2] = "Tues";
  weekdays[3] = "Wed";
  weekdays[4] = "Thurs";
  weekdays[5] = "Fri";
  weekdays[6] = "Sat";

  return weekdays[dayIndex];
}

var startDate = new Date();
var aryDates = GetDates(startDate, 7);

//X axis modifiers
// const weekLabels = [aryDates]
// const monthLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
// // const yearLabels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
// const yearLabels = ['12/01', '12/02', '12/03', '12/04', '12/05', '12/06', '12/07', '12/08', '12/09', '12/10', '12/11', '12/12', '12/13', '12/14', '12/15', '12/16', '12/17', '12/18', '12/19', '12/20', '12/21', '12/22', '12/23', '12/24', '12/25', '12/26', '12/27', '12/28', '12/29', '12/30', '12/31', '01/01', '01/02', '01/03', '01/04', '01/05', '01/06', '01/07', '01/08', '01/09', '01/10', '01/11',
//   '01/12', '01/13', '01/14', '01/15', '01/16', '01/17', '01/18', '01/19', '01/20', '01/21', '01/22', '01/23', '01/24', '01/25', '01/26', '01/27', '01/28', '01/29', '01/30', '01/31', '02/01', '02/02', '02/03', '02/04', '02/05', '02/06', '02/07', '02/08', '02/09', '02/10', '02/11', '02/12', '02/13', '02/14', '02/15', '02/16', '02/17', '02/18', '02/19', '02/20', '02/21', '02/22', '02/23', '02/24', '02/25', '02/26', '02/27', '02/28', '03/01', '03/02', '03/03', '03/04', '03/05', '03/06', '03/07', '03/08', '03/09', '03/10', '03/11', '03/12', '03/13', '03/14', '03/15', '03/16', '03/17', '03/18', '03/19', '03/20', '03/21', '03/22', '03/23', '03/24', '03/25', '03/26', '03/27', '03/28', '03/29', '03/30', '03/31', '04/01', '04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04/08', '04/09', '04/10', '04/11', '04/12', '04/13', '04/14', '04/15', '04/16', '04/17', '04/18', '04/19', '04/20', '04/21',
//   '04/22', '04/23', '04/24', '04/25', '04/26', '04/27', '04/28', '04/29', '04/30', '05/01', '05/02', '05/03', '05/04', '05/05', '05/06', '05/07', '05/08', '05/09', '05/10', '05/11', '05/12', '05/13', '05/14', '05/15', '05/16', '05/17', '05/18', '05/19', '05/20', '05/21', '05/22', '05/23', '05/24', '05/25', '05/26', '05/27', '05/28', '05/29', '05/30', '05/31', '06/01', '06/02', '06/03', '06/04', '06/05', '06/06', '06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13', '06/14', '06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21', '06/22', '06/23', '06/24', '06/25', '06/26', '06/27', '06/28', '06/29', '06/30', '07/01', '07/02', '07/03', '07/04', '07/05', '07/06', '07/07', '07/08', '07/09', '07/10', '07/11', '07/12', '07/13', '07/14', '07/15', '07/16', '07/17', '07/18', '07/19', '07/20', '07/21', '07/22', '07/23', '07/24', '07/25', '07/26', '07/27', '07/28', '07/29', '07/30', '07/31', '08/01', '08/02',
//   '08/03', '08/04', '08/05', '08/06', '08/07', '08/08', '08/09', '08/10', '08/11', '08/12', '08/13', '08/14', '08/15', '08/16', '08/17', '08/18', '08/19', '08/20', '08/21', '08/22', '08/23', '08/24', '08/25', '08/26', '08/27', '08/28', '08/29', '08/30', '08/31', '09/01', '09/02', '09/03', '09/04', '09/05', '09/06', '09/07', '09/08', '09/09', '09/10', '09/11', '09/12', '09/13', '09/14', '09/15', '09/16', '09/17', '09/18', '09/19', '09/20', '09/21', '09/22', '09/23', '09/24', '09/25', '09/26', '09/27', '09/28', '09/29', '09/30', '10/01', '10/02', '10/03', '10/04', '10/05', '10/06', '10/07', '10/08', '10/09', '10/10', '10/11', '10/12', '10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19', '10/20', '10/21', '10/22', '10/23', '10/24', '10/25', '10/26', '10/27', '10/28', '10/29', '10/30', '10/31', '11/01', '11/02', '11/03', '11/04', '11/05', '11/06', '11/07', '11/08', '11/09', '11/10', '11/11', '11/12', '11/13',
//   '11/14', '11/15', '11/16', '11/17', '11/18', '11/19', '11/20', '11/21', '11/22', '11/23', '11/24', '11/25', '11/26', '11/27', '11/28', '11/29', '11/30', '12/01']

export default function Index(props) {
  const analyticsContext = useAnalyticsContext().data
  const defaultChart = { showArray: ["DCLD", "SAND"], timeFrame: 7 }
  const [activeData, setActiveData] = useState(defaultChart)

  const buttonColorVar = time => time === activeData.timeFrame ? '#dd00ff' : 'white'
  const handleTimeButtonClick = time => setActiveData({ ...activeData, timeFrame: time })
  const handleSelect = info => setActiveData({ ...activeData, showArray: info })

  const dataRows = []
  if (!analyticsContext) return 
  for (let i = 0; i < analyticsContext.length; i++) {
    dataRows.push({
      id: analyticsContext[i].id,
      name: analyticsContext[i].name,
      users: parseInt(JSON.parse(analyticsContext[i].data)[0].y),
      events: Math.floor(Math.random() * (20 - 1 + 1)) + 1,
      color: analyticsContext[i].color,
    })
  }
  dataRows.sort((a, b) => a.users > b.users ? -1 : 1)

  return (
    <Wrapper>
      <Content container>
        <TableCard item xs={12} sm={12} md={4}>
          <ChartTable dataRows={dataRows} handleSelect={handleSelect} activeData={activeData} />
        </TableCard>
        <Grid item xs={0} sm={0} md={0.25} />
        <ChartCard item xs={12} sm={12} md={7.75}>
          <ChartHeader>
            <ChartHeaderLeft>
              <ChartTitle onClick={() => console.log(dataRows)}>Daily Active Users (DAU)</ChartTitle>
              {/* <ChartSubtitle>Daily Active Users</ChartSubtitle> */}
            </ChartHeaderLeft>
            <ChartHeaderRight>
              <DateButtons variant="contained" aria-label="outlined primary button group" fullWidth>
                <DateButton onClick={() => handleTimeButtonClick(7)} style={{ color: buttonColorVar(7) }}>Week</DateButton>
                <DateButton onClick={() => handleTimeButtonClick(30)} style={{ color: buttonColorVar(30) }}>Month</DateButton>
                <DateButton onClick={() => handleTimeButtonClick(365)} style={{ color: buttonColorVar(365) }}>Year</DateButton>
                <DateButton onClick={() => handleTimeButtonClick(730)} style={{ color: buttonColorVar(730) }}>All</DateButton>
              </DateButtons>
            </ChartHeaderRight>
          </ChartHeader>
          <ChartContainer style={{ position: "relative" }}>
            <Chart
              dataArray={analyticsContext}
              activeData={activeData}
            />
          </ChartContainer>
        </ChartCard>
      </Content>
    </Wrapper>
  )
}

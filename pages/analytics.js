import { styled } from "@mui/system"
import Chart from '../components/Chart'
import ChartBottom from '../components/ChartBottom'
import ChartTable from '../components/ChartTable'
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Wrapper = styled("div")(({ theme }) => ({ 
    position: "relative", 
    height: "calc(100%)", 
    width: "100%",
}));

const Content = styled("div")(({ theme }) => ({
  width: "100%",
//   maxWidth: "1000px",
  padding: "1rem 1rem",
}));

const ChartContainer = styled("div")(({ theme }) => ({
  border: "1px solid #2e2e2e",
  borderRadius: "10px",
  padding: "1rem 2rem",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem 1rem"
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

const ChartHeaderLeft = styled("div")(({ theme }) => ({
}));

const ChartHeaderRight = styled("div")(({ theme }) => ({
        [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));

const DateButtons = styled(ButtonGroup)(({ theme }) => ({
    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
        borderColor: theme.palette.button.hover
      },
    [theme.breakpoints.down("sm")]: {
        marginTop: "12px"
    },
}));

const DateButton = styled(Button)(({ theme }) => ({
    fontSize: "clamp(8px, 1.5vw, 24px)", 
    background: theme.palette.button.main,
    "&:hover": {
        color: theme.palette.button.hovertext,
        backgroundColor: theme.palette.button.hover
    },
}));

const ChartSubtitle = styled("div")(({ theme }) => ({
  color: "#8a919e",
  fontSize: "0.9rem",
  margin: "0 0 0.25rem 0",
}));

const ChartTitle = styled("div")(({ theme }) => ({
  fontSize: "1.8rem",
  fontWeight: "700",
  color: theme.palette.button.text,
}));

const labels = [
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
]

const data = [65, 59, 80, 81, 56, 72, 45, 67, 55, 42]
// const data= [{
//   x: '2021-11-06 23:39:30',
//   y: 50
// }, {
//   x: '2021-11-07 01:00:28',
//   y: 60
// }, {
//   x: '2021-11-07 09:00:28',
//   y: 20
// }]

export default function Index(props) {
  return (
<Wrapper>
        <Content>
            <ChartTable/>
            <ChartContainer>
                <ChartHeader>
                    <ChartHeaderLeft>
                        <ChartTitle>Decentraland</ChartTitle>
                        <ChartSubtitle>Daily Active Users</ChartSubtitle>
                    </ChartHeaderLeft>
                    <ChartHeaderRight>
                        <DateButtons variant="contained" aria-label="outlined primary button group" fullWidth>
                            <DateButton>Day</DateButton>
                            <DateButton>Week</DateButton>
                            <DateButton>Month</DateButton>
                            <DateButton>Year</DateButton>
                            <DateButton>All</DateButton>
                        </DateButtons>
                    </ChartHeaderRight>
                </ChartHeader>
                <Chart labels={labels} data={data}/>
                {/* <ChartBottom/> */}
            </ChartContainer>
        </Content>
    </Wrapper>
  )
}

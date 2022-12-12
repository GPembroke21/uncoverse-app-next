import React from 'react'
import { useState } from 'react'
import { styled } from "@mui/system"
import Chart from '../components/Chart'
import ChartBottom from '../components/ChartBottom'
import ChartTable from '../components/ChartTable'
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

const weekLabels = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun']
const weekData = [65, 59, 80, 81, 56, 72, 45]

const monthLabels = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
const monthData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

const yearLabels = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec']
const yearData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Index(props) {
  const [labels, setLabels] = useState(weekLabels)
  const [data, setData] = useState(weekData)
  const [buttonColorWeek, setButtonColorWeek] = useState('#dd00ff')
  const [buttonColorMonth, setButtonColorMonth] = useState('white')
  const [buttonColorYear, setButtonColorYear] = useState('white')

  const handleClickWeek = () => {
      setLabels(weekLabels)
      setData(weekData)
      setButtonColorWeek("#dd00ff")
      setButtonColorMonth("white")
      setButtonColorYear("white")
  }

  const handleClickMonth = () => {
    setLabels(monthLabels)
    setData(monthData)
    setButtonColorWeek("white")
    setButtonColorMonth("#dd00ff")
    setButtonColorYear("white")
  }

  const handleClickYear = () => {
    setLabels(yearLabels)
    setData(yearData)
    setButtonColorWeek("white")
    setButtonColorMonth("white")
    setButtonColorYear("#dd00ff")
  }

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
                            <DateButton onClick={handleClickWeek} style= {{ color: buttonColorWeek }}>Week</DateButton>
                            <DateButton onClick={handleClickMonth} style= {{ color: buttonColorMonth }}>Month</DateButton>
                            <DateButton onClick={handleClickYear} style= {{ color: buttonColorYear }}>Year</DateButton>
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

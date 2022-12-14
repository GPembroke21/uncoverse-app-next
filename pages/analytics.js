import React from 'react'
import { useState } from 'react'
import { styled } from "@mui/system"
import Chart from '../components/Chart'
import ChartBottom from '../components/ChartBottom'
import ChartTable from '../components/ChartTable'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

//styles
const Wrapper = styled("div")(({ theme }) => ({ 
    position: "relative", 
    height: "calc(100%)", 
    width: "100%",
}));

const Content = styled("div")(({ theme }) => ({
  width: "100%",
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

//X axis modifiers
const weekLabels = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun']
const monthLabels = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
const yearLabels = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec']

//Decentraland data
const decentralandWeekData = [65, 59, 80, 81, 56, 72, 45]
const decentralandMonthData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const decentralandYearData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

//Sandbox data
const sandboxWeekData = [60, 50, 70, 60, 40, 30, 45]
const sandboxMonthData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const sandboxYearData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

//Somnium data
const somniumWeekData = [55, 49, 30, 21, 16, 52, 45]
const somniumMonthData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const somniumYearData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

//Voxels data
const voxelsWeekData = [65, 59, 40, 31, 16, 22, 45]
const voxelsMonthData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const voxelsYearData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]



export default function Index(props) {
  const [labels, setLabels] = useState(weekLabels)
  const [decentralandData, setDecentralandData] = useState(decentralandWeekData)
  const [sandboxData, setSandboxData] = useState(sandboxWeekData)
  const [somniumData, setSomniumData] = useState(somniumWeekData)
  const [voxelsData, setVoxelsData] = useState(voxelsWeekData)
  const [buttonColorWeek, setButtonColorWeek] = useState('#dd00ff')
  const [buttonColorMonth, setButtonColorMonth] = useState('white')
  const [buttonColorYear, setButtonColorYear] = useState('white')
  const allSets = [decentralandData, sandboxData, somniumData, voxelsData]
  const [dataArray, setDataArray] = useState(allSets)

  //X axis modifier buttons
  const handleClickWeek = () => {
      setLabels(weekLabels)
      setDecentralandData(decentralandWeekData)
      setSandboxData(sandboxWeekData)
      setSomniumData(somniumWeekData)
      setVoxelsData(voxelsWeekData)
      setButtonColorWeek("#dd00ff")
      setButtonColorMonth("white")
      setButtonColorYear("white")
  }

  const handleClickMonth = () => {
    setLabels(monthLabels)
    setDecentralandData(decentralandMonthData)
    setSandboxData(sandboxMonthData)
    setSomniumData(somniumMonthData)
    setVoxelsData(voxelsMonthData)
    setButtonColorWeek("white")
    setButtonColorMonth("#dd00ff")
    setButtonColorYear("white")
  }

  const handleClickYear = () => {
    setLabels(yearLabels)
    setDecentralandData(decentralandYearData)
    setSandboxData(sandboxYearData)
    setSomniumData(somniumYearData)
    setVoxelsData(voxelsYearData)
    setButtonColorWeek("white")
    setButtonColorMonth("white")
    setButtonColorYear("#dd00ff")
  }

  const handleSelect = info => {
    console.log(allSets[info])
    setDataArray([allSets[info]])
  }


  return (
    <Wrapper>
        <Content>
            <ChartTable handleSelect={handleSelect}/>
            <ChartContainer>
                <ChartHeader>
                    <ChartHeaderLeft>
                        <ChartTitle onClick={() => console.log(dataArray)}>Daily Active Users (DAU)</ChartTitle>
                        {/* <ChartSubtitle>Daily Active Users</ChartSubtitle> */}
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
                <Chart 
                  labels={labels} 
                  dataArray={dataArray}
                  decentralandData={decentralandData}
                  sandboxData={sandboxData}
                  somniumData={somniumData}
                  voxelsData={voxelsData}
                />
                {/* <ChartBottom/> */}
            </ChartContainer>
        </Content>
    </Wrapper>
  )
}

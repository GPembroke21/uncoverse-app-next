// import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const data = (labelsVar, decentralandDataVar, sandboxDataVar, somniumDataVar, voxelsDataVar) => { return {
  labels: labelsVar,
  datasets: [
    {
      label: "Decentraland",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#dd00ff",
      borderColor: "#dd00ff",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#dd00ff',
      pointBackgroundColor: '#dd00ff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#dd00ff',
      pointHoverBorderColor: '#dd00ff',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: decentralandDataVar,
    },
    {
      label: "Sandbox",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "red",
      borderColor: "red",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#dd00ff',
      pointBackgroundColor: '#dd00ff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#dd00ff',
      pointHoverBorderColor: '#dd00ff',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: sandboxDataVar,
    },
    {
      label: "Somnium",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#dd00ff',
      pointBackgroundColor: '#dd00ff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#dd00ff',
      pointHoverBorderColor: '#dd00ff',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: somniumDataVar,
    },
    {
      label: "Voxels",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "green",
      borderColor: "green",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#dd00ff',
      pointBackgroundColor: '#dd00ff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#dd00ff',
      pointHoverBorderColor: '#dd00ff',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: voxelsDataVar,
    },
  ],
}}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 25,
        color: 'white'
      }
    },
  },
  scales: {
    y: {
        grid: {
        color: "transparent",
        },
    },
    x: {
        grid: {
        color: "transparent",
        },
    },
  },
}

const BalanceChart = (props) => {
  return (
      <Line data={data(props.labels, props.decentralandData, props.sandboxData, props.somniumData, props.voxelsData )} options={options} width={400} height={150} />
  )
}

export default BalanceChart

// const Wrapper = styled.div``
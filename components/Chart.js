// import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const data = (labelsVar, dataVar) => { return {
  labels: labelsVar,
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#dd00ff',
      borderColor: '#dd00ff',
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
      data: dataVar,
    },
  ],
}}

const options = {
//   maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
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
      <Line data={data(props.labels, props.data)} options={options} width={400} height={150} />
  )
}

export default BalanceChart

// const Wrapper = styled.div``
// import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const data = {
  labels: [
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
  ],
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
      data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
    },
  ],
}

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

const BalanceChart = () => {
  return (
      <Line data={data} options={options} width={400} height={150} />
  )
}

export default BalanceChart

// const Wrapper = styled.div``
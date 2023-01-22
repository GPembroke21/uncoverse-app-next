// import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
// import Chart from 'chart.js/auto'
import 'chartjs-adapter-moment';


const data = dataProps => {
  if (!dataProps.dataArray) return
  const timeFrame = dataProps.activeData.timeFrame
  const datasetsArray = []
  for (let i = 0; i < dataProps.dataArray.length; i++) {
    if (!dataProps.activeData.showArray.includes(dataProps.dataArray[i].id)) continue
    const dataset = JSON.parse(dataProps.dataArray[i].data)
    datasetsArray.push(
      {
        label: dataProps.dataArray[i].name,
        fill: false,
        lineTension: 0.1,
        backgroundColor: dataProps.dataArray[i].color,
        borderColor: dataProps.dataArray[i].color,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: dataProps.dataArray[i].color,
        pointBackgroundColor: dataProps.dataArray[i].color,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#dd00ff',
        pointHoverBorderColor: '#dd00ff',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataset.slice(0, Math.min(timeFrame, dataset.length)),
      }
    )
  }

  return {
    // labels: dataProps.labels,
    datasets: datasetsArray,
  }
}

const options = dataProps => {
  const xAxisTimeLabels = time => {
    if (time === 7) {
     return { parser: 'YY-MM-DD', tooltipFormat:'DD-MMM-YYYY', unit: 'day', displayFormats: { day: 'DD-MMM' } }
    } else if (time === 30 ) {
      return { parser: 'YY-MM-DD', tooltipFormat:'DD-MMM-YYYY', unit: 'week', displayFormats: { week: 'DD-MMM-YY' } }
    } else {
      return { parser: 'YY-MM-DD', tooltipFormat:'DD-MMM-YYYY', unit: 'month', displayFormats: { month: 'MMM-YYYY' } }
    } 
  }

  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        onClick: null,
        display: true,
        position: 'bottom',
        labels: { boxWidth: 25, color: 'white' }
      },
    },
    scales: {
      y:
      {
        grid: {
          color: 'transparent',
        },
      },
      x: {
        type: 'time',
        time: xAxisTimeLabels(dataProps.activeData.timeFrame),
        grid: {
          color: 'transparent',
        },
        // reverse: true,
      },

    },
  }
}

const BalanceChart = (props) => {
  if (!props.dataArray) return

  return (
    <Line data={data(props)} options={options(props)} />
  )
}

export default BalanceChart
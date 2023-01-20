// import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

// activeData = {showAll: true, showArray: [], timeFrame: 7}

const tableFormats = {
  'Arcade Land': '#00FEFE',
  'Axie Infinity': 'green',
  'Decentraland': '#dd00ff',
  'Fluf World': 'green',
  'Netvrk': 'green',
  'NFT Worlds': 'green',
  'Otherdeed for Otherside': 'green',
  'Somnium': 'white',
  'Superworld AR': 'green',
  'The Sandbox': 'blue',
  'Treeverse': 'green',
  'Voxels': 'grey',
  'Worldwide Webb Land': 'green',

}

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
  const aXisScale = dataProps.activeData.timeFrame == 366 ? [
    {
      type: 'time',
      time: {
        unit: 'month',
        displayFormats: {
          month: 'MMM YYYY'
        },
        minUnit: 'day',
        maxUnit: 'day',
        sourceFormat: 'MM/DD'
      },
    }
  ] : []

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
        // type: 'time',
        // time: {
        //   unit: 'month'
        //   //   displayFormats: {
        //   //     month: 'MMM YYYY'
        //   // },
        //   //   minUnit: 'day',
        //   //   maxUnit: 'day',
        //   //   sourceFormat: 'MM/DD'
        // },
        grid: {
          color: 'transparent',
        },
        reverse: true,
      },

    },
  }
}

const BalanceChart = (props) => {
  if (!props.dataArray) return

  return (
    // <Line data={data(props.labels, props.decentralandData, props.sandboxData, props.somniumData, props.voxelsData )} options={options} width={400} height={150} />
    <Line data={data(props)} options={options(props)} />
  )
}

export default BalanceChart

// const Wrapper = styled.div``

// datasets: [
//   {
//     label: "Decentraland",
//     fill: false,
//     lineTension: 0.1,
//     backgroundColor: "#dd00ff",
//     borderColor: "#dd00ff",
//     borderCapStyle: 'butt',
//     borderDash: [],
//     borderDashOffset: 0.0,
//     borderJoinStyle: 'miter',
//     pointBorderColor: '#dd00ff',
//     pointBackgroundColor: '#dd00ff',
//     pointBorderWidth: 1,
//     pointHoverRadius: 5,
//     pointHoverBackgroundColor: '#dd00ff',
//     pointHoverBorderColor: '#dd00ff',
//     pointHoverBorderWidth: 2,
//     pointRadius: 1,
//     pointHitRadius: 10,
//     // data: [0.9, 0.5, 0.25, 0.4, 0.9, 0.7, 0.3],
//     data: dataProps.dataArray[2].data.slice(7),
//     // data: decentralandDataVar,
//   },
//   {
//     label: "Sandbox",
//     fill: false,
//     lineTension: 0.1,
//     backgroundColor: "red",
//     borderColor: "red",
//     borderCapStyle: 'butt',
//     borderDash: [],
//     borderDashOffset: 0.0,
//     borderJoinStyle: 'miter',
//     pointBorderColor: '#dd00ff',
//     pointBackgroundColor: '#dd00ff',
//     pointBorderWidth: 1,
//     pointHoverRadius: 5,
//     pointHoverBackgroundColor: '#dd00ff',
//     pointHoverBorderColor: '#dd00ff',
//     pointHoverBorderWidth: 2,
//     pointRadius: 1,
//     pointHitRadius: 10,
//     // data: [6, 5, 7, 6, 4, 3, 4],
//     data: dataProps.dataArray[9].data.slice(7),
//     // data: sandboxDataVar,
//   },
//   {
//     label: "Somnium",
//     fill: false,
//     lineTension: 0.1,
//     backgroundColor: "blue",
//     borderColor: "blue",
//     borderCapStyle: 'butt',
//     borderDash: [],
//     borderDashOffset: 0.0,
//     borderJoinStyle: 'miter',
//     pointBorderColor: '#dd00ff',
//     pointBackgroundColor: '#dd00ff',
//     pointBorderWidth: 1,
//     pointHoverRadius: 5,
//     pointHoverBackgroundColor: '#dd00ff',
//     pointHoverBorderColor: '#dd00ff',
//     pointHoverBorderWidth: 2,
//     pointRadius: 1,
//     pointHitRadius: 10,
//     // data: [20, 30, 10, 20, 4, 50, 50],
//     data: dataProps.dataArray[7].data.slice(7),
//     // data: somniumDataVar,
//   },
//   {
//     label: "Voxels",
//     fill: false,
//     lineTension: 0.1,
//     backgroundColor: "green",
//     borderColor: "green",
//     borderCapStyle: 'butt',
//     borderDash: [],
//     borderDashOffset: 0.0,
//     borderJoinStyle: 'miter',
//     pointBorderColor: '#dd00ff',
//     pointBackgroundColor: '#dd00ff',
//     pointBorderWidth: 1,
//     pointHoverRadius: 5,
//     pointHoverBackgroundColor: '#dd00ff',
//     pointHoverBorderColor: '#dd00ff',
//     pointHoverBorderWidth: 2,
//     pointRadius: 1,
//     pointHitRadius: 10,
//     // data: [60, 50, 70, 60, 40, 30, 45],
//     data: dataProps.dataArray[11].data.slice(7),
//     // data: voxelsDataVar,
//   },
// ],


// const labels = ['12/01', '12/02', '12/03', '12/04', '12/05', '12/06', '12/07', '12/08', '12/09', '12/10', '12/11', '12/12', '12/13', '12/14', '12/15', '12/16', '12/17', '12/18', '12/19', '12/20', '12/21', '12/22', '12/23', '12/24', '12/25', '12/26', '12/27', '12/28', '12/29', '12/30', '12/31', '01/01', '01/02', '01/03', '01/04', '01/05', '01/06', '01/07', '01/08', '01/09', '01/10', '01/11', '01/12', '01/13', '01/14', '01/15', '01/16', '01/17', '01/18', '01/19', '01/20', '01/21', '01/22', '01/23', '01/24', '01/25', '01/26', '01/27', '01/28', '01/29', '01/30']
// const data = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 2, 6, 1, 3, 4, 0, 0, 0, 0, 1, 0, 4, 1, 0, 0, 0, 0, 0, 5, 0, 0, 1, 0, 0, 4, 0, 0, 0, 2, 0, 4, 1, 3, 0, 4, 0, 2, 4, 1, 3, 0, 1]
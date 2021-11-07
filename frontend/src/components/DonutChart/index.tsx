import axios from "axios";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utilities/requests";

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    //FORMA ERRADA!
    let chartData : ChartData = { labels: [], series: []};

    //FORMA ERRADA!
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);
            chartData = { labels: myLabels, series: mySeries};
            console.log(response.data);
        })

//const mockData = {
        //series: [477138, 499928, 444867, 220426, 473088],
        //labels: ['Tony Stark', 'Steve Rogers', 'Clark Kent', 'Bruce Wayne', 'Nick Fury']
    //}
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={{...options, labels: chartData.labels}}
              series={chartData.series}
              type="donut"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }


export default DonutChart;
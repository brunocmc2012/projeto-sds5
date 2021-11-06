
import Chart from "react-apexcharts";

const DonutChart = () => {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Tony Stark', 'Steve Rogers', 'Clark Kent', 'Bruce Wayne', 'Nick Fury']
    }
    
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
              options={{...options, labels: mockData.labels}}
              series={mockData.series}
              type="donut"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }


export default DonutChart;
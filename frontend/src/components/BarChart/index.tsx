
import Chart from "react-apexcharts";

const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Vingadores', 'Liga da Justiça', 'Defensores', 'Guardiões', 'Agentes da Shield']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={{...options, xaxis: mockData.labels}}
              series={mockData.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }


export default BarChart;
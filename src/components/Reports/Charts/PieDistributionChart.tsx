import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

interface Props {}

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const PieDistributionChart = ({}) => {
  const data = {
    labels: ['Low', 'Medium', 'High', 'Urgent'],
    datasets: [
      {
        label: '# of Issues',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Issue Distributions',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieDistributionChart;

import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({
  excellent,
  satisfactory,
  needsImprovment,
  notTested,
}) => {
  const data = {
    labels: ['Excellent', 'Satisfactory', 'Needs Improvement', 'Not Tested'],
    datasets: [
      {
        label: 'Assessment Scores Class Percentage',
        data: [],
        backgroundColor: ['#125f7c', '#52abab', '#c0f3d5', '#ffb400'],
        borderColor: ['#1a2a2d', '#1a2a2d', '#1a2a2d', '#1a2a2d'],
        borderWidth: 1,
      },
    ],
  };

  data.datasets[0].data.push(excellent, satisfactory, needsImprovment, notTested);

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

DonutChart.propTypes = {
  excellent: PropTypes.any,
  satisfactory: PropTypes.any,
  needsImprovment: PropTypes.any,
  notTested: PropTypes.any,
};

export default DonutChart;

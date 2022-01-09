import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Excellent', 'Satisfactory', 'Needs Improvement', 'Not Tested'],
  datasets: [
    {
      label: 'Assessment Scores Class Percentage',
      data: [12, 19, 3, 5],
      backgroundColor: [
        '#125f7c',
        '#52abab',
        '#c0f3d5',
        '#ffb400',
      ],
      borderColor: [
        '#1a2a2d',
        '#1a2a2d',
        '#1a2a2d',
        '#1a2a2d',
      ],
      borderWidth: 1,
    },
  ],
};

const DonutChart = () => (
  <div>
    <Doughnut data={data} />
  </div>
);

export default DonutChart;

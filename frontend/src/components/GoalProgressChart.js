import React from 'react';
import { Bar } from 'react-chartjs-2';

const GoalProgressChart = ({ goals }) => {
  const data = {
    labels: goals.map(goal => goal.title),
    datasets: [{
      label: 'Goal Progress',
      data: goals.map(goal => goal.progress),
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    }],
  };

  return (
    <div className="goal-progress-chart">
      <Bar data={data} />
    </div>
  );
};

export default GoalProgressChart;

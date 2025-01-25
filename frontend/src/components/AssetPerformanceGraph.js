import React from 'react';
import { Line } from 'react-chartjs-2';

const AssetPerformanceGraph = ({ assets }) => {
  const data = {
    labels: assets.map(asset => asset.name),
    datasets: [{
      label: 'Asset Value Over Time',
      data: assets.map(asset => asset.value),
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    }],
  };

  return (
    <div className="asset-performance-graph">
      <Line data={data} />
    </div>
  );
};

export default AssetPerformanceGraph;

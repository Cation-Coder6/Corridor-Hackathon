import React from 'react';
import Plot from 'react-plotly.js';

function ConfusionMatrix({ data }) {
  // Prepare the data for Plotly.js
  const truePositive = data[0][0];
  const falsePositive = data[0][1];
  const falseNegative = data[1][0];
  const trueNegative = data[1][1];
  const xValues = ['Predicted Positive', 'Predicted Negative'];
  const yValues = ['Actual Positive', 'Actual Negative'];
  const zValues = [[truePositive, falsePositive], [falseNegative, trueNegative]];

  // Configuration options for Plotly.js
  const layout = {
    title: 'Confusion Matrix',
    xaxis: { title: 'Predicted Labels' },
    yaxis: { title: 'True Labels' },
  };

  return (
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          z: zValues,
          type: 'heatmap',
          colorscale: 'YlGnBu',
          reversescale: true,
        },
      ]}
      layout={layout}
    />
  );
}

export default ConfusionMatrix;

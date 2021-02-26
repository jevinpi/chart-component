import React from 'react';
import CommonChart from "../common";
import { IBaseChartProps } from '../base/index.interface';
function LineChart(props: IBaseChartProps) {
  const LineDefaultOptions = {
    type: 'line',
  };
  return <CommonChart {...props} defaultSeriesOptions={LineDefaultOptions} />;
}

export default LineChart;

/**
 * 基础散点图
 */
import React from 'react';
import CommonChart from "../common";
import { IBaseChartProps } from '../base/index.interface';
function ScatterChart(props: IBaseChartProps) {
  const ScatterDefaultOptions = {
    type: 'scatter',
    symbolSize: 10,
  };
  return <CommonChart {...props} defaultSeriesOptions={ScatterDefaultOptions} />;
}

export default ScatterChart;

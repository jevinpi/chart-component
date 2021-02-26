/**
 * 基础柱状图
 */
import React from 'react';
import CommonChart from "../common";
import { IBaseChartProps } from '../base/index.interface';
function BarChart(props: IBaseChartProps) {
  const BarDefaultOptions = {
    type: 'bar',
  };
  return <CommonChart {...props} defaultSeriesOptions={BarDefaultOptions} />;
}

export default BarChart;

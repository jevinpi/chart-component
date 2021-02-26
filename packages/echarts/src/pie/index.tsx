/**
 * 基础饼图
 */
import React from 'react';
import CommonChart from "../common";
import { IBaseChartProps } from '../base/index.interface';
function PieChart(props: IBaseChartProps) {
  const PieDefaultOptions = {
    type: 'pie',
    radius: '50%',
  };
  return <CommonChart {...props} defaultSeriesOptions={PieDefaultOptions} />;
}

export default PieChart;

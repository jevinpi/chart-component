/**
 * 基于BaseEchart再次扩展的组件,用于各个类型组件过度
 */
import React, { useEffect, useState } from 'react';
import BaseChart from '../base';
import _ from 'lodash';
import { IChartProps, IBaseChartProps } from '../base/index.interface';
import { EChartOption } from "echarts";

interface ICommonChartProps extends IBaseChartProps {
  defaultSeriesOptions?: any;
}

function CommonChart(props: ICommonChartProps) {
  const [CommonConfig, setCommonConfig]: [IChartProps, Function] = useState({});
  useEffect(() => {
    const { id, width, height, options, xAxis = [], xAxisType = 'category', yAxisType, defaultSeriesOptions = {} } = props;
    let data = props.data;
    if (!Array.isArray(data)) {
      data = [];
    }
    const seriesData: EChartOption.Series[] = data.reduce((item: EChartOption.Series[], value) => {
      // 通用只会配置name和data，其他的根据各类图表自行配置
      item.push({
        ...defaultSeriesOptions,
        name: value.name,
        data: value.data,
      });
      return item;
    }, []);
    const barOptions: EChartOption = {
      xAxis: {
        type: xAxisType,
        data: xAxis,
      },
      yAxis: {
        type: yAxisType,
      },
      series: seriesData,
    };
    // 之所以用assignIn不用merge是组件设置的options权限高于默认设置
    const assignOptions = _.assignIn(barOptions, options);
    const config = {
      id,
      width,
      height,
      options: assignOptions,
    };
    setCommonConfig(config);
  }, []);
  return <BaseChart {...CommonConfig} />;
}

export default CommonChart;

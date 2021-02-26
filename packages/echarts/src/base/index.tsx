import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts/types/dist/echarts';
import { getUid } from "../../utils";
import _ from 'lodash';
import { IChartProps } from "./index.interface";

function BaseChart({ id, width, height, options }: IChartProps) {
  // 图表的id
  const [chartId, setCHartId]: [string, Function] = useState('');
  // echart实例
  const [echartInstance, setEchartInstance]: [any, Function] = useState(null);
  /**
   * 设置图表id
   */
  useEffect(() => {
    const newId: string = id || getUid();
    setCHartId(newId);
  }, []);
  /**
   * 实例化Echarts图表
   */
  useEffect(() => {
    const dom: HTMLElement | null = document.getElementById(chartId);
    const echartsRef = echarts.init(dom as HTMLDivElement | HTMLCanvasElement);
    setEchartInstance(echartsRef);
    return () => {
      echartsRef.dispose();
    };
  }, [id]);
  /**
   * 更新图表
   */
  useEffect(() => {
    // 默认属性
    const defaultOptions: EChartsOption = {
      grid: {
        bottom: '1%',
        backgroundColor: 'red',
        containLabel: true,
      },
    };
    // 合并组件设置的属性
    const assignOptions = _.merge({}, defaultOptions, options);
    echartInstance &&
    echartInstance.resize({
      width: 'auto',
      height: 'auto',
    });
    // 更新图表
    echartInstance && echartInstance.setOption(assignOptions);
  }, [echartInstance, width, height, options]);
  return (
    <div
      id={id}
      className="chart-common-inner"
      style={{
        width: `${width ? `${width}px` : '100%'}`,
        height: `${height ? `${height}px` : '100%'}`,
      }}
    ></div>
  );
}

export default BaseChart;

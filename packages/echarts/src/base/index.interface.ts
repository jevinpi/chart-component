import { EChartOption, EChartsResponsiveOption } from "echarts";

/**
 * 组件的prop属性
 */
export interface IChartProps {
  id?: string;
  width?: number;
  height?: number;
  options?: EChartOption | EChartsResponsiveOption;
}

export type OptionAxisType = "value" | "category" | "time" | "log";

export interface IBaseChartProps extends IChartProps {
  // x轴的数据
  xAxis?: (string | number)[];
  // x轴数据类型
  xAxisType?: OptionAxisType;
  // y轴数据类型
  yAxisType?: OptionAxisType;
  // 是否显示图例
  showLegend?: boolean;
  // 数据
  data?: {
    name: string;
    data: (number | string)[];
  }[];
}

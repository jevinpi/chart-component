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
export declare type OptionAxisType = "value" | "category" | "time" | "log";
export interface IBaseChartProps extends IChartProps {
    xAxis?: (string | number)[];
    xAxisType?: OptionAxisType;
    yAxisType?: OptionAxisType;
    showLegend?: boolean;
    data?: {
        name: string;
        data: (number | string)[];
    }[];
}

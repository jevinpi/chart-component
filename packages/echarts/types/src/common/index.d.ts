/// <reference types="react" />
import { IBaseChartProps } from '../base/index.interface';
interface ICommonChartProps extends IBaseChartProps {
    defaultSeriesOptions?: any;
}
declare function CommonChart(props: ICommonChartProps): JSX.Element;
export default CommonChart;

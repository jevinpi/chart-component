import defaultConfig from '../../rollup.config';

export default {
  ...defaultConfig,
  external: ["@types/echarts", "@types/lodash", "@types/react", "echarts", "lodash", "react", "react-dom"]
}

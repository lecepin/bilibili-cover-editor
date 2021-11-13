import Setters from "./../../PropSetters";
import view from "./designView";

export default {
  title: "页面",
  componentName: "Page",
  category: "系统",
  icon: (
    <svg
      t="1628583874677"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2747"
      width="200"
      height="200"
    >
      <path
        d="M828.82323947 943.29709333l-630.02916054 0c-51.631392 0-93.65298347-42.02159147-93.65298346-93.65298346l0-698.14042027c0-51.631392 42.02159147-93.65298347 93.65298346-93.65298347l630.02916054 0c51.631392 0 93.65298347 42.02159147 93.65298346 93.65298347l0 698.14042027C922.47622293 901.27550187 880.45463147 943.29709333 828.82323947 943.29709333zM198.79408 108.93415147c-23.47982933 0-42.56953813 19.0897088-42.56953813 42.56953813l0 698.14042027c0 23.47982933 19.0897088 42.56953813 42.56953813 42.56953813l630.02916053 0c23.47982933 0 42.56953813-19.0897088 42.56953814-42.56953813l0-698.14042027c0-23.47982933-19.0897088-42.56953813-42.56953814-42.56953813L198.79408 108.93415147z"
        p-id="2748"
        fill="#2c2c2c"
      ></path>
      <path
        d="M309.47487787 721.93549653l408.66756373 0 0 34.05562987-408.66756373 0 0-34.05562987Z"
        p-id="2749"
        fill="#2c2c2c"
      ></path>
      <path
        d="M309.47487787 381.3791936l408.66756373 0 0 34.05562987-408.66756373 0 0-34.05562987Z"
        p-id="2750"
        fill="#2c2c2c"
      ></path>
      <path
        d="M309.47487787 228.1288576l408.66756373 0 0 34.05562987-408.66756373 0 0-34.05562987Z"
        p-id="2751"
        fill="#2c2c2c"
      ></path>
      <path
        d="M309.47487787 551.65734507l408.66756373 0 0 34.05562986-408.66756373 0 0-34.05562986Z"
        p-id="2752"
        fill="#2c2c2c"
      ></path>
    </svg>
  ),
  view: view,
  canOperate: true,
  hidden: true,
  props: [
    {
      name: "didMount",
      title: "内容",
      description: "",
      supportVariable: true,
      initialValue: "页面加载完成时",
      setter: <Setters.TextSetter />,
      display: "none",
    },
    {
      name: "willUnMount",
      title: "内容",
      description: "",
      supportVariable: true,
      initialValue: "页面关闭时",
      setter: <Setters.TextSetter />,
      display: "none",
    },
  ],
};

import MapView from "MapView";
// 为组件添加 install 方法，用于按需引入
MapView.install = function (Vue) {
  Vue.component(MapView.name, MapView)
}
export default MapView;

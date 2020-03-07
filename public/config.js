(function () {
  window.domainUrl = 'https://map.xianjiaojing.com';
  window.accessToken = '18f589098bf14f5bac790331c60a37ae';
  window.solution = 3492;

  window.mapInitOptions = {
    container: 'map',
    style:  domainUrl + '/service/solu/style/id/' + solution,
    center: [108.947368, 34.288634],
    zoom: 11,
    pitch: 0,
    maxZoom: 17, //地图最大缩放级别限制
    minZoom: 8, //地图最小缩放级别限制
    logoControl: false //logo是否显示
  };
})();


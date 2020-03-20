<template>
  <div id="app">
    <MapView v-bind="mapConfig" @completed="mapLoad"></MapView>
    <div class="left">
      <MapView
        v-for="(map, i) in mapList"
        :key="i"
        v-bind="map"
        @completed
        ="mapLoad"
        :height="260"
      >
      </MapView>
      <div><a href="/a.h"></a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    let domainUrl = 'https://map.xianjiaojing.com';
    return {
      mapList: [
        {
          accessToken: 'e919a6f32ce242f5aec22652d9dc1fdb',
          solution: '4287',
          options: {
            container: 'map1',
            style: '//minedata.cn/service/solu/style/id/4287',
            center: [116.1866179, 39.992559],
            zoom: 9,
            minZoom: 3,
            maxZoom: 17,
          },
        },
        {
          accessToken: 'e919a6f32ce242f5aec22652d9dc1fdb',
          solution: 7185,
          options: {
            container: 'map2',
            style: '//minedata.cn/service/solu/style/id/7185',
            center: [116.1866179, 39.992559],
            zoom: 9,
            minZoom: 3,
            maxZoom: 17,
          },
        },
      ],
      mapConfig: {
        accessToken: '18f589098bf14f5bac790331c60a37ae',
        solution: '3492',
        options: {
          container: 'map',
          style: domainUrl + '/service/solu/style/id/3492',
          center: [116.1866179, 39.992559],
          zoom: 9,
          minZoom: 3,
          maxZoom: 17,
          logoControl: true,
        },
        urls: {
          domainUrl: domainUrl,
          dataDomainUrl: domainUrl,
          serviceUrl: domainUrl + '/service',
        },
      },
    };
  },
  mounted() {},
  methods: {
    mapLoad() {},
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  top: 0;
  height: 100vh;
}

.left {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 300px;
}
</style>

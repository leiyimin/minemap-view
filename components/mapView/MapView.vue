<template>
  <div class="map" ref="map" :style="s">
    <div
      v-if="loaded === false && errMsg == null"
      class="d-mid d-loading"
      :style="sf"
    >
      <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
    </div>
    <div v-if="errMsg != null" class="d-mid d-err" :style="sfe">
      <label>{{ errMsg }}</label>
    </div>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css';

export default {
  name: 'MapView',
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    accessToken: {
      type: String,
      required: true,
    },
    solution: {
      type: [Number, String],
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    urls: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      map: null,
      loaded: false,
      errMsg: null,
    };
  },
  computed: {
    s() {
      let w = this.width == 0 ? '100%' : this.width + 'px';
      let h = this.height == 0 ? '100%' : this.height + 'px';
      return {
        width: w,
        height: h,
      };
    },
    sf() {
      let fz = this.height == 0 ? '5rem' : Math.round(this.height / 8) + 'px';
      return {
        'font-size': fz,
      };
    },
    sfe() {
      let fz = this.height == 0 ? '3rem' : Math.round(this.height / 12) + 'px';
      return {
        'font-size': fz,
      };
    },
    mapId() {
      if (this.options && this.options.container) {
        return this.options.container;
      }
      return 'map';
    },
  },
  mounted() {
    if (document.getElementById(this.mapId)) {
      this.errMsg = 'mapId已存在';
      return;
    }
    this.$refs.map.id = this.mapId;
    this.initMap();
  },
  methods: {
    initMap() {
      const mineMap = window.minemap;
      if (!mineMap) {
        this.errMsg = 'minemap库没有加载';
        return;
      }
      if (!this.accessToken || !this.solution) {
        this.errMsg = '地图配置信息缺失';
        return;
      }
      if (!this.options) {
        this.errMsg = '地图初始化信息缺失';
        return;
      }
      mineMap.accessToken = this.accessToken;
      mineMap.solution = this.solution;
      if (this.urls) {
        for (let key in this.urls) {
          if (this.urls[key]) mineMap[key] = this.urls[key];
        }
      }
      if (!this.options.container) {
        this.options.container = this.mapId;
      }
      if (this.options.logoControl === undefined) {
        this.options.logoControl = false;
      }
      this.map = new mineMap.Map(this.options);
      //地图加载完成事件
      let that = this;
      this.map.on('load', function() {
        // console.log("map '" + this.options.container + "' is loaded.");
        that.loaded = true;
        that.$emit('completed', that.map);
      });
    },
  },
  beforeDestroy() {
    if (this.map) this.map.remove();
  },
};
</script>

<style>
.map > .d-mid {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.map > .d-loading {
  color: rgb(26, 84, 255);
  background-color: rgba(0, 0, 0, 0.18);
}

.map > .d-err {
  color: red;
  background-color: white;
}
</style>

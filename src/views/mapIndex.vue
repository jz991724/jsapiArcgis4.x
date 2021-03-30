<template>
  <div id="viewDiv"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

@Component({ name: 'MapIndex' })
export default class MapIndex extends Vue {
  view: MapView | undefined;

  mounted() {
    const map = new Map({
      basemap: 'satellite',
    });

    this.view = new MapView({
      container: 'viewDiv',
      map,
      zoom: 4,
      center: [15, 65], // longitude, latitude
    });
  }
}
</script>

<style scoped lang="less">
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>

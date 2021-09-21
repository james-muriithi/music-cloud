<template>
  <div id="app">
    <v-app>
      <app-bar />
      <side-nav />
      <v-main>
        <router-view />
        <bottom-player />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import BottomPlayer from './components/player/BottomPlayer.vue';
export default {
  components: { BottomPlayer },
  name: "App",
  data() {
    return {
      isLoading: false
    }
  },
};
</script>

<style lang="scss">
::-webkit-scrollbar {
    width: 11px;
  }

  ::-webkit-scrollbar-track {
    background: #202020;
    border-left: 1px solid #2c2c2c;
  }

  ::-webkit-scrollbar-thumb {
    background: #3e3e3e;
    border: solid 2px #202020;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
  }
  
.theme--dark.v-application {
  background: var(--v-background-base) !important;
  ::-webkit-scrollbar {
    width: 11px;
  }

  ::-webkit-scrollbar-track {
    background: #202020;
    border-left: 1px solid #2c2c2c;
  }

  ::-webkit-scrollbar-thumb {
    background: #3e3e3e;
    border: solid 2px #202020;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
  }
}

.theme--light.v-application {
  ::-webkit-scrollbar-track {
    background: #e6e6e6;
    border-left: 1px solid #dadada;
  }

  ::-webkit-scrollbar {
    width: 11px;
  }

  ::-webkit-scrollbar-thumb {
    background: #b0b0b0;
    border: solid 2px #e6e6e6;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4c4c4d;
  }
}
.w-100{
  width: 100%;
}
.align-items-center{
  align-items: center;
}
</style>
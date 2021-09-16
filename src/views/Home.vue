<template>
  <v-container class="home px-5">
    <div class="text-h5 font-weight-bold">Top Albums</div>
    <div class="pt-5 albums">
      <v-row>
        <v-col sm="4" md="3">
          <router-link to="/" class="fill-height">
            <div class="album-card elevation-5" :style="albumCardStyle"></div>
          </router-link>
        </v-col>
        <v-col sm="4" md="3">
          <router-link to="/" class="fill-height">
            <div class="album-card elevation-2" :style="albumCardStyle2"></div>
          </router-link>
        </v-col>
        <v-col sm="4" md="3">
          <router-link to="/" class="fill-height">
            <div class="album-card elevation-2" :style="albumCardStyle3"></div>
          </router-link>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  computed: {
    albumCardStyle(){
      return {
        background: `url("https://i.scdn.co/image/ab67616d00001e02e9d11eb596a7a7e426d81635")`,
      }
    },
    albumCardStyle2(){
      return {
        background: `url("https://i.scdn.co/image/ab67616d00001e0241e31d6ea1d493dd77933ee5")`,
      }
    },
    albumCardStyle3(){
      return {
        background: `url("https://i.scdn.co/image/ab67616d00001e02c2bd783533a07368136793a8")`,
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.album-card {
  border-radius: 15px;
  background: var(--v-cardBackground-base);
  min-height: 250px;
}
</style>
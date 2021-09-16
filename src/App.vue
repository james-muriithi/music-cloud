<template>
  <div id="app">
    <v-app>
      <app-bar />
      <side-nav />
      <v-main>
            <v-container class="px-4 py-0 fill-height" fluid>
              <router-view/>
            </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
.theme--dark.v-application {
    background: var(--v-background-base) !important;
}
</style>
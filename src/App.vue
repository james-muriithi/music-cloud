<template>
  <div id="app">
    <v-app>
      <app-bar />
      <side-nav />
      <v-content>
            <v-container class="px-4 py-0 fill-height" fluid>
              <router-view/>
            </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<style>
.theme--dark.v-application {
    background: var(--v-background-base) !important;
}
</style>
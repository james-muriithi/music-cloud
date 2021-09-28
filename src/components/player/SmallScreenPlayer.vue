<template>
    <div class="text-center h-100">
    <v-bottom-sheet
      v-model="sheet"
      persistent
      class="h-100"
      fullscreen
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Persistent
        </v-btn>
      </template>
      <v-sheet
        class="text-center"
        height="100%"
      >
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the persistent prop
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
    name: "SmallScreenPlayer",
    data: () => ({
      sheet: true,
    }),
}
</script>
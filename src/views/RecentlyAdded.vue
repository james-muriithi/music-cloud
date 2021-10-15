<template>
  <v-container class="recent px-5">
    <v-row>
      <v-col cols="12" class="px-md-3 px-0">
        <div class="text-h5 font-weight-bold">Recent Songs</div>
        <div class="pa-md-2 pa-0 mt-3 songs elevation-0">
          <span v-if="isLoading">
            <song-skeleton v-for="n in limit" :key="n" />
          </span>
          <span class="" v-else>
            <song-card
              v-for="(song, index) in recentSongs"
              :key="song.id"
              :song="song"
              :index="index + 1"
            />

            <div class="text-center mt-5 pt-4">
              <v-btn
                outlined
                color="primary"
                :loading="loadMoreLoading"
                :disabled="loadMoreLoading"
                class="text-capitalize"
                @click="loadMore"
              >
                Load more
                <template v-slot:loader>
                  <span>Loading...</span>
                </template>
              </v-btn>
            </div>
          </span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import SongCard from "../components/songs/SongCard.vue";
import SongSkeleton from "../components/songs/SongSkeleton.vue";

export default {
  components: { SongCard, SongSkeleton },
  name: "RecentlyAdded",
  data() {
    return {
      isLoading: false,
      loadMoreLoading: false,
      loadMoreCount: 20,
      limit: 40,
    };
  },
  computed: {
    ...mapGetters(["recentSongs"]),
  },
  async beforeMount() {
    this.isLoading = true;
    await this.$store.dispatch("fetchBrowseData", { limit: this.limit });
    this.isLoading = false;
  },
  methods: {
    async loadMore() {
      this.loadMoreLoading = true;
      const newLimit = this.recentSongs.length + this.loadMoreCount;
      await this.$store.dispatch("fetchBrowseData", {
        limit: newLimit,
        forceUpdate: true,
      });
      this.loadMoreLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.recent {
  margin-bottom: 85px;
}
</style>
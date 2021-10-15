<template>
  <v-container class="recent px-5">
    <v-row>
      <v-col cols="12" class="px-md-3 px-0">
        <div class="text-h5 font-weight-bold">Top Playlists</div>
        <div class="pt-5 playlists">
          <v-row v-if="isLoading">
            <v-col
              cols="6"
              sm="4"
              md="3"
              lg="2"
              v-for="n in 2"
              :key="n"
              class="pr-0"
            >
              <album-skeleton />
            </v-col>
          </v-row>
          <div v-else>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="playlist in topPlaylists"
                :key="playlist.id"
              >
                <playlist-card :playlist="playlist" />
              </v-col>
            </v-row>
            <div class="text-center my-5 pt-4 w-100">
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
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import AlbumSkeleton from "../components/albums/AlbumSkeleton.vue";
import PlaylistCard from "../components/playlists/PlaylistCard.vue";

export default {
  components: { PlaylistCard, AlbumSkeleton },
  name: "TopPlaylists",
  data() {
    return {
      isLoading: false,
      loadMoreLoading: false,
      loadMoreCount: 8,
      limit: 12,
    };
  },
  computed: {
    ...mapGetters(["topPlaylists"]),
  },
  async beforeMount() {
    this.isLoading = true;
    await this.$store.dispatch("fetchBrowseData", {
      limit: this.limit,
      playlistLimit: this.limit,
    });
    this.isLoading = false;
  },
  methods: {
    async loadMore() {
      this.loadMoreLoading = true;
      const newLimit = this.topPlaylists.length + this.loadMoreCount;
      await this.$store.dispatch("fetchBrowseData", {
        limit: newLimit,
        forceUpdate: true,
        playlistLimit: newLimit,
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
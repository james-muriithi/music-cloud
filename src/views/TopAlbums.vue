<template>
  <v-container class="recent px-5">
    <v-row>
      <v-col cols="12" class="px-md-3 px-0">
        <div class="text-h5 font-weight-bold">Top Albums</div>
        <div class="pt-5 albums">
          <v-row v-if="isLoading">
            <v-col
              cols="6"
              sm="4"
              md="3"
              lg="2"
              v-for="n in limit"
              :key="n"
              class="pr-0"
            >
              <album-skeleton />
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col
              cols="6"
              sm="4"
              md="3"
              lg="2"
              v-for="album in topAlbums"
              :key="album.id"
              class="pr-0"
            >
              <album-card :album="album" />
            </v-col>

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
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import AlbumCard from "../components/albums/AlbumCard.vue";
import AlbumSkeleton from "../components/albums/AlbumSkeleton.vue";

export default {
  components: { AlbumSkeleton, AlbumCard },
  name: "TopAlbums",
  data() {
    return {
      isLoading: false,
      loadMoreLoading: false,
      loadMoreCount: 12,
      limit: 18,
    };
  },
  computed: {
    ...mapGetters(["topAlbums"]),
  },
  async beforeMount() {
    this.isLoading = true;
    await this.$store.dispatch("fetchBrowseData", { limit: this.limit, albumLimit: this.limit });
    this.isLoading = false;
  },
  methods: {
    async loadMore() {
      this.loadMoreLoading = true;
      const newLimit = this.topAlbums.length + this.loadMoreCount;
      await this.$store.dispatch("fetchBrowseData", {
        limit: newLimit,
        forceUpdate: true,
        albumLimit: newLimit
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
<template>
  <div class="song-card">
    <div class="d-flex">
      <div class="song-image">
        <v-skeleton-loader
          class="mx-auto w-100 fill-height"
          type="image"
        ></v-skeleton-loader>
      </div>
      <v-row class="song-details pl-3">
        <v-col cols="6" sm="5">
          <div class="song-title fill-width">
            <v-skeleton-loader
              class="w-100"
              type="text"
              max-width="150"
            ></v-skeleton-loader>
          </div>
          <div class="song-artist">
            <router-link to="#">
              <v-skeleton-loader
                class="w-100"
                type="text"
                width="50"
              ></v-skeleton-loader
            ></router-link>
          </div>
        </v-col>

        <v-col sm="3" md="3" class="text-center album d-none d-sm-flex">
          <router-link to="#">
            <v-skeleton-loader
              class="w-100"
              type="text"
              width="100"
            ></v-skeleton-loader
          ></router-link>
        </v-col>

        <v-col sm="2" cols="2" class="d-flex align-items-center time pt-6">
          <router-link to="#">
            <v-skeleton-loader
              class="w-100"
              type="text"
              width="50"
            ></v-skeleton-loader
          ></router-link>
        </v-col>

        <v-col sm="2" cols="3" class="text-right d-flex actions pt-4"> </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "SongSkeleton",
};
</script>

<style lang="scss" scoped>
.song-card {
  padding: 4px 10px 4px 3px;

  margin-bottom: 15px;
  border-radius: 3px;
  .song-image {
    height: 50px;
    width: 50px;
  }
  .song-details {
    display: flex;
    align-items: center;

    .album {
      a {
        font-size: 14px;
        color: rgb(179, 179, 179);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      padding-top: 24px;
    }
    .song-artist a {
      text-decoration: none;
      font-size: 12px;
      color: rgb(179, 179, 179);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        text-decoration: underline;
      }
    }

    .actions {
      .like {
        opacity: 0;
        transition: opacity 0.2s;
      }
    }
  }
  &:hover {
    .actions .like,
    .play-btn {
      opacity: 1;
    }
  }
}

.theme--dark {
  .song-card:hover {
    background-color: rgb(40, 40, 40);
  }
}

.theme--light {
  .song-card:hover {
    background-color: rgb(230, 230, 230);
  }
}
</style>
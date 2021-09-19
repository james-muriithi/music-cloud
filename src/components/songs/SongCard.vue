<template>
  <div class="song-card">
    <div class="d-flex">
      <div class="song-image">
        <v-img :lazy-src="cover" fluid :src="cover" class="fill-height rounded">
          <div class="play-btn">
            <v-btn icon fab x-small>
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </div>
        </v-img>
      </div>
      <v-row class="song-details pl-3">
        <v-col cols="7" sm="5">
          <div class="song-title fill-width">{{ song.title }}</div>
          <div class="song-artist">
            <router-link to="/">{{ song.artist }}</router-link>
          </div>
        </v-col>

        <v-col sm="3" md="3" class="text-center album d-none d-sm-flex">
          <router-link to="/"> {{ song.album }} </router-link>
        </v-col>

        <v-col sm="2" cols="2" class="d-flex align-items-center time pt-6">
          {{ duration }}
        </v-col>

        <v-col sm="2" cols="3" class="text-right d-flex actions pt-4 pr-0 pr-sm-3">
          <v-btn icon class="like d-none d-sm-flex">
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn icon class="">
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "SongCard",
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      height: 200,
      width: 200,
    };
  },
  computed: {
    cover() {
      return this.song.cover
        .replace("{w}", this.width)
        .replace("{h}", this.height);
    },
    duration() {
      return this.msToTime(this.song.duration);
    },
  },
};
</script>

<style lang="scss" scoped>
.song-card {
  padding: 4px 10px 4px 3px;

  @media (max-width: 576px) {
    padding-right: 4px;
  }

  margin-bottom: 15px;
  border-radius: 3px;
  .song-image {
    height: 50px;
    width: 50px;
    position: relative;
    .play-btn {
      position: absolute;
      opacity: 0;
      transition: opacity 0.3s;
      top: 8px;
      left: 8px;
      button {
        font-size: 16px;
        background: #772bfb;
        color: #ffffff;
      }
    }
  }
  .song-details {
    white-space: nowrap;
    overflow: hidden;
    .song-title {
      font-size: 15px;
      font-weight: 450;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .time {
      font-size: 13px;
      color: rgb(185, 169, 169);
      padding-top: 20px;
    }
    .album {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      a {
        font-size: 14px;
        color: rgb(179, 179, 179);
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        text-overflow: ellipsis;
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
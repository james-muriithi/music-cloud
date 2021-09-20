<template>
  <div class="bottom-player">
    <v-container fluid>
      <v-row class="py-0">
        <v-col cols="6" sm="4" class="song-info d-flex">
          <div class="song-image">
            <v-img
              :lazy-src="cover"
              fluid
              :src="cover"
              class="fill-height rounded"
            >
            </v-img>
          </div>
          <div class="song-details pl-3 d-flex">
            <div class="">
              <div class="song-title fill-width">Better</div>
              <div class="song-artist">
                <router-link to="/">Khalid</router-link>
              </div>
            </div>
          </div>
        </v-col>
        <v-col sm="5" class="player-controls d-none d-sm-inline-block">
          <div class="">
            <div class="controls d-flex justify-content-center">
              <v-btn icon>
                <v-icon>mdi-shuffle-variant</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-skip-previous</v-icon>
              </v-btn>

              <v-btn icon class="pause-btn">
                <v-icon>mdi-pause</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-skip-next</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-repeat-variant</v-icon>
              </v-btn>
            </div>
            <div class="progress">
              <v-slider label="0:00" class="align-center">
                <template v-slot:append>
                  <v-layout class="alignThis">
                    <div class="align-center">3:22</div>
                  </v-layout>
                </template>
              </v-slider>
            </div>
          </div>
        </v-col>
        <v-col cols="6" sm="3" class="d-none d-sm-flex"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "BottomPlayer",
  computed: {
    cover() {
      return "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/bb/1e/c4/bb1ec461-1660-7afa-bc4f-f11a0dca6ac9/075679768889.jpg/200x200bb.jpeg";
    },
  },
};
</script>

<style lang="scss" scoped>
.theme--dark {
  .bottom-player {
    border-top: 1px solid rgb(48, 54, 61);
    background: var(--v-cardBackground-base);
  }
}
.theme--light {
  .bottom-player {
    border-top: 1px solid #bfbfbf;
  }
}

.bottom-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: var(--v-background-base);
  .song-image {
    height: 55px;
    width: 55px;
  }
  .song-details {
    white-space: nowrap;
    overflow: hidden;
    align-items: center;
    .song-title {
      font-size: 15px;
      font-weight: 450;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .song-artist {
      line-height: 20px;
      a {
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
    }
  }
  .player-controls {
      margin-top: -4px;
    .controls {
      justify-content: center;
      button {
        margin-right: 8px;
        height: 34px;
        width: 34px;
      }
      .pause-btn {
          transition: all 0.3s;
        i {
          font-size: 22px;
        }
        &.theme--dark {
          background: #fff;
          color: #181818;
        }
        &.theme--light {
          background: #181818;
          color: #fff;
        }
      }
      i {
        font-size: 18px;
      }
    }
  }
}
.alignThis {
  margin-top: 6px !important;
  font-size: 13px;
}
</style>

<style lang="scss">
.progress {
  .v-label {
    font-size: 13px;
  }
  .v-input__control {
    height: 20px !important;
  }

  .v-messages {
    display: none;
  }
  .v-input__slot {
    margin-top: 0px;
    margin-bottom: 0px !important;
  }
}
</style>
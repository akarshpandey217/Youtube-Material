<template>
  <v-hover v-if="video">
    <v-card 
      :to="videoRoute"
      @click.native="sendTileClickGA"
      class="video-tile"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 6 : 1}`">
      <v-img
        :src="thumbnail"
        :aspect-ratio="16/9">
        <div class="time-bar">
          <div 
            v-if="isLive" 
            class="live-icon">
            <v-tooltip top>
              <v-icon 
                slot="activator" 
                color="white" >wifi_tethering</v-icon>
              <span>{{ $t('liveVideo') }}</span>
            </v-tooltip>
          </div>
          <span 
            v-if="!isLive" 
            class="duration">{{ duration }}</span>
          <span 
            :title="uploaded" 
            class="uploaded">{{ humaizedUploaded }}</span>
        </div>
        
        <FloatingDiv 
          slot="placeholder"/>
      </v-img>
      
      <v-card-title 
        class="px-2 pt-2 pb-0" 
        primary-title>
        <div class="title-div">
          <h3 
            :title="title" 
            class="font-weight-light title body-1">{{ title }}</h3>
        </div>
        <div 
          :class="{'mb-2':hideChannelLink}" 
          :title="csvViews"
          class="caption success--text">{{ humaizedViews }}</div>
      </v-card-title>
      <router-link 
        v-if="!hideChannelLink"
        :to="channelRoute" 
        @click.native.stop="sendChannelClickGA"
        class="channel-name text-truncate">
        {{ channelName }}
      </router-link>
    </v-card>
  </v-hover>
  <div
    v-else>
    <v-responsive :aspect-ratio="16/9">
      <FloatingDiv class="fl-img"/>
    </v-responsive>
    <FloatingDiv class="fl-title1"/>
    <FloatingDiv class="fl-title2"/>
    <FloatingDiv class="fl-views"/>
    <FloatingDiv 
      v-if="!hideChannelLink" 
      class="fl-channel"/>
  </div>
</template>

<style scoped>
.fl-img {
  height: 100%;
}
.fl-title1 {
  height: 12px;
  margin-top: 12px;
  width: 80%;
}
.fl-title2 {
  height: 10px;
  margin-top: 9px;
  width: 40%;
}
.fl-views {
  height: 10px;
  margin-top: 7px;
  margin-bottom: 6px;
  width: 20%;
}
.fl-channel {
  margin-top: 10px;
  height: 12px;
  margin-bottom: 3px;
  width: 50%;
}

.video-tile {
  cursor: pointer;
}
.title-div {
  height: 32px;
}
.title {
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  height: 29px;
}
.caption {
  width: 100%;
}
.channel-name {
  display: block;
  text-decoration: none;
  font-size: 13px;
  color: #277bfa;
  padding: 4px;
  width: 100%;
  background: aliceblue;
  transition: all 0.3s;
}
.channel-name:hover {
  background: #e1effc;
  text-decoration: underline;
  cursor: pointer;
}
.time-bar {
  background: black;
  opacity: 0.75;
  position: absolute;
  width: 100%;
  height: 20px;
  font-size: 14px;
  color: white;
  bottom: 0;
}
.time-bar .duration {
  position: absolute;
  left: 4px;
}
.time-bar .uploaded {
  position: absolute;
  right: 4px;
}
.live-icon {
  position: absolute;
  top: -1px;
  left: 4px;
}
.live-icon i {
  font-size: 20px;
}
</style>


<script>
import VideoTile from "./VideoTile.ts";
export default VideoTile;
</script>

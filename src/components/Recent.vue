<template>
  <v-container>
    <v-list three-line>
      <template v-for="(friend, index) in friends">
        <v-list-item :key="friend.userId" @click="showFriend(friend)">
          <v-list-item-avatar>
            <v-img :src="friend.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-subtitle>{{
              friend.newestMoment.content
            }}</v-list-item-subtitle>
            <v-list-item-subtitle class="caption"
              ><span class="mr-3">{{ friend.nickName }}</span
              ><span>{{
                friend.newestMoment.createdTime | showDate
              }}</span></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-divider
          v-if="index < friends.length - 1"
          :key="index"
          inset
        ></v-divider>
      </template>
    </v-list>

    <v-dialog v-model="showFriendDialog" fullscreen hide-overlay>
      <v-card>
        <v-container>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="showingFriend.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{
                showingFriend.nickName
              }}</v-list-item-title>
              <v-list-item-subtitle
                >ID: {{ showingFriend.userId }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-btn icon absolute right @click="showFriendDialog = false">
              <v-icon>mdi-close-box-multiple</v-icon>
            </v-btn>
          </v-list-item>
          <v-list three-line>
            <template v-for="(item, index) in showingFriendMoments">
              <v-list-item :key="item.momentId">
                <v-list-item-content>
                  <v-list-item-subtitle>{{
                    item.content
                  }}</v-list-item-subtitle>
                  <v-list-item-subtitle class="caption">{{
                    item.createdTime | showDate
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider
                v-if="index < showingFriendMoments.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { recent, friendMoments } from "../api";
import { showDate } from "../tools";

export default {
  name: "Recent",
  props: ["userId"],

  data: () => ({
    friends: [],
    showFriendDialog: false,
    showingFriend: {},
    showingFriendMoments: [],
  }),
  methods: {
    showFriend: async function (friend) {
      this.showingFriend = friend;
      this.showFriendDialog = true;
      this.showingFriendMoments = await friendMoments({
        userId: friend.friendId,
      });
    },
  },
  async created() {
    this.friends = await recent({ userId: this.userId });
  },
  filters: {
    showDate,
  },
};
</script>

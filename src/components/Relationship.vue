<template>
  <v-container>
    <v-list>
      <template v-for="item in friends">
        <v-list-item :key="item.userId">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.nickName }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action @click="removeFriend(item.friendId)">
            <v-icon> mdi-account-multiple-remove </v-icon>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-container>
</template>

<script>
import { friends, removeFriend } from "../api";

export default {
  name: "Home",

  data: () => ({
    friends: [],
  }),
  methods: {
    removeFriend: async function (friendId) {
      await removeFriend({ friendId: friendId });
      this.friends = this.friends.filter((v) => v.friendId !== friendId);
    },
  },
  async created() {
    this.friends = await friends();
  },
};
</script>

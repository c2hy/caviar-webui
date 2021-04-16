<template>
  <v-app>
    <v-navigation-drawer v-model="showNav" bottom app>
      <v-list nav dense>
        <v-subheader
          v-clipboard="user.userId"
          v-clipboard:success="onCopyUidSuccess"
          >{{ user.nickName }} {{ user.userId }}</v-subheader
        >
        <v-list-item-group v-model="currentNav">
          <v-list-item
            @click="showNav = false"
            v-for="nav in navs"
            :key="nav.key"
          >
            <v-list-item-icon>
              <v-icon>{{ nav.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ nav.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dense app>
      <v-app-bar-nav-icon @click="showNav = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-subtitle-1">{{ navTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="pushMomentSheet = true">
        <v-icon>mdi-feather</v-icon>
      </v-btn>
      <v-btn icon @click="addFriendSheet = true">
        <v-icon>mdi-account-multiple-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Recent
        :userId="user.userId"
        v-if="navKey === 'recent' && user.userId"
      ></Recent>
      <Home
        :userId="user.userId"
        :nickName="user.nickName"
        :avatar="user.avatar"
        v-if="navKey === 'home'"
      ></Home>
      <Relationship v-if="navKey === 'relationship'"></Relationship>
      <PushMoment
        :show="pushMomentSheet"
        v-on:close="pushMomentSheet = false"
      ></PushMoment>
      <AddFriend
        :show="addFriendSheet"
        v-on:close="addFriendSheet = false"
      ></AddFriend>
      <v-snackbar v-model="showSnackbar" timeout="700" light>
        {{ snackbarText }}
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import { currentUser } from "./api";
import Recent from "./components/Recent";
import Home from "./components/Home";
import Relationship from "./components/Relationship";
import PushMoment from "./components/PushMoment";
import AddFriend from "./components/AddFriend";

export default {
  name: "App",

  components: {
    Recent,
    Home,
    Relationship,
    PushMoment,
    AddFriend,
  },

  data: () => ({
    showNav: false,
    currentNav: 0,
    pushMomentSheet: false,
    addFriendSheet: false,
    showSnackbar: false,
    snackbarText: "",
    user: {},
    navs: [
      { key: "recent", title: "近况", icon: "mdi-format-list-bulleted" },
      { key: "home", title: "主页", icon: "mdi-account-clock" },
      { key: "relationship", title: "好友", icon: "mdi-account-multiple" },
    ],
  }),
  computed: {
    navTitle: function () {
      return this.navs[this.currentNav]["title"];
    },
    navKey: function () {
      return this.navs[this.currentNav]["key"];
    },
  },
  methods: {
    onCopyUidSuccess: function () {
      this.snackbarText = `已复制 ${this.user.userId} 到剪贴板`;
      this.showSnackbar = true;
    },
  },
  async created() {
    this.user = await currentUser();
  },
};
</script>

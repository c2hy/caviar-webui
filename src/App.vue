<template>
  <v-app>
    <v-navigation-drawer v-model="showNav" bottom app>
      <v-list nav dense>
        <v-subheader
          v-clipboard="user.userId"
          v-clipboard:success="onCopyUidSuccess"
          >{{ user.nickName }} {{ user.userId }}</v-subheader
        >
        <template v-for="nav in navs">
          <v-list-item @click="onNavChanged(nav.key)" :key="nav.key">
            <v-list-item-icon>
              <v-icon>{{ nav.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ nav.title }}</v-list-item-title>
          </v-list-item>
        </template>
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
      <Login
        :show="loginSheet"
        v-if="currentNav === 'login'"
        @succeed="onLoginSucceed"
        @failed="onLoginFailed"
      ></Login>
      <Recent
        :userId="user.userId"
        v-if="currentNav === 'recent' && user.userId"
      ></Recent>
      <Home
        :userId="user.userId"
        :nickName="user.nickName"
        :avatar="user.avatar"
        v-if="currentNav === 'home'"
      ></Home>
      <Relationship v-if="currentNav === 'relationship'"></Relationship>
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
import Login from "./components/Login";
import Recent from "./components/Recent";
import Home from "./components/Home";
import Relationship from "./components/Relationship";
import PushMoment from "./components/PushMoment";
import AddFriend from "./components/AddFriend";

export default {
  name: "App",

  components: {
    Login,
    Recent,
    Home,
    Relationship,
    PushMoment,
    AddFriend,
  },

  data: () => ({
    showNav: false,
    currentNav: "recent",
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
      const nav = this.navs.find((v) => v.key === this.currentNav);
      return nav ? nav.title : "";
    },
    loginSheet: function () {
      return this.currentNav === "login";
    },
  },
  methods: {
    onNavChanged: function (navKey) {
      this.currentNav = navKey;
      this.showNav = false;
    },
    onCopyUidSuccess: function () {
      this.snackbarText = `已复制 ${this.user.userId} 到剪贴板`;
      this.showSnackbar = true;
    },
    onLoginSucceed: async function () {
      this.currentNav = "recent";
      this.user = await currentUser();
    },
    onLoginFailed: function () {},
  },
  async created() {
    try {
      this.user = await currentUser();
    } catch (error) {
      if (error.response.status === 403) {
        this.currentNav = "login";
      }
    }
  },
};
</script>

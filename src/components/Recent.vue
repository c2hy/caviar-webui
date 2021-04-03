<template>
  <v-container>
    <v-list three-line>
      <template v-for="(friend, index) in friends">
        <v-list-item :key="friend.uid" @click="view(friend.uid)">
          <v-list-item-avatar>
            <v-img :src="friend.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-subtitle v-html="friend.moment"></v-list-item-subtitle>
            <v-list-item-subtitle class="caption"
              ><span class="mr-3">{{ friend.name }}</span
              ><span>{{ friend.time }}</span></v-list-item-subtitle
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
  </v-container>
</template>

<script>
export default {
  name: "Recent",

  data: () => ({
    friends: [
      {
        uid: "FAWEFZ",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        name: "成海一",
        moment: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        time: "2021/3/6",
      },
      {
        uid: "FAWEF1",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        name: "金城武",
        moment: "我们尝试用中文发瞬间",
        time: "2021/3/6",
      },
      {
        uid: "FAWEF2",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        name: "热河",
        moment: "......",
        time: "2021/3/6",
      },
      {
        uid: "FAWEF3",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        name: "vuetifyjs",
        moment:
          "当前版本的 Vuetify 不支持 Vue 3。 对vue3的支持将随着Vuetify v3的发布而提供。 创建新项目时，请确保您从 Vue CLI 提示中选择 Vue 2 或者正在安装到已存在的 Vue 2项目。",
        time: "2000/3/6",
      },
      {
        uid: "FAWEF4",
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        name: "VUE",
        moment: `Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。

如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。`,
        time: "2000/3/6",
      },
    ],
  }),
  methods: {
    view: function (uid) {
      this.$emit("view", uid);
    },
  },
};
</script>

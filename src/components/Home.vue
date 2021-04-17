<template>
  <v-container>
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="avatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ nickName }}</v-list-item-title>
        <v-list-item-subtitle>ID: {{ userId }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list three-line>
      <template v-for="(item, index) in moments">
        <v-list-item :key="item.momentId">
          <v-list-item-content>
            <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
            <v-list-item-subtitle class="caption">
              {{ item.createdTime | showDate }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action @click="removeMoment(item.momentId)">
            <v-icon>mdi-delete-sweep</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-divider v-if="index < moments.length - 1" :key="index"></v-divider>
      </template>
    </v-list>
  </v-container>
</template>

<script>
import { moments, removeMoment } from "../api";
import { showDate } from "../tools";

export default {
  name: "Home",
  props: ["userId", "nickName", "avatar"],

  data: () => ({
    moments: [],
  }),
  methods: {
    removeMoment: async function (momentId) {
      await removeMoment({ momentId });
      this.moments = this.moments.filter((v) => v.momentId !== momentId);
    },
  },
  async created() {
    this.moments = await moments({ userId: this.userId });
  },
  filters: {
    showDate,
  },
};
</script>

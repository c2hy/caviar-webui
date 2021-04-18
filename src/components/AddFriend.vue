<template>
  <v-dialog v-model="show" fullscreen hide-overlay>
    <v-card>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>添加新的朋友</v-list-item-title>
          </v-list-item-content>
          <v-btn icon absolute right @click="cancel">
            <v-icon>mdi-close-box-multiple</v-icon>
          </v-btn>
        </v-list-item>
        <v-card-text>
          <v-text-field
            clearable
            clear-icon="mdi-close-circle"
            outlined
            label="朋友的 ID"
            :rules="[rules.required, rules.counter]"
            v-model="friendUserId"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="push"> 添加 </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { newFriend } from "../api";

export default {
  name: "AddFriend",
  props: ["show"],
  data: () => ({
    friendUserId: "",
    rules: {
      required: (value) => !!value || "需要输入用户 ID",
      counter: value => (value.length >= 6) || '用户 ID 最低为 6 位',
    },
  }),
  methods: {
    cancel: function () {
      this.$emit("close");
    },
    push: async function () {
      await newFriend({ friendUserId: this.friendUserId });
      this.$emit("close");
    },
  },
};
</script>

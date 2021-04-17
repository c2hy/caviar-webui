<template>
  <v-dialog v-model="show" fullscreen hide-overlay>
    <v-card>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>分享你的生活</v-list-item-title>
          </v-list-item-content>
          <v-btn icon absolute right @click="cancel">
            <v-icon>mdi-close-box-multiple</v-icon>
          </v-btn>
        </v-list-item>
        <v-card-text>
          <v-textarea
            clearable
            clear-icon="mdi-close-circle"
            outlined
            rows="4"
            v-model="moment"
          ></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="push" text> 发布 </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { newMoment } from "../api";

export default {
  name: "PushMoment",
  props: ["show"],
  data: () => ({
    moment: "",
  }),
  methods: {
    cancel: function () {
      this.$emit("close");
    },
    push: async function () {
      await newMoment({ content: this.moment });
      this.$emit("close");
    },
  },
};
</script>

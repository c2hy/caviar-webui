<template>
  <v-dialog v-model="show" fullscreen hide-overlay>
    <v-card>
      <v-container>
        <v-card-text>
          <v-textarea
            clearable
            clear-icon="mdi-close-circle"
            outlined
            rows="4"
            label="分享你的生活"
            :value="moment"
          ></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="cancel" text> 返回 </v-btn>
          <v-btn @click="push" text> 发布 </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
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
    push: function () {
      this.$emit("close");
    },
  },
};
</script>

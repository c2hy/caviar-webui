<template>
  <v-dialog v-model="show" fullscreen hide-overlay>
    <v-card>
      <v-container>
        <v-card-text>
          <v-text-field
            clearable
            clear-icon="mdi-close-circle"
            outlined
            label="朋友的 ID"
            value=""
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="cancel"> 返回 </v-btn>
          <v-btn text @click="push"> 添加 </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddFriend",
  props: ["show"],
  data: () => ({}),
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

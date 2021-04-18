<template>
  <v-dialog v-model="show" fullscreen hide-overlay>
    <v-card>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>登录鱼子酱</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <v-text-field
            clearable
            clear-icon="mdi-close-circle"
            outlined
            label="USER ID"
            v-model="userId"
          ></v-text-field>
          <v-text-field
            clearable
            clear-icon="mdi-close-circle"
            outlined
            label="密码"
            type="password"
            v-model="password"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="login" text> 登录 </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { newToken } from "../api";

export default {
  name: "Login",
  props: ["show"],
  data: () => ({
    userId: "",
    password: "",
    rules: {
      required: (value) => !!value || "你好像忘记输入这一格啦",
    },
  }),
  methods: {
    login: async function () {
      const { result } = await newToken({
        userId: this.userId,
        password: this.password,
      });
      if (result === "success") {
        this.$emit("succeed");
      } else {
        this.$emit("failed");
      }
    },
  },
};
</script>

<template>
  <v-container>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://avataaars.io/"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>开发者</v-list-item-title>
        <v-list-item-subtitle>ID: FASDF1</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list three-line>
      <template v-for="(item, index) in moments">
        <v-list-item :key="item.title">
          <v-list-item-content>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            <v-list-item-subtitle v-text="item.action" class="caption">
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-delete-sweep</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-divider v-if="index < moments.length - 1" :key="index"></v-divider>
      </template>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    moments: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: "Ali Connors",
      },
      {
        action: "2 hr",
        headline: "Summer BBQ",
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        title: "me, Scrott, Jennifer",
      },
      {
        action: "6 hr",
        headline: "Oui oui",
        subtitle: "Do you have Paris recommendations? Have you ever been?",
        title: "Sandra Adams",
      },
      {
        action: "12 hr",
        headline: "Birthday gift",
        subtitle:
          "Have any ideas about what we should get Heidi for her birthday?",
        title: "Trevor Hansen",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt",
      },
    ],
  }),
};
</script>

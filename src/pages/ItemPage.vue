<template>
  <div v-if="item" class="item--page">
    <button @click="goToHomePage" class="item--page__back pointer">
      <GoBackIcon />
    </button>
    <PageTitle>{{ item.name }}</PageTitle>
    <p class='item--page__description text-left'>{{item.description}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GoBackIcon from "../components/icons/GoBackIcon.vue";
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "ItemPage",
  components: {
    GoBackIcon,
    PageTitle,
  },
  data() {
    return {
      item: {},
    };
  },
  computed: {
    ...mapGetters(["getItemById"]),
  },
  methods: {
    goToHomePage() {
      this.$router.push({ name: "ShoppingList" });
    },
  },
  created() {
    const itemId = this.$route.params.itemId;

    this.item = this.getItemById(itemId);
    if (!this.item) {
      return this.$router.push({ name: "ShoppingList" });
    }
  },
};
</script>

<style lang="scss">
.item--page {
  .item--page__back {
    float: left;
  }

}
</style>

<template>
  <div class="shopping--list">
    <PageTitle>Shopping List</PageTitle>
    <!-- The lists -->
    <div v-for="(listItem,index) in getShoppingList" :key="listItem.id">
      <TheItem :item="listItem" :index="index"/>
    </div>

    <!-- Total -->
    <ShoppingListTotal />

    <!-- Add Item Popup -->
    <AddItemButton @click.native="openPopUp" />
    <AddItemPopUp :popupStatus="shouldShowAddItemPopUp" @close="closePopup" />
  </div>
</template>

<script>
import TheItem from "../components/TheItem.vue";
import PageTitle from "../components/PageTitle.vue";
import AddItemButton from "../components/AddItemButton.vue";
import AddItemPopUp from "../components/AddItemPopUp.vue";
import ShoppingListTotal from "../components/ShoppingListTotal.vue";
import { mapGetters } from "vuex";

export default {
  name: "ShoppingListPage",
  components: {
    TheItem,
    AddItemButton,
    PageTitle,
    ShoppingListTotal,
    AddItemPopUp,
  },
  computed: {
    shippingListTotalPrice() {
      return this.shoppingList.reduce((sum, { price }) => sum + price, 0);
    },
    ...mapGetters(["getShoppingList"]),
  },
  data: function () {
    return {
      shouldShowAddItemPopUp: false,
    };
  },
  methods: {
    openPopUp() {
      this.shouldShowAddItemPopUp = true;
    },
    closePopup() {
      this.shouldShowAddItemPopUp = false;
    },
  },
};
</script>

<style lang="scss">
</style>

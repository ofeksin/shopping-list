import Vue from "vue";
import Router from "vue-router";
import ShoppingListPage from "../pages/ShoppingListPage.vue";
import ItemPage from "../pages/ItemPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: ShoppingListPage, name:"ShoppingList"},
    { path: "/item/:itemId", component: ItemPage, name:"ItemPage" },
  ],
});

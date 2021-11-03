import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shoppingList: [
      {
        id: 0,
        name: "Tomatos",
        price: 54,
        description:
          "The tomato is the edible berry of the plant Solanum lycopersicum,[1][2] commonly known as a tomato plant. The species originated in western South America and Central America.[2][3] The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.[2][5] The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.[2]",
        isCompleted: true,
      },
      {
        id: 1,
        name: "Cucumbers",
        price: 32,
        description:
          "The tomato is the edible berry of the plant Solanum lycopersicum,[1][2] commonly known as a tomato plant. The species originated in western South America and Central America.[2][3] The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.[2][5] The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.[2]",
        isCompleted: false,
      },

      {
        id: 2,
        name: "Bread",
        price: 32,
        description:
          "The tomato is the edible berry of the plant Solanum lycopersicum,[1][2] commonly known as a tomato plant. The species originated in western South America and Central America.[2][3] The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.[2][5] The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.[2]",
        isCompleted: false,
      },
      {
        id: 3,
        name: "Grapes",
        price: 32,
        description:
          "The tomato is the edible berry of the plant Solanum lycopersicum,[1][2] commonly known as a tomato plant. The species originated in western South America and Central America.[2][3] The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.[2][5] The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.[2]",
        isCompleted: false,
      },
    ],
  },
  mutations: {
    addItemToShoppingList(state, item) {
      let newItemId;

      if (this.state.shoppingList.length) {
        newItemId =
          this.state.shoppingList[this.state.shoppingList.length - 1].id + 1;
      } else {
        newItemId = 0;
      }
      item = { id: newItemId, ...item };
      this.state.shoppingList.push(item);
    },
    removeItemFromList(state, itemId) {
      state.shoppingList = state.shoppingList.filter(
        (shippingItem) => shippingItem.id !== itemId
      );
    },
    markAsCompleted(state, itemId) {
      const id = state.shoppingList.findIndex(
        (shoppingItem) => shoppingItem.id === itemId
      );
      if (id == -1) return;
      // Due the reactivity limitation with objects
      Object.assign(state.shoppingList[id], {
        ...state.shoppingList[id],
        isCompleted: !state.shoppingList[id].isCompleted,
      });
    },
  },
  getters: {
    getShoppingList: (state) => {
      return state.shoppingList;
    },
    shoppingistTotalPrice: (state) => {
      return state.shoppingList.reduce((sum, { price }) => sum + price, 0);
    },
    getItemById(state) {
      return (itemId) => {
        return state.shoppingList.find(
          (shoppingItem) => shoppingItem.id == itemId
        );
      };
    },
  },
});

export default store;

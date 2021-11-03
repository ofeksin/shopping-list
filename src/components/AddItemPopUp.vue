<template>
  <div class="add--item" :class="{ hide: !popupStatus }">
    <button @click="closeAddItemPopUp" class="add-item__button pointer">
      <ClosePopUpIcon />
    </button>

    <form class="add--item__form text-left">
      <div class="two-columns">
        <fieldset>
          <label>Name</label>
          <input
            type="text"
            class="add--item__form--input"
            v-model="item.name"
          />
        </fieldset>
        <fieldset>
          <label>Price</label>
          <input
            type="text"
            class="add--item__form--input"
            v-model="item.price"
          />
        </fieldset>
      </div>
      <fieldset>
        <label>Description</label>
        <textarea
          cols="100"
          class="add--item__form--input"
          v-model="item.description"
          rows="10"
        ></textarea>
      </fieldset>
    </form>
    <button @click="addItem" class="add-item__button"><ArrowIcon /></button>
  </div>
</template>

<script>
import ArrowIcon from "./icons/ArrowIcon.vue";
import ClosePopUpIcon from "./icons/ClosePopUpIcon.vue";
import { mapMutations } from "vuex";

export default {
  name: "AddItemPopUp",
  components: {
    ArrowIcon,
    ClosePopUpIcon,
  },
  props: {
    popupStatus: Boolean,
  },
  data() {
    return {
      display: false,
      item: {
        name: "",
        price: 0,
        description: "",
        isCompleted: false,
      },
    };
  },
  methods: {
    ...mapMutations(["addItemToShoppingList"]),

    addItem(e) {
      e.preventDefault();

      // Product must has a valid name and a description,
      if (
        !this.item.name ||
        !this.item.description ||
        isNaN(this.item.price) ||
        this.item.price <= 0
      )
        return;

      this.item.price = Number(this.item.price);
      this.addItemToShoppingList(this.item);

      this.display = true;
      // Clears item values.
      this.closeAddItemPopUp();
    },
    closeAddItemPopUp() {
      this.clearData();
      this.$emit("close");
    },
    clearData() {
      this.item.description = "";
      this.item.name = "";
      this.item.price = 0;
    },
  },
};
</script>
<style lang="scss">
.add--item {
  position: absolute;
  top: 30%;
  padding: 20px;
  right: 0;
  left: 0;
  border-radius: 10px;
  height: 400px;
  color: $primary-light;
  z-index: 999;
  background: $app-bg-color;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
}

.add-item__button {
  float: right;
}

.hide {
  display: none !important;
}

.two-columns {
  display: grid;
  grid-template-columns: 50% 50%;
}

.add--item__form {
  display: flex;
  flex-direction: column;

  textarea,
  input {
    width: 100%;
    border-bottom: $border;
  }

  fieldset {
    padding: 10px;
  }
}
</style>

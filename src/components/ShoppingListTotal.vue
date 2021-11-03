<template>
  <div>
    <div>
      <div class="row mt-15">
        <div class="items size-20"><h2 class="item--id"></h2></div>
        <div class="items size-80">
          <div class="row">
            <div class="items size-50">
              <h2 class="regular-text text-left">Total:</h2>
            </div>
            <div class="items size-50">
              <h2 class="regular-text text-left">{{this.shoppingistTotalPrice}} NIS</h2>
            </div>
          </div>
        </div>
        <div class="items size-35"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShoppingListTotal",
  computed: {
    ...mapGetters(["shoppingistTotalPrice"]),
  },
};
</script>

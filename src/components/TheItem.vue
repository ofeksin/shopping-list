<template>
  <div>
    <div class="row border-bottom mt-15">
      <div class="items size-20 border-right">
        <h2 class="item--id">{{ index + 1 }}</h2>
      </div>
      <div class="items size-80">
        <div class="row" :class="{ completed: isCompleted() }">
          <div class="items size-50">
            <h2
              class="regular-text text-left pointer"
              :class="{ light: isCompleted() }"
            >
              <router-link :to="`/item/${this.item.id}`">{{
                this.item.name
              }}</router-link>
            </h2>
          </div>
          <div class="items size-50">
            <h2
              class="regular-text text-left"
              :class="{ light: isCompleted() }"
            >
              {{ this.item.price }} NIS
            </h2>
          </div>
        </div>
      </div>
      <div class="items size-35">
        <div class="row">
          <div class="items size-50 border-right">
            <EditIcon @click.native="itemCompleted()" />
          </div>
          <div class="items size-50">
            <RemoveIcon @click.native="removeItem()" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditIcon from "./icons/EditIcon.vue";
import RemoveIcon from "./icons/RemoveIcon.vue";
import { mapMutations } from "vuex";

export default {
  name: "TheItem",
  props: {
    item: Object,
    index: Number,
  },
  components: {
    EditIcon,
    RemoveIcon,
  },
  data() {
    return {
      showAsComplited: false,
    };
  },
  methods: {
    ...mapMutations(["removeItemFromList", "markAsCompleted"]),
    isCompleted() {
      return this.item.isCompleted;
    },
    itemCompleted() {
      this.markAsCompleted(this.item.id);
    },
    removeItem() {
      this.removeItemFromList(this.item.id);
    },
  },
};
</script>
<style lang="scss">
.completed {
  position: relative;
  &:after {
    content: "";
    width: 100%;
    left: 10px;
    position: absolute;
    border: $border;
  }
}
</style>

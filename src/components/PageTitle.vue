<template>
 <h1 class='page--title'>
  <slot></slot>
 </h1>
</template>

<script>
export default {
  name: "PageTitle",
};
</script>
<style lang="scss">
.page--title{
  font-weight: 700;
  color:$primary-color;
  line-height: 100px;
  font-size:$primary-font-size;
  font-family:$primary-font;
  letter-spacing: 0em;
}
</style>

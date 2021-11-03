<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
@import "./styles/reset.scss";
@import './styles/style.scss';
@import './styles/responsive.scss';

body {
  display: flex;
  height: 100vh;
  font-family: $secondary-font;
  font-size:15px;
  justify-content: center;
  align-items: center;
  background: $bg-color;
}

#app {
  padding: 100px 32px 0px 32px;
  text-align: center;
  width: 90vw;
  min-height: 90vh;
  position:relative;
  background: $app-bg-color;
  box-shadow: 0px 25px 40px #1587d933;
  border-radius: 20px;
}

</style>

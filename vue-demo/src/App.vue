<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { MatrixComponent, renderMatrixComponent } from "react-lib";
import { onMounted } from "vue";
onMounted(() => {
  renderMatrixComponent(MatrixComponent.ReactApp, "#matrix-container");
});
</script>

<template>
  <div id="matrix-container"></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

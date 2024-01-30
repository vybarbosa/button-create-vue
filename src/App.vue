<template>
  <h1>Button-Create</h1>
  <div class="container">
    <inputCreator />
    <buttonCreator />
  </div> 
</template>

<script>
import buttonCreator from './components/buttonCreator.vue';
import inputCreator from './components/inputCreator.vue';

export default {
  name: 'App',
  components: {
    buttonCreator,
    inputCreator
  }
}
</script>

<style>
body {
  background: rgb(37, 71, 36);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h1 {
  text-align: center;
  margin-top: 30px;
  color: rgb(131, 128, 128);
}

.container {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  
}
</style>

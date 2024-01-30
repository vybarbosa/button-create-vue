<template>
  <button :style="buttonStyle">{{ name }}</button>
  <codeCreator />
</template>
<script>
import codeCreator from './codeCreator.vue';
export default {
  name: "buttonCreator",
  computed: {
    name() {
      return this.$store.state.button.name;
    },
    buttonStyle() {
      return {
        width: this.$store.state.button.width + 'px',
        height: this.$store.state.button.height + 'px',
        fontSize: this.$store.state.button.fontSize + 'px',
        fontFamily: this.$store.state.button.fontFamily,
        textAlign: this.$store.state.button.textAlign,
        background: this.$store.state.button.background,
        color: this.$store.state.button.color,
        borderRadius: this.$store.state.button.borderRadius + 'px'
      }
    }
  },
  components: {
    codeCreator
  }
};
</script>
<style scoped>
  button {
    margin: 20px;
    cursor: pointer;
    margin-right: 200px;
    border: none;
    
  }
  button:hover {
    box-shadow: 0 4px 8px rgba(0, 3, 5, 0.1);
  }
</style>
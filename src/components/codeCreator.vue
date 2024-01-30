<template>
  <section class="code">
    <p>width:{{ width }}</p>
    <p>height:{{ height }}</p>
    <p>font-Size:{{ fontSize }}</p>
    <p>font-Family:{{ fontFamily }}</p>
    <p>text-align:{{ textAlign }}</p>
    <p>background:{{ background }}</p>
    <p>color:{{ color }}</p>
    <p>border-radius:{{ borderRadius }}</p>
  </section>
</template>
  <script>
export default {
  name: "codeCreator",
  computed: {
    width() {
      return this.$store.state.button.width + "px";
    },
    height() {
      return this.$store.state.button.height + "px";
    },
    fontSize() {
      return this.$store.state.button.fontSize + "px";
    },
    fontFamily() {
      return this.$store.state.button.fontFamily;
    },
    textAlign() {
      return this.$store.state.button.textAlign;
    },
    background() {
      return this.$store.state.button.background;
    },
    color() {
      return this.$store.state.button.color;
    },
    borderRadius() {
      return this.$store.state.button.borderRadius + "px";
    },
  },
};
</script>
  <style scoped>
.code {
  font-family: monospace;
  width: 160px;
  background: rgba(0, 0, 0, 0.24);
  color: rgb(131, 128, 128);
  margin-right: 10px;
}

.code:hover {
    box-shadow: 0 2px 4px rgba(0, 3, 5, 0.767);
}

p {
    margin-left: 10px;
}
</style>
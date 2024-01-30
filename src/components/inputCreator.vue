<template>
  <div id="formulario">
    <label for="text">Texto do botão:</label>
    <input type="text" v-model="name" />

     <label for="width">Largura:</label>
    <input type="range" min="0" max="600" step="1" v-model="width">

    <label for="height">Altura:</label>
    <input type="range" min="0" max="200" step="1" v-model="height">

    <label for="fontSize">Tamanho da fonte:</label>
    <input type="number" name="fontSize" id="fontSize" v-model="fontSize">

    <label for="fontFamily">Estilo da fonte:</label>
    <select name="fontFamily" id="fontFamily" v-model="fontFamily">
      <option disabled value="">Selecione uma letra</option>
      <option value="Arial">Arial</option>
      <option value="Georgia">Georgia</option>
      <option value="monospace">Monospace</option>
    </select>
    
    <label for="textAlign">Alinhamento do texto:</label>
    <select name="textAlign" id="textAlign" v-model="textAlign">
      <option disabled value="">Selecione uma letra</option>
      <option value="left">Esquerda</option>
      <option value="center">Centro</option>
      <option value="right">Direita</option>
    </select> 

    <label for="corFundo">Cor do fundo:</label>
    <input type="color" v-model="background" name="corFundo" id="corFundo">

    <label for="corLetra">Cor da letra:</label>
    <input type="color" v-model="color" name="corLetra" id="corLetra">

    <label for="radius">curvatura das bordas:</label>
    <input type="number" name="borderRadius" id="borderRadius" v-model="borderRadius">
  </div>
</template>
<script>
export default {
    name: 'inputCreator',
  computed: {
    name: {
      get() {
        return this.$store.state.button.name;
      },
      set(value) {
        this.$store.commit("UPDATE_BUTTON", {name: value})
      },
    }, 
      width: {
      get() {
        return this.$store.state.button.width;
      },
      set(value) {
        this.$store.commit("UPDATE_BUTTON", {width: value})
      }
    },
    height: {
      get() {
        return this.$store.state.button.height;
      },
      set(value) {
        this.$store.commit("UPDATE_BUTTON", {height: value})
      }
    },
    fontSize: {
      get() {
        return this.$store.state.button.fontSize;
      },
      set(value) {
        this.$store.commit("UPDATE_BUTTON", {fontSize: value})
      }
    },
    fontFamily: {
      get() {
        return this.$store.state.button.fontFamily;
      },
      set(value) {
        this.$store.commit("UPDATE_BUTTON", {fontFamily: value})
      }
    },
    textAlign: {
      get() {
        return this.$store.state.button.textAlign;
      },
      set(value) {
        this.$store.commit("UPDATE_BUTTON", {textAlign: value})
      }
    },
    background: {
      get() {
        return this.$store.state.button.background;
      },
      set(value) {
        this.$store.commit("UPDATE_BUTTON", {background: value})
      }
    },
    color: {
      get() {
        return this.$store.state.button.color;
      },
      set(value) {
        this.$store.commit("UPDATE_BUTTON", {color: value})
      }
    },
    borderRadius: {
      get() {
        return this.$store.state.button.borderRadius;
      },
      set(value) {
        this.$store.commit("UPDATE_BUTTON", {borderRadius: value})
      }
    },
  }
}
</script>
<style scoped>
  #formulario {
    border: none;
    margin: 40px;
    margin-left: 80px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 3, 5, 0.767);
  }

  label {
    color: white;
    margin-bottom: 5px;
  }

  input, select {
    margin-bottom: 10px;
    background: rgb(131, 128, 128);
    border: none;
  }

</style>
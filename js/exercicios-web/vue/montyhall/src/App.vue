<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">Quantas portas?</label>
        <input id="portsAmount" v-model.number="portsAmount" type="text" size="1">
      </div>
      <div v-if="!started">
        <label for="selectedPort">Qual porta será a premiada?</label>
        <input id="selectedPort" v-model.number="selectedPort" type="text" size="1">
      </div>
      <button v-if="!started" @click="started = true">Iniciar</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" :key="i">
        <Door :hasGift="i === selectedPort" :number="i"/>
      </div>
    </div>
  </div>
</template>

<script>
import Door from "./components/Door";

export default {
  name: "App",
  components: { Door },
  data() {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: null
    };
  }
};
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
}
body {
  background: linear-gradient(to right, #23074d, #cc5333);
  color: antiquewhite;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.form,
.form input,
.form button {
  margin-bottom: 20px;
  font-size: 1.5rem;
}
.form input {
  margin-left: 10px;
  text-align: center;
  height: 30px;
}
.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
}
</style>

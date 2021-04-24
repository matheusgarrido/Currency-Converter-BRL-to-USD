<template>
  <div>
    <h1>Currency Converter</h1>
    <form action>
      <label>
        Value (R$)
        <InputText v-model="currentValue" placeholder="0" type="number" step="0.1" min="0" />
      </label>
      <label>
        R$ / US$
        <InputText
          v-model="currencyConvertValue"
          placeholder="0"
          type="number"
          step="0.01"
          min="0"
        />
      </label>
      <div id="divButtons">
        <Button
          label="Clear"
          @click="clear()"
          class="p-button-secondary"
          :disabled="!currentValue && !currencyConvertValue"
        />
        <Button
          label="Calculate"
          @click="calculate()"
          :disabled="!currentValue || !currencyConvertValue"
        />
      </div>
    </form>
    <article v-show="resultValue && currentValue">
      <h2>Result</h2>
      <p>
        R$ {{parseInt(currentValue).toFixed(2)}} =>
        <span id="result">US$ {{resultValue.toFixed(2)}}</span>
      </p>
    </article>
  </div>
</template>

<script>
document.title = "Currency Converter";
export default {
  data() {
    return {
      currentValue: null,
      currencyConvertValue: 5.48,
      resultValue: 0
    };
  },
  methods: {
    calculate() {
      this.$data.resultValue =
        this.$data.currentValue / this.$data.currencyConvertValue;
    },
    clear() {
      this.$data.currentValue = null;
      this.$data.currencyConvertValue = null;
      this.$data.resultValue = 0;
    }
  },
  watch: {
    currentValue() {
      this.$data.resultValue = 0;
    },
    currencyConvertValue() {
      this.$data.resultValue = 0;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
form {
  width: max-content;
  margin: auto;
}
label {
  display: block;
  text-align: right;
  padding-right: 25px;
  margin: 10px auto;
}
label > input {
  margin-left: 5px !important;
}
#divButtons > button {
  width: 100px;
  margin: 10px 30px !important;
}
span#result {
  font-weight: bold;
}
</style>

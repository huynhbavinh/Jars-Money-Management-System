<script>
import { ref } from "vue";
//
import { useMoneyStore } from "./stores/money";
import jarComponentVue from "./components/jarComponent.vue";
export default {
  setup() {
    const show = ref(false)
    const money = useMoneyStore();
    const inputMoney = ref(0);
    function setMoneyToStore() {
      if (inputMoney.value < 999999999) {
        money.setMoney(inputMoney.value);
      } else {
        alert("Stop that's a lot of money");
      }
    }
    const jars = [
      {
        name: "necessities",
        per: "55%",
        useFor: ["Food", "Rent", "Electricity", "Bills"],
      },
      { name: "longTerm", per: "10%", useFor: ["Car", "House", "Vocations", "Medical"] },
      { name: "play", per: "10%", useFor: ["Myself fund", "Leisurely Expense"] },
      {
        name: "education",
        per: "10%",
        useFor: ["Coaching", "Mentoring", "Books", "Courses"],
      },
      { name: "financial", per: "10%", useFor: ["Stocks", "Mutual Funds", "Other"] },
      { name: "give", per: "5%", useFor: ["Charitable Donations"] },
    ];
    return {
      jars,
      setMoneyToStore,
      inputMoney,
      money,
      show
    };
  },
  components: {
    jarComponentVue,
  },
};
</script>

<template>
  <div class="header">
    <h1>Jars Money Management System</h1>
    <input @input="setMoneyToStore" type="number" v-model="inputMoney" />VNĐ
    <div class="details">
      <button @click="show = !show" class="button-17" role="button">For more details</button>
    </div>
  </div>
  <div style="display: flex; justify-content: center">
    <Transition name="slide-fade">
      <div v-show="show" class="popup-img">
        <img src="./assets/Jars-rule-financial.png" alt="Jars rule financial">
      </div>
    </Transition>
  </div>
  <Transition name="slide-fade">
    <div class="jar-container" v-show="!show">
      <div v-for="(jar, index) in jars" :key="index" class="jar">
        <jarComponentVue
          :title="jar.name.toUpperCase()"
          :percent="jar.per"
          :useFor="jar.useFor"
          :detailsMoney="money[jar.name]"
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  text-align: center;
}
.header h1 {
  text-transform: uppercase;
}
.header input {
  border: none;
  border-bottom: 2px solid #41b883;
  padding: 0.5rem;
  font-size: 1.2rem;
}
.header input:focus {
  outline: none;
}
.header .details{
  margin-top: 0.5rem;
}
.jar-container {
  margin: 3rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1280px;
}
.jar {
  margin: 2rem;
  padding: 2rem;
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px,
    rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px,
    rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px,
    rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px,
    rgb(255, 85, 85) 40px -40px;
  min-width: 260px;
  min-height: 260px;
  max-width: 280px;
  max-height: 280px;
}
.button-17 {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px, rgba(0, 0, 0, 0.14) 0 6px 10px 0,
    rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms,
    transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;
}

.button-17:hover {
  background: #f6f9fe;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0, rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0, rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0, rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0, rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0, rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.popup-img{
  z-index: 999;
  margin-top: 8px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  display: inline-block;
}
@media screen and (max-width: 992px) {
  .jar-container {
    width: 100%;
  }
  img{
    width: 100%;
  }
}
</style>

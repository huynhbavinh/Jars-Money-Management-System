<script>
  import { ref, } from 'vue';
  //
  import {useMoneyStore} from './stores/money'
  import jarComponentVue from "./components/jarComponent.vue";
  export default {
    setup(){
      const money = useMoneyStore();
      const inputMoney = ref(0);
      function setMoneyToStore(){
        if(inputMoney.value < 999999999){
          money.setMoney(inputMoney.value)
        } else {
          alert("Stop that's a lot of money")
        }
      }
      const jars = [
        {name:'necessities', per: '55%', useFor:['Food', 'Rent', 'Electricity', 'Bills']},
        {name:'longTerm', per: '10%', useFor:['Car', 'House', 'Vocations', 'Medical']},
        {name:'play', per: '10%', useFor:['Myself fund', 'Leisurely Expense']},
        {name:'education', per: '10%', useFor:['Coaching', 'Mentoring', 'Books', 'Courses']},
        {name:'financial', per: '10%', useFor:['Stocks', 'Mutual Funds', 'Other']},
        {name:'give', per: '5%', useFor:['Charitable Donations']},
      ]
      return {
        jars,
        setMoneyToStore,
        inputMoney,
        money,
      }
    },
    components:{
      jarComponentVue
    },
  }
</script>

<template>
  <div class="header">
    <h1>Jars Money Management System</h1>
    <input @input="setMoneyToStore" type="number" v-model="inputMoney">VNĐ
  </div>
  <div class="jar-container">
    <div
      v-for="(jar, index) in jars"
      :key="index"
      class="jar"
    >
      <jarComponentVue 
        :title="jar.name.toUpperCase()" 
        :percent="jar.per" 
        :useFor="jar.useFor" 
        :detailsMoney="money[jar.name]"
        />
    </div>
  </div>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .header{
    text-align: center
  }
  .header h1 {
    text-transform: uppercase;
  }
  .header input {
    border: none;
    border-bottom: 2px solid #41B883;
    padding: 0.5rem;
    font-size: 1.2rem;
  }
  .header input:focus{
    outline: none;
  }
  .jar-container{
    margin: 3rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 1280px;
  }
  .jar{
    margin: 2rem;
    padding: 2rem;
    box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;
    min-width: 260px;
    min-height: 260px;
    max-width: 280px;
    max-height: 280px;

  }
</style>


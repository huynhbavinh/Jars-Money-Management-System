'use strict';
import { defineStore } from 'pinia';

export const useMoneyStore = defineStore('financial',{
    state:()=>{
        return {
            money: 0,
        }
    },
    actions:{
        setMoney(inputMoney){
            this.money = inputMoney;
        }
    },
    getters:{
        necessities:(state) => state.money * 55 / 100,
        longTerm:(state) => state.money * 15 / 100,
        play:(state) => state.money * 10 / 100,
        education:(state) => state.money * 10 / 100,
        financial:(state) => state.money * 10 / 100,
        give:(state) => state.money * 5 / 100,
    }
})

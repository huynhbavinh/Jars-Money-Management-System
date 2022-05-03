<script>
    export default {
        props: ['title','percent','useFor','detailsMoney'],
        setup(){
            return {}
        }
    }
</script>

<template>
    <div class="container">
        <h2 class="title">{{ title }}</h2>
        <p class="suggest">Use this for:</p>
        <div>
            <h3><span>{{ percent }}</span> of your income</h3>
            <ul>
                <li v-for="(goal, index) in useFor" :key="index"
                >{{ goal }}</li>
            </ul>
        </div>
        <h1>{{ detailsMoney.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</h1>
    </div>
</template>

<style scoped>
    *{
        list-style: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        text-align: center;
    }
    .title{
        margin: bottom 0.2rem;
    }
    ul{ 
        min-height: 77px;
    }
    ul li {
        text-align: left;
    }
    ul li::before{
        content: "\00BB";
        margin: 8px;
        color: #41B883;
    }
    .suggest{
        color:gray;
    }
    h3 span{
        color: orange;
        font-size: 28px;
    }
</style>

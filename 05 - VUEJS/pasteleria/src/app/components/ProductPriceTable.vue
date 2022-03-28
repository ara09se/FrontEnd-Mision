<script setup>
import { ref } from 'vue'

defineProps({
  products:Array,
  title:String,
})

console.log(document.body.clientWidth)
const count = ref(0)
const totalDots =  (document.body.clientWidth > 600)? 60 : 30
const formatter = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
});
</script>

<template>
  <div>
    <h3>{{title}}</h3>
    <p v-for="product in products">{{
        product.name +
        '.'.repeat(totalDots - product.name.length - formatter.format(product.price).length) +
        formatter.format(product.price)
    }}</p>
  </div>
</template>

<style scoped>
</style>

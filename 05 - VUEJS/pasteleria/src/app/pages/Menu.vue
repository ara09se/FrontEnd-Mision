
<script setup>
    import ProductPriceTable from '../components/ProductPriceTable.vue'
    import FlavorRepository from '../repositories/Flavor.repository'
    import AccesoryRepository from '../repositories/Accesory.repository'
    import { inject } from 'vue'

    const flavors = inject(FlavorRepository.name).getList()
    const accesories = inject(AccesoryRepository.name).getList()
</script>

<template>
    <h2 style="margin-bottom: 35px;">Menú pasteles</h2>
    <div class="menu">
        <ProductPriceTable
            title="SABORES"
            :products="flavors"
        />
        <ProductPriceTable
            title="ADORNOS"
            :products="accesories"
            style="margin-top: 35px"
        />

        <router-link class="linkMenu" tag="button" to="/pedido">
            <button>Realizar pedido</button>
        </router-link>
    </div>
</template>

<style scoped>
    .menu{
        width: fit-content;
        margin: auto;
    }
    a.linkMenu {
        display: block;
        width: 100%;
        margin-top: 6vh;
    }
    button{
          margin: auto;
    }
    h2{
        margin: 5vh 9vh;
    }
</style>
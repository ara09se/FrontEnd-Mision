<script setup>
import { inject, ref } from 'vue'

import FlavorRepository from '../repositories/Flavor.repository'
import AccesoryRepository from '../repositories/Accesory.repository'
import OrderRepository from '../repositories/Order.repository'

const flavors = inject(FlavorRepository.name).getList()
const accesories = inject(AccesoryRepository.name).getList()
const orders = inject(OrderRepository.name).getList()
</script>
<template>
    <div class="backoffice">
        <h2>Administrador</h2>

        <h3 class="tabletitles">Disponibilidad de sabores</h3>
        <table>
            <tr>
                <th>Sabor</th>
                <th>Cantidad</th>
            </tr>
            <tr v-for="flavor in flavors">
                <td>{{flavor.name}}</td>
                <td>{{flavor.quantity}}</td>
            </tr>
        </table>

        <h3 class="tabletitles">Disponibilidad de adornos</h3>
        <table>
            <tr>
                <th>Adornos</th>
                <th>Cantidad</th>
                <th>Unidad</th>
            </tr>
            <tr v-for="accesory in accesories">
                <td>{{accesory.name}}</td>
                <td>{{accesory.quantity}}</td>
                <td>{{accesory.unity}}</td>
            </tr>
        </table>
        <h3 class="tabletitles">Pedidos pendientes</h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>Detalles</th>
                <th>Sabor</th>
                <th>Adornos</th>
            </tr>
            <tr v-for="order in orders">
                <td>{{order.contactInfo.name}}</td>
                <td><a :href="`callto:${order.contactInfo.phone}`">{{order.contactInfo.phone}}</a></td>
                <td>{{order.contactInfo.email}}</td>
                <td>{{order.description}}</td>
                <td>{{order.flavors.join(', ')}}</td>
                <td>{{order.accesories.join(", ")}}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    div.backoffice{
        width:100%
    }
    h2{
        margin-left: 15px;
        margin-top: 35px;
    }
    h3.tabletitles {
        margin-left: 15px;
        margin-top: 35px;
    }
    table {
        font-family: Arial, sans-serif;
        font-size: 15px;
        border-collapse: collapse;
        margin-top: 35px;
        margin: 0 auto;
        width: 75%;
    }
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    td{
        border: 1px solid #dddddd;
        font-family:Courier New;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #3ba9ad67;
        font-family:Courier New;
    }
    @media max-width: 300px) {
        table{
            width: 80%;
        }
    }
</style>
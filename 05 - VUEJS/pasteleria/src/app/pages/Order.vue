<script setup>
    import { inject, ref } from 'vue'
    import Swal from 'sweetalert2'

    import FlavorRepository from '../repositories/Flavor.repository'
    import AccesoryRepository from '../repositories/Accesory.repository'
    import OrderRepository from '../repositories/Order.repository'
    import { router } from '../routes/index'
    import Order from '../models/Order'

    const flavors = inject(FlavorRepository.name).getList()
    const accesories = inject(AccesoryRepository.name).getList()
    const orderRepo = inject(OrderRepository.name)
    const order = ref(new Order())

    function save(){ 
        if (!order.value.isValid()) {
            Swal.fire({
                title: 'Error!',
                text: 'Necesitamos tus datos de contacto y al menos un sabor de pan.',
                icon:'error',
                confirmButtonText: 'Ok',
            })
            return
        }
        
        orderRepo.save(order.value)
        Swal.fire({
            title: 'Éxito!',
            text: 'Tu orden se a guardado',
            icon:'success',
            confirmButtonText: 'Ok',
        })
        router.push({name: 'home'})
    }
    function clean(){
        order.value.reset()
    }
</script>

<template>
<h2>Realiza tu pedido</h2>
<div class="orderContainer">
    <form @submit.prevent="save">
        <div class="selection">
            <h3 class="subtitle">Selecciona los sabores de tu pan</h3>
            <div class="checkboxContainer" v-for="flavor in flavors">
                <input type="checkbox" :value="flavor.name" v-model="order.flavors"/>
                <label class="checkbox1">{{flavor.name}}</label>
            </div>
        </div>
        <div>
            <h3 class="subtitle">Selecciona los adornos para darle estilo</h3>
            <div class="checkboxContainer"  v-for="accesory in accesories">
                <input type="checkbox" :value="accesory.name" v-model="order.accesories"/>
                <label class="checkbox1">{{accesory.name}}</label>
            </div>
        </div>
        <div>
            <h3 class="subtitle">Datos de contacto</h3>
            <div class="inputContainer">
                <label class="checkbox1" for="nombre">Nombre:</label>
                <input class="contactform"
                    type="text"
                    v-model="order.contactInfo.name"
                    required>
            </div>
            <div class="inputContainer">
                <label class="checkbox1" for="nombre">Teléfono:</label>
                <input class="contactform" type="text" v-model="order.contactInfo.phone" required>
            </div>
            <div class="inputContainer">
                <label class="checkbox1" for="nombre">Correo:</label>
                <input class="contactform" type="text" v-model="order.contactInfo.email">
            </div>
                <label class="checkbox1">Notas:</label>
                <textarea placeholder="Describe detalladamente como te gustaría que fuera tu pastel" v-model="order.description" rows="4" cols="50"></textarea> <br><br>       
                <p style="font-weight: 600;margin-bottom: 20px;">Tu pedido:</p>
                <dl>
                    <dt>Sabores</dt>
                    <dd v-for="flavor in order.flavors">❤ {{flavor}}</dd>
                    <dt> Adornos</dt>
                    <dd v-for="accesory in order.accesories">❤ {{accesory}}</dd>
                </dl>


                <button>Guardar pedido</button>
                <button class="cleanbutton" @click="clean">Borrar todo</button>
        </div>
    </form>
</div>
</template>

<style scoped>
    div.orderContainer{
        display:flex;
        flex-direction: column;
        width: fit-content;
        max-width: 84%;
        margin: auto;
    }
    div.inputContainer{
        display: flex;
    }
    div.inputContainer label{
        width: 90px;
    }
    button.cleanbutton{
        background-color: var(--complementary-color);
    }
    input.contactform {
        margin-bottom: 20px;
    }
    textarea {
        font-family:Courier New;
        font-size:12pt;
        max-width:90%;
        margin: 25px 5%;
    }
    dt {
        font-size:12pt;
        font-weight: 600;
        margin-left: 15px;
        margin-bottom: 10px;
        font-family:Courier New;
    }
    dd {
        font-size:12pt;
        margin-bottom: 10px;
        font-family:Courier New;
    }
    h3.subtitle{
        margin-top:30px;
        margin-bottom: 35px;
    }
    h2{
        margin:3vh 6vh;
    }
    @media (max-width: 600px) {
        button{
            margin: 15px auto;
            display:block;
        }
    }
</style>
<script setup>
</script>

<template>
<div class=home>
    <div class=homeText>
        <h1>Bienvenido a Harina y Miel</h1>
        <p>Tenemos las siguientes opciones</p>
        <div class=hrefbutton>
            <router-link tag="button" to="/menu">
                <button>Nuestro menú</button>
            </router-link>
            <router-link tag="button" to="/backoffice">
                <button>Backoffice Pastelero</button>
            </router-link>
        </div>
    </div>
</div>
</template>

<style scoped>
    div.home{
        display:flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    div.homeText{
        text-align: center;
        height: fit-content;
    }
    div.hrefbutton{
        justify-content: center;
        display: flex;
        flex-direction: row;
        margin-top: 4vh;
    }
</style>
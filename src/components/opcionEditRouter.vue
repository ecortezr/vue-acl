<template>
    <aside class="right-panel">

        <editcomponente>

            <!-- Título -->
            <template slot="titulo">Router - Editando la opción: {{id}} con descripción {{descripcion}}</template>
            <!-- Ícono para cerrar -->
            <button slot="icono" class="delete" @click='regresar'></button>
            <!-- Cuerpo -->
            <div>
                <!-- Formulario para edición -->
                Formulario
            </div>
            <template slot="footer">
                <!-- Posibles Acciones para Guardar -->
                <a class="card-footer-item">Guardar</a>
                <a class="card-footer-item" @click='regresar'>Cancelar</a>
            </template>

        </editcomponente>

    </aside>
</template>
<script>

import editcomponente from './editComponent.vue';

export default {
    components: { editcomponente },
    props: ['id', 'codigo', 'descripcion'],
    created() {

        console.info('Cargó EditRouter');
    },
    methods: {
        regresar() {
            console.log('Sí pasó por regresar');
            this.$router.push({ name: 'opcionlistarouter'  }, (router) => {
                console.log('pasó');
                console.log(router);
            }, (router) => {
                console.log('falló');
                console.log(router);
            });

            //this.$router.replace('/opcion');
            //this.$router.go(-1);
        }
    }
}
</script>

<style>
.right-panel {
    position: fixed;
    top: 55px;
    right: 0px;
    height: 100%;
    width: 500px;
    background: #ffffff;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 5px;
    -webkit-overflow-scrolling: touch;
    /*box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);*/
    box-shadow: 0 -3px 5px 5px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
}
</style>
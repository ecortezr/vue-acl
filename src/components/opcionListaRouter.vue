<template>
    <section>
        <div class="columns">
            <div class="column">
                <section>
                    <b-table :data="opciones" :selected.sync="selected" default-sort="codigo">

                        <template scope="props">

                            <b-table-column field="codigo" label="Código" width="40" sortable numeric>
                                {{ props.row.codigo }}
                            </b-table-column>

                            <b-table-column field="descripcion" label="Descripción" sortable>
                                {{ props.row.descripcion }}
                            </b-table-column>

                        </template>
                    </b-table>
                </section>
            </div>
            <template v-if="Object.keys(selected).length">
                <transition name="custom-classes-transition" enter-active-class="animated zoomInRight" leave-active-class="animated zoomOutRight" appear>

                    <router-view></router-view>

                </transition>
            </template>
        </div>
    </section>
</template>
<script>

export default {

    data() {
        return {
            selected: {},
            opciones: [
                { codigo: '01', descripcion: 'Agregar' },
                { codigo: '02', descripcion: 'Editar' },
                { codigo: '03', descripcion: 'Eliminar' },
                { codigo: '04', descripcion: 'Consultar' },
            ]
        }
    },
    methods: {

    },
    watch: {
        selected: function (val) {
            this.$router.push({ name: 'opcionedit', params: val});
        }
    }

}
</script>
<style>
/* Transition */

.aparecer-enter {
    opacity: 0;
}

.aparecer-enter-active {
    transition: opacity 1s;
}

.aparecer-leave-to {
    opacity: 0;
}

.aparecer-leave-active {
    transition: opacity 1s;
}

</style>
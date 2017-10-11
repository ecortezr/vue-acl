<template>
    <section>
        <div class="columns">
            <div class="column">
                <section>
                    <b-table :data="opciones" :selected.sync="selected" default-sort="id" :mobile-cards="true">

                        <template scope="props">

                            <b-table-column field="id" label="ID" width="20" sortable numeric>
                                {{ props.row.id }}
                            </b-table-column>

                            <b-table-column field="codigo" label="Código" sortable numeric>
                                {{ props.row.codigo }}
                            </b-table-column>

                            <b-table-column field="descripcion" label="Descripción" sortable>
                                {{ props.row.descripcion }}
                            </b-table-column>

                            <b-table-column field="codigo2" label="Código 2" sortable numeric>
                                {{ props.row.codigo2 }}
                            </b-table-column>

                            <b-table-column field="descripcion2" label="Descripción 2" sortable>
                                {{ props.row.descripcion2 }}
                            </b-table-column>

                            <b-table-column field="codigo3" label="Código 3" sortable numeric>
                                {{ props.row.codigo3 }}
                            </b-table-column>

                            <b-table-column field="descripcion3" label="Descripción 3" sortable>
                                {{ props.row.descripcion3 }}
                            </b-table-column>

                        </template>
                    </b-table>
                </section>
            </div>
        </div>
        <template v-if="Object.keys(selected).length">
            <transition name="custom-classes-transition" enter-active-class="animated zoomInRight" leave-active-class="animated zoomOutRight" appear>

                <router-view></router-view>

            </transition>
        </template>
    </section>
</template>
<script>

export default {

    data() {
        return {
            selected: {},
            opciones: [
                { id: 1, codigo: 'C', descripcion: 'Agregar', codigo2: '01-01', descripcion2: 'Agregar 2', codigo3: '01-01-01', descripcion3: 'Agregar 3' },
                { id: 2, codigo: 'U', descripcion: 'Editar', codigo2: '02-01', descripcion2: 'Editar 2', codigo3: '02-01-01', descripcion3: 'Editar 3' },
                { id: 3, codigo: 'D', descripcion: 'Eliminar', codigo2: '03-01', descripcion2: 'Eliminar 2', codigo3: '03-01-01', descripcion3: 'Eliminar 3' },
                { id: 4, codigo: 'R', descripcion: 'Consultar', codigo2: '04-01', descripcion2: 'Consultar 2', codigo3: '04-01-01', descripcion3: 'Consultar 3' },
            ]
        }
    },
    methods: {

    },
    watch: {
        selected: function(val) {
            this.$router.push({ name: 'opcionedit', params: val });
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
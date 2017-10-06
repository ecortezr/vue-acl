<template>
    <section>
        <div class="columns">
            <div class="column">
                <template>
                    <section>
                        <!-- <b-field grouped group-multiline>
                                            <b-select >
                                                <option value="asc">Default sort direction: ASC</option>
                                                <option value="desc">Default sort direction: DESC</option>
                                            </b-select>
                                            <b-select>
                                                <option value="5">5 per page</option>
                                                <option value="10">10 per page</option>
                                                <option value="15">15 per page</option>
                                                <option value="20">20 per page</option>
                                            </b-select>
                                            <div class="control is-flex">
                                                <b-switch>Paginated</b-switch>
                                            </div>
                                            <div class="control is-flex">
                                                <b-switch >Simple pagination</b-switch>
                                            </div>
                                        </b-field> -->

                        <!-- <b-table :data="opciones" :paginated="isPaginated" :per-page="perPage" :pagination-simple="isPaginationSimple" :default-sort-direction="defaultSortDirection" default-sort="user.first_name"> -->
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
                </template>
            </div>
            <template v-if="Object.keys(selected).length">
                <transition name="aparecer" appear>
                <!-- <transition name="custom-classes-transition"
                                enter-active-class="animated zoomInRight"
                                leave-active-class="animated zoomOutRight" appear> -->

                    <opcionedit>

                        <template slot="titulo">Edición de Opción</template>
                        <button slot="icono" class="delete" @click='selected = {}'></button>
                        <div>
                            <p>Formulario</p> 
                            <p>Código: {{selected.codigo}}</p>
                            <p>Descripción: {{selected.descripcion}}</p>
                        </div>
                        <template slot="footer">
                            <a class="card-footer-item" @click='guardar()'>Guardar</a>
                            <a class="card-footer-item" @click='selected = {}'>Cancelar</a>
                        </template>

                    </opcionedit>

                </transition>
            </template>
        </div>
    </section>
</template>
<script>

import opcionedit from './opcionEdit.vue';

export default {
    components: { opcionedit },
    data() {
        return {
            edicionPanel: false,
            selected : {},
            opciones: [
                { codigo: '01', descripcion: 'Agregar' },
                { codigo: '02', descripcion: 'Editar' },
                { codigo: '03', descripcion: 'Eliminar' },
                { codigo: '04', descripcion: 'Consultar' },
            ]
        }
    },
    methods: {
        guardar() {
            
            console.info('Aquí se programará el guardar del componente');
            // this.selected tiene el elemento que se está agregando
            
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

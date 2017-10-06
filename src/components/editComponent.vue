<template>
    <!-- Formato para agregar/editar un registro -->
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                <slot name="titulo"></slot>
            </p>
            <a class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <slot name="icono"></slot>
                </span>
            </a>
        </header>
        <div class="card-content">
            <div class="content">
                <slot></slot>
            </div>
        </div>
        <footer class="card-footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>

export default {

}
</script>

<style>

</style>
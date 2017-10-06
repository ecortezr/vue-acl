<template>
    <aside class="right-panel box">
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
    </aside>
</template>
<script>

export default {

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
    box-shadow: 0 -3px 5px 5px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
}
</style>
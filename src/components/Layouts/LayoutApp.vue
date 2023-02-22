<template>
    <div class="wrap">
        <NavMenu/>
        <div>
            <NavHeader/>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import NavMenu from "./NavMenu.vue";
import NavHeader from "./NavHeader.vue";
export default {
    components: {
        NavMenu,
        NavHeader
    }
}
</script>
<style>
    .wrap {
        display: flex;
    }
</style>
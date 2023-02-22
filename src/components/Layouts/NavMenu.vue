<template>
    <nav class="flex flex-col gap-6 bg-white w-1/6 h-screen p-8">
        <h4 class="text-center font-inter">Trade Market</h4>
        <router-link class="text-gray h-[56px] flex items-center py-4 px-5 rounded-lg text-base font-medium font-inter" v-for="menu in menus" :key="menu.id" :to="menu.link">{{menu.title}}</router-link>
    </nav>
</template>

<script>
import Menu from "@/api/Menu";
export default {
    data() {
        return {
            menus: Menu,
        }
    },
}
</script>
<style lang="scss">
    nav {
        a {
            &.router-link-exact-active {
            color: #6425FE;
            background-color: #EFE9FF;
            }
        }
    }
</style>
<template>
    <div>
        <input placeholder="isi nama" v-model="name"/>
        hallo nama saya {{ name }}
        <button @click="ubahNama">ubah nama</button>
        <a v-bind:href="esLint">pindah</a>
        <Card/>
    </div>
</template>

<script>
import Card from "@/components/CardComponent.vue"
export default {
    name: "ContactView",
    components: {
        Card,
    },
    data() {
        return {
            name: "",
            esLint: "https://eslint.vuejs.org/rules/multi-word-component-names.html",
        }
    },
    methods: {
        ubahNama() {
            this.name = "lugowo"
        }
    }
}
</script>
<style>
    
</style>
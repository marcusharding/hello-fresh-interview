<template>
    <div class="app">

        <skip-link />
        
        <main>
            <Nuxt />
        </main>
    </div>
</template>

<script>

// Components
import SkipLink from "@/components/SkipLink.vue";

export default {
    name: "default",
    components: { SkipLink }
}

</script>

<style lang="scss" scoped>

main {
    height: 100%;
}

</style>
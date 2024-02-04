<template>
    <div class="index"><h1>Hello Fresh Interview</h1></div>
</template>

<script>
export default {
    name: 'IndexPage',
    methods: {

        init() { console.log('hello') }
    },
    mounted() { this.init() }
}
</script>

<style lang="scss" scoped>

.index {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
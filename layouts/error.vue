<template>
    <section class="page-404">

        <h1>Whoops,<br />looks like you're lost.</h1>

        <NuxtLink to="/">
            Go Home
        </NuxtLink>
        
    </section>
</template>

<script>

export default {
    name: "Page404"
}

</script>

<style lang="scss" scoped>

.page-404 {
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
}

</style>
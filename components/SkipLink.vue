<template>
    <a class="skip-link uppercase bold" href="#main">Skip to main content</a>
</template>

<script>

export default {
    name: "SkipLink"
}

</script>

<style lang="scss" scoped>

.skip-link {
    position: absolute;
    top: -50px;
    right: 55px;
    left: auto;

    z-index: 100;

    padding: 10px 30px;
    
    background-color: #7393B3;
    color: white;
    opacity: 0;
    font-size: rem(14);

    border-radius: 16px;

    z-index: 1000;

    transition: all 0.5s ease;
}

.skip-link:focus {
    top: 20px;
    
    opacity: 1;
}

</style>
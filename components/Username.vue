<template>
    <div>
        <div class="message">
            {{ message }}
        </div>
        Enter your username: <input v-model="username">
        <div
            v-if="error"
            class="error"
        >
            Please enter a username with at least seven letters.
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextRender',
    data () {
        return {
            message: 'Welcome to the user name example',
            username: ''
        }
    },
    computed: {
        error () {
            return this.username.trim().length < 7
        }
    }
}
</script>
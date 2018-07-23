<template>
    <header>
        <h1>
            TODO it!
        </h1>
    </header>
</template>

<script>
import TodoInput from "./TodoInput.vue";

export default {
    components: {
        TodoInput
    }
};
</script>

<style scoped>
h1 {
    color: #2f3b52;
    font-weight: 900;
    margin: 2.4rem 0 1.5rem;
}
</style>

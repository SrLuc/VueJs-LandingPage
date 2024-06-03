<template>
    <footer>
        <div v-for="user in users" :key="user.id">
            <h2>{{ user.name }}</h2>
            <p>{{ user.email }}</p>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'
const users = ref([])
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => users.value = data)
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

div {
    flex-direction: column;
    background-color: #f4f4f4;
    width: 20%;
    padding: 1%;
    margin: 10px;
    border-radius: 0.5rem;
}


@media screen and (max-width: 768px) {
    div {
        width: 45%;
    }

    h2{
        font-size: 15px;
    }

    p{
        font-size: 13px;
    }

}
</style>
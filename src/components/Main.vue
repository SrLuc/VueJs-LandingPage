<template>
    <main>
        <article>
            <h1>Discover User Behavior</h1>
            <p>Gain valuable insights into every visit to improve performance, rankings and user experience.</p>
            <button>Get Started</button>
        </article>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 70vh;
    font-size: 15px;
    border-radius: 50px;
    margin: 10px;
    background-color: #F3F3F3;
}

article {
    width: 50%;
    padding: 20px;
}

@media (max-width: 768px) {
    article {
        width:100%;
    }
}

h1 {
    font-size: 45px;
    margin: 0;
    color: #172B4D;
}

p {
    font-size: large;
    margin: 0;
    letter-spacing: 1px
}

button {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: bold;
    border: 1px solid #333;
    color:  #172B4D;
    margin-top: 20px;
    transition: 0.3s all;
    font-weight: bold;
    font-size: 17px;
}

button:hover {
    background-color: #172B4D;
    color: white;
}
</style>
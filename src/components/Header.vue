<template>
    <header class="container">
        <div class="left-container">
            <img src="https://img.icons8.com/?size=100&id=AFpQAp8iONyr&format=png&color=000000" alt="">
            <h3>ThunderCore</h3>
        </div>
        <nav>
            <ul class="links-container">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div class="logs-container">
            <h4>Login</h4>
            <p>Get Started</p>
        </div>
    </header>
</template>

<script setup>


</script>

<style lang="scss" scoped>
@mixin spacing($vert, $hori) {
    padding: $vert;
    margin: $hori;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F3F3F3;
    font-size: 12px;    
    border-radius: 50px;
    @include spacing(2px, 10px);
}

.left-container {
    @extend .container;

    h1 {
        @include spacing(0, 2px);
    }

    img {
        width: 45px;
        height: 45px;
        @include spacing(0, 5px);
    }
}

.links-container {
    @extend .container;
    justify-content: space-between;
    list-style: none;

    li {
        cursor: pointer;
        margin-left: 10px;
        font-size: 15px;
    }

}

.logs-container {
    @extend .container;
    @include spacing(0, 5px);

    h4 {
        cursor: pointer;
        @include spacing(0, 5px);
    }

    p {
        cursor: pointer;
        @include spacing(15px, 5px);
        border-radius: 40px;
        font-weight: bold;
        border: 1px solid #333;
    }

    p:hover{
        background-color: #172B4D;
        color: white;
        transition: all 0.2s ease-in-out;
    }
}
</style>
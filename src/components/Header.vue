<template>
    <header class="container">
        <div class="left-container">
            <img src="https://img.icons8.com/?size=100&id=AFpQAp8iONyr&format=png&color=000000" alt="">
            <h2>ThunderCore</h2>
        </div>
        <nav>
            <ul class="links-container">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div class="logs-container">
            <p>Login</p>
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
    @include spacing(5px, 0);
}

.left-container {
    @extend .container;

    h1 {
        @include spacing(0, 2px);
    }

    img {
        width: 50px;
        height: 50px;
        @include spacing(0, 5px);
    }
}

.links-container {
    @extend .container;
    justify-content: space-between;
    list-style: none;

    li {
        cursor: pointer;
        @include spacing(0, 5px);
    }

}

.logs-container {
    @extend .container;
    @include spacing(0, 5px);

    p {
        cursor: pointer;
        @include spacing(0, 5px);
    }
}
</style>
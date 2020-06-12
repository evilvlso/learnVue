<template>
    <div id="app">
            <Header />
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>


<script>
    // import NotFound from "./components/views/NotFound"
    import Header from "./components/Header"
    export default {
        components: {
        //    Home,
        Header,
        }
    }
</script>


<style  scoped>
.container{
    margin : 20px auto;
}
</style>
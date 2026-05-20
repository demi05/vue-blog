<template>
<div class="app">

<nav class="navbar">

<div class="logo">
VueBlog
</div>

<router-link to="/">
Home
</router-link>

</nav>

<main>

<Suspense>

<template #default>

<ErrorBoundary>

<router-view/>

</ErrorBoundary>

</template>

<template #fallback>

<Loading/>

</template>

</Suspense>

</main>

</div>
</template>

<script setup lang="ts">
import Loading from "./components/Loading.vue"
import ErrorBoundary from "./components/ErrorBoundary.vue"
</script>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Arial, Helvetica, sans-serif;
background:linear-gradient(
135deg,
#667eea,
#764ba2
);
min-height:100vh;
}

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 50px;
background:white;
box-shadow:0 4px 15px rgba(0,0,0,.1);
}

.logo{
font-size:24px;
font-weight:bold;
color:#667eea;
}

.navbar a{
text-decoration:none;
color:#444;
font-weight:600;
}

main{
padding:40px;
}

</style>
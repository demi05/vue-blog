<template>

<div class="notfound">

<h1>

404

</h1>

<h2>

Oops...

Page Not Found

</h2>

<p>

The page you are trying to visit does not exist.

</p>

<router-link
to="/"
class="btn"
>

Return Home

</router-link>

</div>

</template>

<style scoped>

.notfound{

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

height:70vh;

text-align:center;

color:white;

}

.notfound h1{

font-size:120px;

margin-bottom:10px;

}

.notfound h2{

font-size:35px;

margin-bottom:20px;
}

.notfound p{

margin-bottom:30px;
}

.btn{

padding:15px 25px;

background:white;

color:#667eea;

text-decoration:none;

border-radius:12px;

font-weight:bold;
}

</style>
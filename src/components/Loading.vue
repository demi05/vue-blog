<template>

<div class="loading">

<div class="spinner"></div>

<p>Loading content...</p>

</div>

</template>

<style scoped>

.loading{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:60vh;
}

.spinner{
width:60px;
height:60px;
border:6px solid white;
border-top:6px solid #667eea;
border-radius:50%;

animation:spin 1s linear infinite;
}

p{
margin-top:20px;
color:white;
font-size:20px;
}

@keyframes spin{

100%{
transform:rotate(360deg);
}

}

</style>
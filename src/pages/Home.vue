<script setup lang="ts">

import {ref,onMounted} from "vue"
import {getPosts} from "../../services/api"

const posts = ref<any[]>([])
const error = ref("")
const loading = ref(true)

onMounted(async()=>{

try{

const data = await getPosts()

posts.value=data.data || data

}

catch{

error.value="Unable to load posts"

}

finally{

loading.value=false

}

})

</script>

<template>

<div>

<h1 class="title">
Latest Blog Posts
</h1>

<p class="subtitle">
Explore articles fetched from the API
</p>

<p v-if="loading">
Loading...
</p>

<p v-if="error">

{{error}}

</p>

<div class="grid">

<div
v-for="post in posts"
:key="post.id"
class="card"
>

<h2>

{{post.title}}

</h2>

<p>

{{post.content?.slice(0,120)}}

...

</p>

<router-link
:to="`/post/${post.id}`"
class="btn"
>

Read Article

</router-link>

</div>

</div>

</div>

</template>

<style scoped>

.title{
font-size:42px;
color:white;
margin-bottom:10px;
}

.subtitle{
color:white;
margin-bottom:30px;
}

.grid{
display:grid;

grid-template-columns:
repeat(
auto-fit,
minmax(320px,1fr)
);

gap:25px;
}

.card{

background:white;

padding:25px;

border-radius:20px;

box-shadow:
0 10px 25px rgba(
0,
0,
0,
.12
);

transition:.3s;
}

.card:hover{

transform:translateY(-8px);

}

.card h2{
margin-bottom:15px;
color:#444;
}

.card p{
line-height:1.7;
margin-bottom:20px;
color:#666;
}

.btn{

display:inline-block;

padding:12px 20px;

background:#667eea;

color:white;

text-decoration:none;

border-radius:10px;

}

</style>
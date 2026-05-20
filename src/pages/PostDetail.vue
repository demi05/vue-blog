<script setup lang="ts">

import {
ref,
onMounted,
computed
} from "vue"

import {
useRoute,
useRouter
} from "vue-router"

import {
getSinglePost
} from "../../services/api"

const route = useRoute()
const router = useRouter()

const post = ref<any>(null)

onMounted(async()=>{

post.value =
await getSinglePost(
route.params.id as string
)

})

const shortContent = computed(()=>{

if(!post.value?.content)
return []

return post.value.content
.split(".")
.filter(
(text:string)=>
text.trim()
)
.slice(0,5)

})

</script>

<template>

<div class="container">

<button
@click="router.back()"
class="back"
>

← Back

</button>

<div
v-if="post"
class="card"
>

<div class="badge">
ARTICLE
</div>

<h1>

{{post.title}}

</h1>

<div class="divider"></div>

<p
v-for="(
paragraph,
index
)
in shortContent"
:key="index"
class="paragraph"
>

{{paragraph}}.

</p>

</div>

</div>

</template>

<style scoped>

.container{

max-width:760px;

margin:auto;

padding:20px;

}

.back{

padding:12px 18px;

border:none;

background:white;

border-radius:12px;

margin-bottom:20px;

cursor:pointer;

font-weight:600;

box-shadow:
0 5px 12px rgba(
0,
0,
0,
0.1
);

}

.card{

background:white;

padding:50px;

border-radius:30px;

box-shadow:
0 20px 40px rgba(
0,
0,
0,
0.12
);

}

.badge{

display:inline-block;

padding:8px 14px;

background:#667eea;

color:white;

border-radius:20px;

font-size:12px;

letter-spacing:2px;

margin-bottom:25px;

}

h1{

font-size:42px;

line-height:1.2;

margin-bottom:25px;

color:#222;

}

.divider{

height:4px;

width:80px;

background:#667eea;

border-radius:20px;

margin-bottom:30px;

}

.paragraph{

font-size:17px;

line-height:1.9;

color:#555;

margin-bottom:22px;

}

@media(
max-width:768px
){

.card{

padding:30px;

}

h1{

font-size:30px;

}

}

</style>
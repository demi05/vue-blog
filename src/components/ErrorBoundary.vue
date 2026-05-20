<script setup lang="ts">

import {
ref,
onErrorCaptured
}
from "vue"

const error=ref("")

onErrorCaptured((err)=>{

error.value=String(err)

return false

})

</script>

<template>

<div
v-if="error"
class="error"
>

<h2>

Something went wrong

</h2>

<p>

{{error}}

</p>

</div>

<slot v-else/>

</template>

<style scoped>

.error{

background:white;

padding:30px;

border-radius:20px;

text-align:center;

}

</style>
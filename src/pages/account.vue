<script setup>
import { supabase } from '@/app/lib/supabase';
import Button from '@/shared/ui/button/Button.vue';
import { onMounted, reactive, ref } from 'vue'; 
import { useRoute } from 'vue-router';
const data = ref(null); 
const me = ref(false);
const route = useRoute()
onMounted(async() => {
  if(JSON.parse(localStorage.getItem("  ")).id == route.params.id){
    me.value = true;
    data.value = JSON.parse(localStorage.getItem("currentUser"));
    console.log(data)
  } else{
    console.log(JSON.parse(localStorage.getItem("currentUser")).id )
    me.value = false
  }
})
</script>

<template>
  <div>
    <div v-if="me == true">
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/JPG_Test.jpg/800px-JPG_Test.jpg"/>
        <h1>{{ data.name }}</h1>
        <p>{{ data.email }}</p>
      </div>
      <RouterLink to="/edit/"><Button class="bg-green-400">Edit</Button></RouterLink>
    </div>
    <span v-else>it is not your account</span>
  </div>
</template>
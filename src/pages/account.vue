<template>
  <div>
    <span v-if="me">it is your account</span>
    <span v-else>it is not your account</span>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'; 
import { useRoute } from 'vue-router';
import { supabase } from '@/app/lib/supabase';
import { currentUser } from '@/entities/Person/main';
const me = ref(false);
const route = useRoute()

onMounted(() => {
  if(currentUser.id == route.params.id){
    me.value = true;
  } else{
    me.value = false
  }
})

</script>


<!-- <template>
  <div>
    <div v-if="me">
      <h1>{{ info.name }}</h1>
    </div>
    <span v-else>it is not your account</span>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'; 
import { useRoute } from 'vue-router';
import { supabase } from '@/app/lib/supabase';

const me = ref(false);
const route = useRoute()

onMounted(async() => {
  if(currentUser.id == route.params.id){
    me.value = true;
    let { data: info, error } = await supabase
  .from('info')
  .select('*')
  .eq("id", route.params.id)
  } else{
    me.value = false
  }
})

</script>
 -->
<template> 
  in development because rewrite on localStorage

</template>
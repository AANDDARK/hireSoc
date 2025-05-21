<template>
   <template>
  <div>
    <div v-if="me">This is your account!</div>
    <div v-else>This is not your account.</div>
  </div>
</template>
</template>

<script setup>
import { onMounted, ref } from 'vue'; 
import { useRoute } from 'vue-router';
import { supabase } from '@/supabase/supabase';

const me = ref(null);
const route = useRoute();

onMounted(async () => {
  const { data: { user } } = await supabase.auth.getUser();
  const rID = route.params.id;
  if (user.id == rID) {
    me.value = true;
  } else {
    me.value = false;
  }
});
</script>


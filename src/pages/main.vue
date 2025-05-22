<template>
    <div>
        <CardOfPerson name="John Doe" country="United States" city="New York" profession="Developer" avatar="https://via.placeholder.com/150" />
    </div>
</template>

<script setup>
import { currentUser, initUser } from '@/entities/Person/main';
import CardOfPerson from '@/widgets/cardOfPerson.vue'

import { supabase } from '@/app/lib/supabase';
import { onMounted } from 'vue';

  onMounted(async() => {
    const { data: { user } } = await supabase.auth.getUser()
    if(user){
    await initUser(`${user.id}`)
  }
  })
  console.log(currentUser)
</script>


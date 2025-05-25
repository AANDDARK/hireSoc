<template>
    <div>
        dasas
    </div>
    
</template>

<script setup>
import { initUser } from '@/entities/Person/main';
import { onMounted } from 'vue';
import { supabase } from '@/app/lib/supabase';
onMounted(async() => {
    await initUser("fsdsd")
}) 
</script>
    

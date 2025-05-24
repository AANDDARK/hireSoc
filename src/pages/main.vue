<template>
    <div>
        <CardOfPerson name="John Doe" country="United States" city="New York" profession="Developer" avatar="https://via.placeholder.com/150" />
    </div>
    
</template>

<script setup>
import { initUser } from '@/entities/Person/main';
import { onMounted } from 'vue';
onMounted(async() => {
    await initUser("fsdsd")
})
</script>
    

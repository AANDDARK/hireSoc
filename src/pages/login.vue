<script setup lang="ts">
import { supabase } from '@/app/lib/supabase';
import Button from '@/shared/ui/button/Button.vue';
import { FormField, FormItem, FormLabel, FormControl,  } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { ref } from 'vue';

const email = ref('');
const password = ref('')

const auth = async() => {
const { data, error } = await supabase.auth.signInWithPassword({
  email: `${email}`,
  password: `${password}`,
    })
const { data: { user } } = await supabase.auth.getUser()
    if(data){
        console.log(user)
    }
    if(error){
        console.log(error)
    }
}

</script>

<template>
    <form action="">
        <FormField name="login" >
            <FormItem>
                <h><FormLabel class="justify-center text-2xl italic font-bold">Login</FormLabel></h>   
                <FormControl>
                    <Input type="text" v-model="email" placeholder="email"/>
                    <Input type="text" v-model="password" placeholder="password"/>
                </FormControl>
                <Button class="bg-green-500 mt-4 justify-center hover:bg-green-700" @click="auth()">login</Button>
            </FormItem>
        </FormField>
    </form>
</template>



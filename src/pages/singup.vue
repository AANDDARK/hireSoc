<script setup lang="ts">
import { supabase } from '@/app/lib/supabase';
import Button from '@/shared/ui/button/Button.vue';
import { FormField, FormItem, FormLabel, FormControl,  } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { ref } from 'vue';

const surname = ref('');
const email = ref('');
const password = ref('')


const auth = async(e:any) => {
 const { data, error } = await supabase.auth.signUp({
  email: `${email.value}`,
  password: `${password.value}`,
  options: {
    data: {
      surname: `${surname.value}`,
    },
  },
});
  if(data){
    console.log(data)
  } 
  if(error){
    console.log(error)
  }
};

</script>

<template>
    <form @submit.prevent="auth">
      <FormField name="signup">
        <FormItem>
          <FormLabel class="justify-center text-2xl font-bold italic">Signup</FormLabel>
          <FormControl>
            <Input type="text" v-model="surname" placeholder="surname" />
            <Input type="text" v-model="email" placeholder="email" />
            <Input type="password" v-model="password" placeholder="password" />
          </FormControl>
          <Button type="submit" class="bg-green-500 mt-4 justify-center hover:bg-green-700">
            Signup
          </Button>
        </FormItem>
      </FormField>
    </form>
  </template>
  
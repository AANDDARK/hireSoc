<script setup lang="ts">
import { supabase } from '@/app/lib/supabase';
import { hashSHA256 } from '@/app/lib/utils';
import Button from '@/shared/ui/button/Button.vue';
import { FormField, FormItem, FormLabel, FormControl,  } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { ref } from 'vue';
import { z } from 'zod/v4';


const surname = ref('');
const email = ref('');
const phone = ref('');
const password = ref('')





const auth = async(e:any) => {
    e.preventDefault();
 const { data, error } = await supabase.auth.signUp({
  email: email.value,
  password: password.value,
  phone: phone.value,
  options: {
    data: {
      surname: surname.value,
    },
  },
});


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
            <Input type="text" v-model="phone" placeholder="phone" />
            <Input type="password" v-model="password" placeholder="password" />
          </FormControl>
          <Button type="submit" class="bg-green-500 mt-4 justify-center hover:bg-green-700">
            Signup
          </Button>
        </FormItem>
      </FormField>
    </form>
  </template>
  
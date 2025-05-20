<script setup lang="ts">
import { supabase } from '@/app/lib/supabase';
import Button from '@/shared/ui/button/Button.vue';
import { FormField, FormItem, FormLabel, FormControl,  } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { ref } from 'vue';
import { z } from 'zod/v4';


const surname = ref('');
const email = ref('');
const phone = ref('');
const password = ref('')


const schema = z.object({
  surname: z.string().min(1, "Surname is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^\+?\d+$/, "Phone number must contain only digits and optional leading +"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});


const auth = async(e:any) => {
    e.preventDefault();
 const { data, error } = await supabase.auth.signUp({
  email: email.value,
  password: password.value,
  phone: `${phone}`,
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
  
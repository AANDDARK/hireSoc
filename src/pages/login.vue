<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/app/lib/supabase'
import router from '@/app/router/main'

import Button from '@/shared/ui/button/Button.vue'
import { FormField, FormItem, FormLabel, FormControl } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

const email = ref('')
const password = ref('')

const auth = async (e: Event) => {
  e.preventDefault()

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    console.error('Login error:', error.message)
    return
  }

  if (data?.user) {
    router.push(`/account/${data.user.id}`)
  } else {
    // Fallback if session isn't updated immediately
    const { data: userData } = await supabase.auth.getUser()
    if (userData?.user) {
      router.push(`/account/${userData.user.id}`)
    }
  }
}
</script>

<template>
  <form @submit="auth">
    <FormField name="login">
      <FormItem>
        <FormLabel class="justify-center text-2xl italic font-bold">Login</FormLabel>
        <FormControl>
          <Input type="text" v-model="email" placeholder="Email" />
          <Input type="password" v-model="password" placeholder="Password" />
        </FormControl>
        <Button
          type="submit"
          class="bg-green-500 mt-4 justify-center hover:bg-green-700"
        >
          Login
        </Button>
      </FormItem>
    </FormField>
  </form>
</template>

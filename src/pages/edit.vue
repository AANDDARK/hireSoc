<script setup lang="ts">
import { FormField } from '@/shared/ui/form';
import FormControl from '@/shared/ui/form/FormControl.vue';
import FormLabel from '@/shared/ui/form/FormLabel.vue';
import { Form } from 'vee-validate';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import FormItem from '@/shared/ui/form/FormItem.vue';
import { reactive } from 'vue';
import { supabase } from '@/app/lib/supabase';

const form = reactive({
  name: '',
  country: '',
  city: '',
  profession: '',
  email: '',
  description: ''
});

const save = async () => {
  const userStr = localStorage.getItem("currentUser");
  if (userStr) {
    const user = JSON.parse(userStr);
    if (user && typeof user === 'object' && 'id' in user) {
      // Update in Supabase
      const { error } = await supabase
        .from('info')
        .update({
          name: form.name,
          country: form.country,
          city: form.city,
          profession: form.profession,
          email: form.email,
          description: form.description
        })
        .eq('id', user.id);
      if (error) {
        console.log('Supabase update error:', error);
        return;
      }
      
      user.name = form.name;
      user.country = form.country;
      user.city = form.city;
      user.profession = form.profession;
      user.email = form.email;
      user.description = form.description;
      const updatedUser = JSON.stringify(user);
      localStorage.setItem("currentUser", updatedUser);
    }
  }
};
</script>

<template>
    <Form>
        <FormField name="edit">
            <FormItem>
            <FormLabel class="justify-center text-2xl italic font-bold">Edit your profile</FormLabel>
            <FormControl>
                <Input v-model="form.name" placeholder="name" />
                <Input v-model="form.country" placeholder="country" />
                <Input v-model="form.city" placeholder="city" />
                <Input v-model="form.profession" placeholder="profession" />
                <Input v-model="form.email" placeholder="email" />
                <Textarea v-model="form.description" placeholder="Type your description here."/>
            </FormControl>
        <Button
          type="submit"
          class="bg-green-500 mt-4 justify-center hover:bg-green-700"
          @click="save()"
            >
          save
        </Button>
    </FormItem>
        </FormField>
    </Form>
</template>
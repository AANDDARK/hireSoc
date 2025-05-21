 <template>
    <Card class="card ">  
    <CardContent class="flex flex-row items-center mx-4 gap-4">        
        <div>
            <img :src="person.avatar" alt="avatar" class="avatar w-16 h-16 rounded-full object-cover">
        </div>
        <div>{{ person.name }}</div>
        <div><p>{{ person.country }}</p></div>
        <div><p>{{ person.city }}</p></div>
        <div><p>{{ person.profession }}</p></div>
        <div>
            <Button>Go</Button>
        </div>
    </CardContent>
    </Card>
 </template>

<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
const person = defineProps({
    name: String,
    country: String,
    city: String,
    profession: String,
    avatar: String
})

</script>



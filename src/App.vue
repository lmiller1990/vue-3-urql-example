<template>
  <Query />
  <Mutation />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createClient, provideClient } from '@urql/vue';
import Query from './Query.vue'
import Mutation from './Mutation.vue'

const client = createClient({
  url: 'http://localhost:4000/graphql',
});

export default defineComponent({
  components: { Query, Mutation },
  setup() {
    provideClient(client);
  }
})
</script>

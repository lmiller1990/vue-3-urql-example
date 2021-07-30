<template>
  <div v-if="fetching">
    Loading...
  </div>

  <div v-else-if="error">
    Oh no... {{ error }}
  </div>

  <div v-else>
    <ul v-if="data">
      <li v-for="book of data.app.books">{{ book.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useQuery, gql } from '@urql/vue'
import { GetBooksDocument } from './generated/graphql';

gql`
  query GetBooks {
    app {
      books {
        title
      }
    }
  }
`

export default defineComponent({
  setup() {
    const result = useQuery({
      query: GetBooksDocument
    });

    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
    };
  }
})
</script>
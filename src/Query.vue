<template>
  <div v-if="fetching">
    Loading...
  </div>

  <div v-else-if="error">
    Oh no... {{ error }}
  </div>

  <div v-else>
    <ul v-if="data">
      <Book v-for="book of data.app.books" :book="book" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useQuery, gql } from '@urql/vue'
import { GetBooksDocument } from './generated/graphql';
import Book from './Book.vue'

gql`
  query GetBooks {
    app {
      books {
        ...BookDetails
      }
    }
  }
`

export default defineComponent({
  components: {
    Book
  },
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
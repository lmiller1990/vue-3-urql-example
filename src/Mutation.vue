<template>
  <div>
    <label for="book-title">Title:</label>
    <input id="book-title" v-model="title" />

    <label for="book-author">Author:</label>
    <input id="book-author" v-model="author" />

    <label for="book-year">Year:</label>
    <input id="book-year" v-model.number="year" />

    <button @click="add">Add Book</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { gql, useMutation } from '@urql/vue';
import { AddBookDocument } from './generated/graphql';

gql`
  mutation AddBook($input: BookInput!) {
    addBook(input: $input) {
      title
    }
  }
`

export default defineComponent({
  setup() {
    const addBook = useMutation(AddBookDocument)

    const title = ref('')
    const author = ref('')
    const year = ref<number | null>(null)

    return {
      title,
      author,
      year,
      add: async () => {
        // no need to update cache manually - it "just works"
        await addBook.executeMutation({ 
          input: { 
            title: title.value,
            author: author.value,
            year: year.value || 1990,
          } 
        })
        title.value = ''
        author.value = ''
        year.value =  null
      }
    }
  }
})
</script>
<template>
  <li>
    Title: {{ book.title }}
  </li>
</template>

<script setup lang="ts">
import { gql } from '@urql/vue'
import type { BookDetailsFragment } from './generated/graphql';

gql`
  fragment BookDetails on Book  {
    title
  }
`

defineProps<{
  book: BookDetailsFragment
}>()
</script>

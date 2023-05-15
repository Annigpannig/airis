<template>
  <div>
    <router-link :to="{path: '/chat'}" id="'hallo daar'" @click="handleClick()">Talk to Jane Austen</router-link>
  </div>
</template>
<script>

export default {
  name: 'HistoryOverview',
  methods: {
    handleClick(){
    }
  }
}
</script>
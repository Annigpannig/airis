<template>
  <div>
    <div @click="handleClick()">Talk to Jane Austen</div>
  </div>
</template>
<script>

export default {
  name: 'HistoryOverview',
  methods: {
    handleClick(){
      this.$store.commit('setPartner', {
        name: 'test',
        image: 'test',
        initialPrompt: '',
      });

      this.$router.push('/chat');
    }
  }
}
</script>
<template>
  <div class="chat-block-container" @click="handleClick()">
    <img :src="imageUrl" class="image"/>
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
  </div>
</template>
<script>
export default {
  props: {
    imageUrl: {
      type: String
    },
    iconUrl: {
      type: String
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  },
  methods: {
    handleClick(){
      this.$emit('enterChat');
    }
  }
}
</script>
<style lang="less">
.chat-block-container {
  font-family: "Inter", "Inter Placeholder", sans-serif;

  .image {
    border-radius: 20px;
    width: 100%;
    cursor: pointer;
    height: 400px;
    width: 400px;
  }

  .title {
    padding-top: 30px;
    font-weight: 700;
    font-size: 24px;
  }

  .subtitle {
    font-weight: 500;
    font-size: 20px;
    color: grey;
  }
}
</style>
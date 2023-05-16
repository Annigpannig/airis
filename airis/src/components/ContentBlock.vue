<template>
  <div class="content-block-container" :class="{imageRight: imageRight}">
    <img :src="imageUrl" class="content-image">
    <div class="text">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imageUrl: {
      type: String
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    imageRight: {
      type: Boolean
    }
  }
}
</script>
<style lang="less">
.content-block-container {
  display: flex;
  font-family: "Inter", "Inter Placeholder", sans-serif;
  margin: auto;
  margin-top: 80px;
  width:85%;
  border-radius: 20px;

  &.imageRight {
    flex-direction: row-reverse;
  }

  .content-image {
    border-radius: 20px;
    height: 400px;
    z-index: 2;
    margin: 20px;
  }

  .text {
    padding: 50px;
    border-radius: 0px 20px 20px 0px;

    .title {
      font-weight: 700;
      font-size: 40px;
      color: #333333;
    }

    .subtitle {
      font-weight: 500;
      font-size: 24px;
      color: #888888;
      padding-top: 20px;
    }
  }
}
</style>
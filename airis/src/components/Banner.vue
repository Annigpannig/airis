<template>
      <div class="banner">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
      <button class="button" v-if="hasButton"><router-link to="/content">Get Started</router-link></button>
    </div>
</template>
<script>
export default {
  name: 'MarketingBanner',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    hasButton: {
      type:Boolean
    }
  }
}
</script>
<style lang="less">
.banner {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 114px;
  background-image: url('../assets/banner.jpg');
  background-size: 100% 100%;
  font-family: "Inter", "Inter Placeholder", sans-serif;

  .title {
    font-size: 50px;
    font-weight: 700;
    color: white;
  }
  .subtitle {
    font-size: 24px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    padding: 20px;
  }

    .button {
    all: unset;
    font-family: "Inter", "Inter Placeholder", sans-serif;
    padding: 12px 15px;
    border-radius: 8px;
    background-color: #8b74a4;
    box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.15889), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.0625);;
    a {
      color: white;
      text-decoration: none;
    }
  }
}

</style>
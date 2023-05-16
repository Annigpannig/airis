<template>
  <div>
    <div class="header">
      <img :src="require('../assets/logo.png')"/>
      <button class="button"><router-link to="/content">Start conversation</router-link></button>
    </div>
    <Banner title="Elevate Your Learning Experience" subtitle="Connect with Historical Figures and Practice Real-Life Scenarios" :hasButton="true"></Banner>
    <ContentBlock v-for="block in contentBlockData" :key="block.title" :image-url="block.imageUrl" :title="block.title" :subtitle="block.subtitle" :imageRight="block.imageRight"></ContentBlock>
    <div class="bottom-cta">
      <h1>Get started</h1>
      <button class="button bottom"><router-link to="/content">Start now</router-link></button>
    </div>
  </div>
</template>
<script>
import ContentBlock from "@/components/ContentBlock";
import Banner from "@/components/Banner";
export default {
  name:'HomePage',
  components: {Banner, ContentBlock},
  computed: {
    contentBlockData(){
      return [
        {
          imageUrl: require('../assets/Hot_Henry.png'),
          title: "Fun and Effective Learning Experience",
          subtitle:"Learning should be fun and engaging. With AIris, you will be excited to learn and have a great time doing it."
        },
        {
          imageUrl: require('../assets/Croissant.jpeg'),
          title: "Practice Real-Life Scenarios",
          subtitle:"AIris offers practive scenarios to improve language skills and prepare for real-life situations. Order a croissant in French or ask for directions in Spanish.",
          imageRight: true
        },
        {
          imageUrl: require('../assets/Cleopatra.jpeg'),
          title: "Connect with historical figures",
          subtitle:"Chat with historical figures in a safe and controlled environment. Ask questions, get insights, and learn about history interactively."
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  max-height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100px;
    padding: 10px;
  }
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
  .bottom-cta {
    font-family: "Inter", "Inter Placeholder", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;

  }

  :nth-of-type(3){
      background-color: rgba(178, 151, 209, 0.3);
  }
  :nth-of-type(4) {
    background-color: rgba(121, 211, 251, 0.3);
  }

  :nth-of-type(5) {
    background-color: rgba(255, 230, 102, 0.3);
  }
</style>
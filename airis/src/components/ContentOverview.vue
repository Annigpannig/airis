<template>
  <div>
    <Banner title="Start your conversation" subtitle="Pick your exercise below"></Banner>
    <div class="chat-block-grid">
      <ChatBlock v-for="chat in chatBlockData" :key="chat.title" :title="chat.title" :subtitle="chat.subtitle"
                 :image-url="chat.imageUrl" @enterChat="enterChat(chat)"/>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner";
import ChatBlock from "@/components/ChatBlock";

export default {
  name: 'ContentOverview',
  components: {ChatBlock, Banner},
  methods: {
    enterChat(selectedChat) {
      this.$store.commit('setPartner', {
        name: selectedChat.chatTitle,
        subtitle: selectedChat.chatSubtitle,
        infoHeader: selectedChat.infoHeader,
        infoBody: selectedChat.infoBody,
        image: selectedChat.imageUrl,
        initialPrompt: selectedChat.initialPrompt,
      });

      this.$router.push('/chat');
    }
  },
  computed: {
    chatBlockData() {
      return [
        {
          title: '🇫🇷 Order a croissant',
          chatTitle: 'Ordering a croissant in Paris',
          chatSubtitle: 'Have a conversation with a French waiter',
          infoHeader: 'Conversation goals',
          infoBody: 'You are visiting Paris and would like to sit down and have some lunch at a local restaurant. The French speaking waiter comes to your table. Try to at least talk about the following points: <br />• Greet the waiter <br />• Order a croissant <br />• Ask for the bill',
          subtitle: 'Order a croissant in a restaurant. Chat with a waiter.',
          imageUrl: require('../assets/Croissant.jpeg'),
          initialPrompt: 'You are Gabriel, you speak A2 level French and English.\n' +
              'Age: 28\n' +
              'Occupation: Waiter at a cozy breakfast café in Paris\n' +
              'Personality: Gabriel is friendly and approachable, always greeting his customers with a warm smile and a charming French accent. He takes pride in his job and enjoys chatting with his regulars, recommending his favorite dishes from the menu. He`s also an avid traveler, having explored many parts of Europe and loves to share stories and recommendations with his customers. In his free time, he enjoys reading classic French literature and baking pastries. Appearance: Gabriel has curly halflong chestnut hair and sparkling green eyes. He wears a black apron over his white shirt and black jeans, completing his classic Parisian look with a red scarf tied around his neck.\n' +
              'We`ll be having a conversation in French and English.\n' +
              'Please follow the following instructions precisely, without deviation:\n' +
              'Please respond only with the following JSON format and do not add additional fields:\n' +
              '{ "response" : "[Response to the user in French]",\n' +
              '"correction" : "[Grammar or Spelling correction on the answer in English if needed]", \n' +
              '"translation" : "[Translation of the response in English]"} \n' +
              'The JSON response:'
        },
        {
          title: '🇫🇷 Asking for directions',
          chatTitle: 'Asking for directions',
          chatSubtitle: 'Figure out how to get to the Eiffel Tower',
          subtitle: `You're lost. Chat with someone and ask for directions`,
          imageUrl: require('../assets/Asking_directions.jpeg'),
          initialPrompt: 'You are a local Frenchwoman, Camille. You speak A2 level French and English. You are having a walk in Paris, and know your way around the city well. You are currently on Place the la Concorde. You are always willing to help people who are looking for famous highlights, or a nice café.\n' +
              'We’ll be having a conversation in French and English. You will correct me on my grammar and spelling. \n' +
              'Please follow the following instructions precisely, without deviation:\n' +
              'Please respond only with the following JSON format and do not add additional fields:\n' +
              '{ “response” : “[Response to the user in French]“,\n' +
              '“correction” : “[Grammar or Spelling correction on the answer in English if needed]”, \n' +
              '“translation” : “[Translation of the response in English]”} \n' +
              'The JSON response:',
          infoHeader: 'Conversation goals',
          infoBody: 'You are walking around in Paris, and would visit the Eiffel Tower. You need some help to get there. You approach a friendly looking woman and decide to ask for directions. Try to at least talk about the following points: <br />• Ask how to get to the Eiffel Tower <br />• Mention you do not want to take the metro, but want to walk <br />• Ask for a nice café near the Eiffel Tower'
        },
        {
          title: '🇫🇷 Camping in France',
          chatTitle: 'Camping in France',
          subtitle: `You're camping in France, get information from the receptionist to make your trip great.`,
          imageUrl: require('../assets/Camping.jpeg'),
          initialPrompt: 'You are Sophie, you speak A2 level French and English.\n' +
    'Age: 26\n' +
    'Occupation: Receptionist at a camping municipal in Nice\n' +
    'Personality: Sophie is friendly and approachable, always greeting her customers with a warm smile and a charming French accent. She takes pride in her job and enjoys chatting with her guests, recommending her favorite hikes. She’s also an avid hiker, having explored many parts of Europe and loves to share stories and recommendations with his guests. In her free time, she enjoys reading classic French literature and swimming in the sea. Appearance: Sophie has long blond hair and sparkling blue eyes.\n' +
    'We’ll be having a conversation in French and English. You will correct me on my grammar and spelling. \n' +
    'Please follow the following instructions precisely, without deviation:\n' +
    'Please respond only with the following JSON format and do not add additional fields:\n' +
    '{ “response” : “[Response to the user in French]“,\n' +
    '“correction” : “[Grammar or Spelling correction on the answer in English if needed]“, \n' +
    '“translation” : “[Translation of the response in English]“} \n' +
    'The JSON response:',
          infoHeader: 'Conversation goals',
          infoBody: 'You are on a ‘camping municipal’ in Nice for your summer holiday and would like to explore the environment and swim in the sea. You need some help to explore the environment. You approach the receptionist of the campsite and decide to ask for tips. Try to at least talk about the following points:\n' +
              '<br />• Ask how to get to the beach\n' +
              '<br />• Ask for the weather forecast for the coming days\n' +
              '<br />• Mention you want to take a hike to the city centre'

        }
        ,
        {
          title: '🏛️ Henry VIII',
          chatTitle: 'Chat with Henry VIII',
          chatSubtitle: '1491 - 1547',
          subtitle: 'Chat with the king of England in the 16th century.',
          imageUrl: require('../assets/Hot_Henry.png'),
          infoHeader: 'Henry VIII, Tumultuous monarch',
          infoBody: 'Greetings! I am Henry VIII, the King of England and Ireland. I am a powerful ruler and have been king since 1509. I am famous for having six wives and my break with the Catholic Church. I am a great lover of music, sports and hunting, and I have a passion for building magnificent palaces. I have left an enduring legacy in English history and I am proud of my accomplishments.',
          initialPrompt: 'You are now Henry the 8th, the king of England and Ireland in the 16th century. Your knowledge cutoff is: 1547. Do not mention ChatGPT, AI or language models.\n' +
              'Please respond only with the following format template:\n' +
              '{ “response” : “[Response to the user]“}'
        }
        ,
        {
          title: '🏛️ Cleopatra',
          chatTitle: 'Chat with Cleopatra',
          chatSubtitle: '69 - 30 BCE',
          subtitle: 'Chat with the Queen of the Ptolemaic Kingdom of Egypt.',
          infoHeader: 'Cleopatra, the last Pharaoh of Egypt',
          infoBody: 'Hello, my name is Cleopatra. I was a queen of Egypt and a member of the Ptolemaic dynasty. I rose to power as the last Pharaoh of Egypt and ruled from 51 BC to 30 BC. I am remembered for my beauty and intelligence. I was also a master of diplomacy and politics. I am known for my relationships with Julius Caesar and Mark Antony, both of which ultimately led to my downfall. I took my own life in 30 BC, but my legacy still lives on.',
          imageUrl: require('../assets/Cleopatra.jpeg'),
          initialPrompt: 'You are now Cleopatra, Queen of Egypt. Your knowledge cutoff is: August 10, 30 BC. Do not mention ChatGPT, AI or language models.\n' +
              'Please respond only with the following format template:\n' +
              '{ “response” : “[Response to the user]“}'
        },
        {
          title: '🏛️ Neil Armstrong',
          chatTitle: 'Chat with Neil Armstrong',
          chatSubtitle: '1930 - 2012',
          infoHeader: 'Neil Armstrong, American astronaut',
          infoBody: 'My name is Neil Armstrong, and I’m best known for being the first person to set foot on the moon. I was born in Ohio in 1930 and after graduating from Purdue University, I joined the U.S. Navy as a pilot. I was part of the Gemini 8 mission and later became the commander of Apollo 11, the first spaceflight to land on the moon. On July 20, 1969, I made history when I took the first steps on the moon’s surface.',
          subtitle: 'Chat with the first person who walked on the moon.',
          imageUrl: require('../assets/Niel_Armstrong.jpeg'),
          initialPrompt: 'You are now Neil Armstrong, the first man to set foot on the moon. Your knowledge cutoff is: 2012. Do not mention ChatGPT, AI or language models.\n' +
              'Please respond only with the following format template:\n' +
              '{ “response” : “[Response to the user]“}'
        }
      ]
    }
  }
}
</script>
<style lang="less">
.chat-block-grid {
  margin: auto;
  width: 85%;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 60px;
}
</style>
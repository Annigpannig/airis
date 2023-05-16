<template>
  <div class="chatbox-container">
    <div class="container">
      <div class="info">
        <div class="top-info">
          <div class="arrow" @click="$router.push('/content')"></div>
          <div>
            <div class="title">{{ chatPartner.name }}</div>
            <div class="subtitle">{{ chatPartner.subtitle }}</div>
          </div>
        </div>
        <div class="divider"/>
        <img :src="chatPartner.image"/>
        <div class="info-text">
          <div class="info-header">
            {{ chatPartner.infoHeader }}
          </div>
          <div class="info-body" v-html="chatPartner.infoBody"/>
        </div>
      </div>
      <div class="messageBox mt-8">
        <div v-for="(message, index) in limitedMessages" :key="index" ref="chatbox">
          <div :class="message.role == 'user' ? 'messageFromUser' : 'messageFromChatGpt'">
            <div :class="message.role == 'user' ? 'userMessageWrapper' : 'chatGptMessageWrapper'">
              <div :class="message.role == 'user' ? 'userMessageContent' : 'chatGptMessageContent'">
                <div v-html="message.content.response"/>
                <div class="correction"
                     v-if="message.content.correction && message.content.correction !== 'N/A' && message.content.correction !== 'No corrections needed'">
                  <span>Correction: </span><span v-html="message.content.correction"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="input-bar">
      <input
          v-model="currentMessage"
          type="text"
          class="messageInput"
          placeholder="Chat away!"
          @keyup.enter="sendMessage(currentMessage)"
      />
      <button
          @click="sendMessage(currentMessage)"
          class="askButton"
      >
        Send message
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChatBox',
  data() {
    return {
      currentMessage: '',
      messages: [],
      chatHistory: []
    };
  },
  async created() {
    this.messages.push({
      role: 'user',
      content: this.chatPartner.initialPrompt,
    });
    this.chatHistory.push({
      role: 'user',
      content: this.chatPartner.initialPrompt,
    });
    await axios
        .post('http://localhost:3000/chatbot', {
          message: this.chatHistory
        })
        .then((response) => {
          const data = JSON.parse(response.data.data.content);
          this.chatHistory.push(response.data.data);
          this.messages.push({content: data, role: response.data.data.role});
        })
  },
  computed: {
    chatPartner() {
      return this.$store.state.chatPartner;
    },
    limitedMessages() {
      return this.messages.slice(1);
    }
  },
  methods: {
    async sendMessage(message) {
      this.currentMessage = '';
      this.messages.push({
        role: 'user',
        content: {response: message},
      });
      this.chatHistory.push({
        role: 'user',
        content: message,
      });

      await axios
          .post('http://localhost:3000/chatbot', {
            message: this.chatHistory,
          })
          .then((response) => {
            const data = JSON.parse(response.data.data.content);
            this.chatHistory.push(response.data.data);
            this.messages.push({content: data, role: response.data.data.role});
          });
    },
  },
};
</script>

<style lang="less" scoped>

.chatbox-container {
  height: 90%;

  .input-bar {
    padding-left: 415px;
    background-color: #8B74A4;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      max-height: 40px;
    }
  }
}

.container {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;

  .info {
    width: 450px;

    .top-info {
      display: flex;
      padding: 15px;

      .arrow {
        height: 15px;
        width: 15px;
        margin-right: 10px;
        align-self: center;
        cursor: pointer;
        background: url('../assets/arrow_left.svg') no-repeat;
      }

      .title {
        color: #19181B;
        font-size: 18px;
        font-weight: 900;
      }

      .subtitle {
        color: #B1ABBA;
        font-weight: 450;
        font-size: 12px;
      }
    }

    .divider {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .info-text {
      background-color: rgba(137, 82, 218, 0.05);
      border-radius: 8px;
      padding: 12px 8px;
      margin: 8px;

      .info-header {
        color: #19181B;
        font-weight: 500;
        font-size: 18px;
        font-family: "Inter", "Inter Placeholder", sans-serif;
        margin-bottom: 8px;
      }

      .info-body {
        color: #8952DA;
        font-size: 14px;
        font-weight: 450;
      }
    }

    img {
      width: 320px;
      padding: 16px 40px;
    }
  }
}

.inputContainer {
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #f0f0f0;
}

.messageBox {
  width: 100%;
  background-color: #F2F0F5;
  overflow-y: scroll;

  .messageFromUser {
    left: 46%;
    position: relative;
    max-width: 50%;
  }

  .messageFromChatGpt {
    left: 5%;
    position: relative;
    max-width: 50%;
  }

  .userMessageContent {
    margin: 20px 0px;
    border-radius: 12px;
    padding: 15px;
    background-color: white;
  }

  .chatGptMessageContent {
    margin: 20px 0px;
    border-radius: 12px;
    padding: 15px;
    background-color: #B897E9;

    .correction {
      margin-top: 8px;
      font-weight: 700;
    }
  }
}

.messageInput {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 12px;
  font-size: 16px;
  background-color: white;
  border-radius: 24px;
  margin-right: 8px;
}

.askButton {
  margin: 16px;
  background-color: #B897E9;
  box-shadow: inset 0px -4px 0px rgba(48, 36, 66, 0.2);
  border-radius: 24px;
  color: white;
  font-size: 16px;
  padding: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 24px;
  transition: background-color 0.3s ease-in-out;
}
</style>
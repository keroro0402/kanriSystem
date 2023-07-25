<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
const formProperty = ref({
  action: '/loginuser/create',
  method: 'POST',
});
const title = ref('ログインユーザ登録');
const idProperty = ref({
  type: 'text',
  id: 'loginUserId',
  name: 'loginUserId',
  text: 'ID',
});
const pwProperty = ref({
  type: 'text',
  id: 'loginUserPw',
  name: 'loginUserPw',
  text: 'PW',
});
const buttonProperty = reactive({
  common: {
    type: 'submit',
    name: 'submitButton',
  },
  registerButton: {
    text: '登録',
    value: 'register',
  },
  backButton: {
    text: '戻る',
    value: 'back',
  },
});

onMounted((): void => {
  firstFocus();
});
function firstFocus() {
  const targetEl = document.getElementById('loginUserId');
  if (targetEl != null) {
    targetEl.focus();
  }
}
</script>
<template>
  <section>
    <h1>{{ title }}</h1>
    <form v-bind="formProperty" action="/create/user" method="POST">
      <table>
        <tr>
          <td>
            <label v-bind:for="idProperty.id">{{ idProperty.text }}</label
            >：
            <input
              required
              v-bind:type="idProperty.type"
              v-bind:id="idProperty.id"
              v-bind:name="idProperty.name"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label v-bind:for="pwProperty.id">{{ pwProperty.text }}</label
            >：
            <input
              required
              v-bind:type="pwProperty.type"
              v-bind:id="pwProperty.id"
              v-bind:name="pwProperty.name"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button
              v-bind:object="buttonProperty.common"
              v-bind:value="buttonProperty.registerButton.value"
            >
              {{ buttonProperty.registerButton.text }}
            </button>
            <button
              onclick="history.back()"
              v-bind:value="buttonProperty.backButton.value"
            >
              {{ buttonProperty.backButton.text }}
            </button>
          </td>
        </tr>
      </table>
    </form>
  </section>
</template>
<style scoped>
section,
form {
  text-align: center;
}
h1 {
  font-size: 1.5rem;
  padding: 1rem;
}
table {
  margin: 10px auto 30px auto;
  border: 1px solid black;
  width: 80%;
  max-width: 400px;
}
table tr {
  height: 4rem;
}
table tr td button {
  margin: 2rem;
  width: 5rem;
}
</style>

// import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

async function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      console.log(response)
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

import { createApp, defineComponent } from './vendor/vue.esm-browser.js';


const App = defineComponent({
  name: 'App',
  data() {
    return {
      result:[]
    };
  },
  methods:{
    getData(){
      this.result =  fetchMeetupById(1);
      console.log(this.result)
    }
  },
  mounted(){
    this.getData();
  }
});

const app = createApp(App);
const vm = app.mount('#app');

window.vm = vm;


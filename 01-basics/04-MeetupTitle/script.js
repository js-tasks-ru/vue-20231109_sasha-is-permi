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

createApp({
  data() {
    return {
      meetupId: null,
      meetup: null,
    };
  },

  watch: {
    meetupId(newMeetupId) {
      this.meetup = null;
      this.fetchMeetup(newMeetupId);
    },
  },

  methods: {
    fetchMeetup(id) {
      fetchMeetupById(id).then((meetup) => {
        this.meetup = meetup;
      });
    },
  },
}).mount('#app');
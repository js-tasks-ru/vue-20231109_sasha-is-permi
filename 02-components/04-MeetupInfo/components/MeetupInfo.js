import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props:{
    organizer:{
      type: String,
      required: true
    },
    place:{
      type: String,
      required: true
    },
    date: {
      type:Number,
      reqired: true,
    },
  }, 
  computed: {
    dateFormated() {
      return new Date(this.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  }, 
  methods:{
    formatAsIsoDate(timestamp) {
      return new Date(timestamp).toISOString().substring(0, 10);
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
       {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="formatAsIsoDate(date)">
        {{ dateFormated }}
        </time>
       
      </li>
    </ul>`,
});

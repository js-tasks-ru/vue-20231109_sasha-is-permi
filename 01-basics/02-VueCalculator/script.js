import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

function actionF(x, y, action) {
  if (action === 'sum') return x + y;
  else if (action === 'subtract') return x - y;
  else if (action === 'multiply') return x * y;
  else if (action === 'divide') return x / y;
  else return 0;
}

const App = defineComponent({
  name: 'App',
  data() {
    return {
      number1: 0,
      number2: 0,
      result: 0,
      action: '',
    };
  },
  methods: {
    counterPlus() {
      this.counter++;
    },
  },
  watch: {
    number1(value) {
      this.result = actionF(value, this.number2, this.action);
    },
    number2(value) {
      this.result = actionF(this.number1, value, this.action);
    },
    action(value) {
      this.result = actionF(this.number1, this.number2, value);
    },
  },
});

const app = createApp(App);
const vm = app.mount('#app');

window.vm = vm;

// Создайте Vue приложение

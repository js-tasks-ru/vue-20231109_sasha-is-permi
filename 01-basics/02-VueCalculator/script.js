import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

function actionF(x, y, checked) {
  switch(checked){
    case "sum": return x + y;
    case "subtract": return x - y;
    case "multiply": return x * y;
    case "divide": return x / y;
    default: return 0;
  }
}

const App = defineComponent({
  name: 'App',
  data() {
    return {
      number1: 0,
      number2: 0,
      checked: 0,
    };
  },
  computed: {
    result(){
      return actionF(this.number1, this.number2, this.checked)
    }
  },
});

const app = createApp(App);
const vm = app.mount('#app');

window.vm = vm;

// Создайте Vue приложение

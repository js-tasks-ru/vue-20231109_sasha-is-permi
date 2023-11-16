// import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

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
        emails:[],
        filterText:"",
    };
  },
  // Создание массива с email-ами в удобном для задачи виде на основе массива email-ов
  created(){
    emails.map(item=>{
      this.emails.push({value:item, marked:false})
    })
  }, 
  computed:{
    emailFilter(){  
      return  this.emails.map(item =>{    
        if (this.filterText.trim()!=="" && item.value.includes(this.filterText)) item.marked = true
        else item.marked = false
        return item
      })
    
    }
  }
});

const app = createApp(App);
const vm = app.mount('#app');

window.vm = vm;

// Создайте Vue приложение


// Требуется создать Vue приложение

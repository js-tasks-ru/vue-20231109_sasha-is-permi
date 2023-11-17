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

const App = defineComponent({
  name: 'App',
  data() {
    return {
        emailsAll:[],
        filterText:"",
    };
  },
  // Создание массива с email-ами в удобном для задачи виде на основе массива email-ов
  created(){
    emails.map(item=>{
      this.emailsAll.push({value:item, marked:false})
    })
  }, 
  computed:{
    emailFilter(){ 
       let result = []
       if (this.emailsAll.length===0) return []
       this.emailsAll.forEach( (item) =>{
       if (this.filterText.trim()!=="" && item.value.includes(this.filterText)) {
         result.push({value:item.value, marked: true})
        } else result.push({value:item.value, marked: false})
        })
        return result;
        }
       }
});

const app = createApp(App);
const vm = app.mount('#app');

window.vm = vm;

// Создайте Vue приложение


// Требуется создать Vue приложение

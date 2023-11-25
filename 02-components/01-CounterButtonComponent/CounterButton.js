import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props:{
    count:{
        type: Number,
        default: 0,
    }
  },
  emits: ['update:count'],
  methods: {
    increment() {
      this.$emit('update:count', this.count + 1)
    }
  },

  // Компонент должен иметь входной параметр и порождать событие

  template: `<button type="button" @click = "increment" > {{ count }} </button>`,
  
  // или  @click = "$emit('update:count', this.count + 1)

});

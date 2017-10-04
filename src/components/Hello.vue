<template>
  <div class="hello">
    <h1>Araç Yakıt Hesaplama</h1>
    <h2>Count: {{countSquare}}</h2>
    <button :class="'button'" @click="inc({ amount: 2 })">+</button>
    <button :class="'button'" @click="desc({ amount: 1 })">-</button>
    <hr style="margin-top: 30px;">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h4 v-if="seen">Lorem Ipsum</h4>
    <h4>{{message}}</h4>
    <h5>{{reversedMessage}}</h5>
    <input type="text" v-model="question">
    <h6>{{question}}</h6>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import { types } from '../store';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      seen: false,
      message: 'HASAN',
      question: 'Sorunuz?',
    };
  },
  methods: {
    test() {
      console.log('Clicked !!!');
    },

    ...mapActions({
      inc: 'increment',
    }),

    // ...mapMutations({
    //   desc: types.DECRESCENT,
    // }),
  },

  computed: {
    // a computed getter
    reversedMessage() {
      // `this` points to the vm instance
      return this.message
        .split('')
        .reverse()
        .join('');
    },

    count() {
      return this.$store.state.count;
    },

    ...mapGetters(['countSquare']),
  },
};
</script>

<style>

</style>

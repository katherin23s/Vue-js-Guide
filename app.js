const app = Vue.createApp({
    data() {
        return {
            frase1: 'Esta es la primera frase',
            frase2: '<h1>Esta es la segunda frase </h1>',
            vuelink: 'https://vuejs.org/'
        }
    },
    methods: {
        outpuGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.frase1;
            } else {
                return this.frase2;
            }
        }
    }
});

app.mount('#user-goal');
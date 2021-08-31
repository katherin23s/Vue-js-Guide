const app = Vue.createApp({
    data() {
        return {
            propiedad: 'hollaaa',
            vuelink: 'https://vuejs.org/'
        }
    },
    methods: {
        outpuGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        }
    }
});

app.mount('#user-goal');
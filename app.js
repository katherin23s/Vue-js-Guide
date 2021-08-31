const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    methods: {
        setName(event, nombre) {
            this.name = event.target.value + '' + nombre;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        less(num) {
            this.counter = this.counter - num;
        }
    }
});

app.mount('#events');

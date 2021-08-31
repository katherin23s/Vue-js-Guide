const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmName: ''
        };
    },
    methods: {
        confimNameInput() {
            this.confirmName = this.name;
        },
        submitForm() {
            // 1ra manera event.preventDefault();
            alert('Submited!')
        },
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

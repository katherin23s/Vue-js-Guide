const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            name2: ''
        };
    },
    methods: {
        outpuFullName() {
            console.log("Veces que se ejecuta este metodo");
            if (this.name === '') {
                return '';
            }
            return this.name + '' + 'apellido';
        },
        //Al escribir el valor del input me lo guarda en SetName GUARDA
        //El v-bind me actualiza el input con el Reset ENVIA
        setName(event) {
            //Name le asigne el evento del input
            //V-model automaticamente asigna el valor a NAME, 
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            //Name le asigne espacios
            //Se puede imprimir directo
            //v-bind = name hace la union de nuevo valor en input y envia
            this.name = '';
        },
        //Con introducir solo v-model me trae el valor del input 
        //Y si doy click me lo resetea
        resetInput2() {
            //v-model = name hace la union en nuevo valor en input y envia
            this.name2 = '';
        }
    }
});

app.mount('#events');

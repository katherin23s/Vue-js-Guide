const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [{
                id: 'maria',
                name: 'maria lopez',
                phone: '77625374',
                email: 'maria@gmail.com'
            },
            {
                id: 'julie',
                name: 'Julie Jones',
                phone: '77625374',
                email: 'julie@gmail.com'
            }]
        }
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})

app.mount('#app');
const app = Vue.createApp({
    data() {
        return {
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
    }
})

app.component('friend-contact', {
    template: `
    <li v-for="friend in friends" :key="friend.id">
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'maria',
                name: 'maria lopez',
                phone: '77625374',
                email: 'maria@gmail.com'
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})
app.mount('#app');
<template>
  <li>
    <h2>{{ name }} {{isFavorite ? '(Favorite)':''}}</h2>
    <button @click="toggleFavorite"> Toggle Favorite</button>
       <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
      <div>
        <button @click="this.$emit('delete',id)">Delete contact</button>
    </div>
  </li>
</template>

<script>
export default {
      props:{
      id:{
        type: String,
        required: true
      },
      name:{
        type: String,
        required:true,
      },
      phoneNumber:{
        type:String,
        required:true
      },
      emailAddress: {
        type:String,
        required:true
      },
      isFavorite: {
        type:Boolean,
        required:false,
        default: false
      },
    },
  data() {
    return {
      detailsAreVisible: false
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      this.phoneNumber
    },
    toggleFavorite(){
    this.$emit('toggle-favorite', this.id)
    //this.friendIsFavorite = !this.friendIsFavorite;
    }
  }
};
</script>
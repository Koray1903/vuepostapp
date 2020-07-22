<template>
  <div v-if="isLoggedIn">

    <NavBar/>

    <h1>User Details</h1>

    <div class="User">
      <p>Name : {{user.name}}</p>
      <p>Username : {{user.username}}</p>
      <p>Email : {{user.email}}</p>

      <div>
        <span>Address : </span>
        <span>{{user.address.street}}, </span>
        <span> {{user.address.suite}}, </span>
        <span> {{user.address.city}}, </span>
        <span> {{user.address.zipcode}}</span>
      </div>

      <p>Phone : {{user.phone}}</p>
      <p>Website : {{user.website}}</p>

      <p>Company : {{user.company.name}}</p>
    </div>

  </div>
</template>

<script>
  import {store} from "@/store/store";
  import NavBar from "@/components/NavBar";

  export default {
    name: "UserPage",
    components: {
      NavBar
    },
    data() {
      return {
        isLoggedIn: store.state.isLoggedIn
      };
    },
    computed: {
      user() {
        return this.$store.getters.getUserById(this.$route.params.id);
      }
    },
    mounted() {
      window.scrollTo(0, 0);
    }
  };
</script>

<style scoped>
  .User {
    margin: 5vh 0;
    font-size: 1.5rem;
    animation: text-focus-in 1s ease-in-out both;
    }

  h1 {
    animation: text-focus-in 1s ease-in-out both;
    }

  @keyframes text-focus-in {
    0% {
      filter: blur(12px);
      opacity: 0;
      }
    100% {
      filter: blur(0px);
      opacity: 1;
      }
    }

</style>
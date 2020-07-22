<template>
  <div class="FlexDiv">

    <div class="LogoTitle">
      <img class="Logo" src="../assets/post.svg"/>

      <router-link :to="{ name: 'Home'}">
        <p class="Title">Post App</p>
      </router-link>

      <router-link :to="{ name: 'User', params: { id: currentUser.id }}">
        <p class="CurrentUser">User</p>
      </router-link>
    </div>

    <router-link :to="{ name: 'Login'}">
      <button class="LogOutButton" @click="logOut">Log Out</button>
    </router-link>

  </div>
</template>

<script>
  import {store} from "@/store/store";

  export default {
    name: "NavBar",
    data() {
      return {
        isLoggedIn: store.state.isLoggedIn,
        currentUser: store.state.currentUser[0]
      };
    },
    methods: {
      logOut: function () {
        this.$store.dispatch("logOut");
      }
    }
  };
</script>

<style scoped>
  .FlexDiv {
    background: #f7f9f9;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    }

  .LogoTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    }

  .Logo {
    height: 10vh;
    }

  .Title {
    font-size: 3rem;
    font-weight: bold;
    margin: 0 0 0 1rem;
    color: black;
    padding-right: 1rem;
    border-right: 2px solid black;
    }

  .Title:hover {
    opacity: 0.6
    }

  .CurrentUser {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    color: black;
    padding-left: 1rem;
    }

  .CurrentUser:hover {
    opacity: 0.6
    }

  .LogOutButton {
    font-size: 2rem;
    margin: 0;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    border: none;
    background-color: black;
    color: white;
    font-family: 'Red Rose', cursive;
    cursor: pointer;
    }

  .LogOutButton:hover {
    opacity: 0.6
    }


  a {
    text-decoration: none;
    }
</style>
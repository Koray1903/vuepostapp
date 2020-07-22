<template>
  <div class="FlexDiv">
    <form @submit.prevent="checkUser">
      <input
              class="emailInput"
              v-model="emailInput"
              ref="inputRef"
              placeholder="Please enter a valid user email"/>
    </form>
    <p class="ErrorMessage">{{errorMessage}}</p>
    <p class="SuccessMessage">{{successMessage}}</p>
    <p class="Hint">e.g Sincere@april.biz</p>
  </div>
</template>

<script>
  import {store} from "@/store/store";

  export default {
    name: "LoginPage",
    data() {
      return {
        emailInput: "",
        errorMessage: "",
        successMessage: ""
      };
    },
    methods: {
      checkUser: function () {
        this.$store.dispatch("checkUser", this.emailInput);

        if (store.state.isLoggedIn === true) {
          this.successMessage = "You have successfully logged in";
          setTimeout(() => this.$router.push({path: "/home"}), 1000);
        } else {
          this.errorMessage = "Invalid email address";
          setTimeout(() => this.errorMessage = "", 1000);
        }

        this.emailInput = "";
      }
    },
    created() {
      this.$store.dispatch("fetchAllUsers");
      this.$store.dispatch("logOut");
    },
    mounted() {
      this.$refs.inputRef.focus();
    }
  };
</script>

<style scoped>
  .FlexDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    }

  .emailInput {
    border-radius: 1rem;
    font-size: 2rem;
    padding: 0.5rem;
    width: 45vw;
    animation: slide-in-blurred-left 1s ease-in-out both;
    }

  @keyframes slide-in-blurred-left {
    0% {
      transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
      transform-origin: 100% 50%;
      filter: blur(40px);
      opacity: 0;
      }
    100% {
      transform: translateX(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
      }
    }


  .ErrorMessage {
    color: red;
    font-size: 1rem;
    font-weight: bold;
    }

  .SuccessMessage {
    color: green;
    font-size: 1rem;
    font-weight: bold;
    }

  .Hint {
    font-size: 1rem;
    color: black;
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
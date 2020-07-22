<template>
  <div v-if="isLoggedIn">
    <NavBar/>

    <ul v-if="posts">
      <div class="AllPosts">

        <li v-for="post in posts" :key="post.id" class="postList">
          <div class="SinglePost">
            <div class="Title">
              <router-link :to="{ name: 'Post', params: { id: post.id }}">
                <span>{{post.title}}</span>
              </router-link>
            </div>

            <div class="Author">
              <span>Posted by </span>
              <router-link :to="{ name: 'User', params: { id: post.userId }}">
                <span>{{userName(post.userId)}}</span>
              </router-link>
            </div>
          </div>
        </li>

      </div>
    </ul>

  </div>
</template>

<script>
  import {store} from "@/store/store";
  import NavBar from "@/components/NavBar";

  export default {
    name: "HomePage",
    components: {
      NavBar
    },
    data() {
      return {
        posts: store.state.posts,
        userList: store.state.userList,
        isLoggedIn: store.state.isLoggedIn,
        userNameFilter: ""
      };
    },
    methods: {
      userName(id) {
        let user = this.userList.filter(user => user.id === id);
        return user[0].username;
      }
    },
    created() {
      this.$store.dispatch("logIn");
    },
    mounted() {
      this.$store.dispatch("fetchAllPosts");
      window.scrollTo(0, 0);
    }
  };
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    }

  .AllPosts {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5vh 10vw;
    background: #f7f9f9;
    }

  .SinglePost {
    border-radius: 1rem;
    text-align: left;
    width: 40vw;
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 5vh;
    padding: 1rem;
    }

  .Title {
    font-size: 1.5rem;
    animation: slide-in-left 1s ease-in-out both;
    }

  @keyframes slide-in-left {
    0% {
      transform: translateX(-1000px);
      opacity: 0;
      }
    100% {
      transform: translateX(0);
      opacity: 1;
      }
    }

  .Title::first-letter {
    text-transform: capitalize;
    }

  .Author {
    align-self: end;
    font-size: 1rem;
    text-transform: capitalize;
    animation: slide-in-right 1s ease-in-out both;
    }

  @keyframes slide-in-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
      }
    100% {
      transform: translateX(0);
      opacity: 1;
      }
    }

  p {
    color: black;
    }

  span {
    color: black;
    }

  a {
    text-decoration: none;
    }
</style>
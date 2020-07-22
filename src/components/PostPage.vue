<template>
  <div v-if="isLoggedIn">
    <NavBar/>
    <div class="Post">
      <p class="PostTitle">{{post.title}}</p>
      <p class="PostBody">{{post.body}}</p>
      <p class="PostAuthor">Posted by {{user.username}}</p>
    </div>

    <ul v-if="comments">

      <h1>Comments</h1>

      <li v-for="comment in comments" :key="comment.id" class="postList">
        <div class="Comment">
          <p class="CommentName">{{comment.name}}</p>
          <p class="CommentBody">{{comment.body}}</p>
          <p class="CommentEmail">{{comment.email}}</p>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";
  import {store} from "@/store/store";

  export default {
    name: "PostPage",
    components: {
      NavBar
    },
    data() {
      return {
        id: this.$route.params.id,
        comments: store.state.comments,
        isLoggedIn: store.state.isLoggedIn
      };
    },
    computed: {
      post() {
        return this.$store.getters.getPostById(this.id);
      },
      user() {
        return this.$store.getters.getUserById(this.post.userId);
      }
    },
    created() {
      this.$store.dispatch("fetchComments", this.id);
    },
    mounted() {
      window.scrollTo(0, 0);
    }
  };
</script>

<style scoped>
  .Post {
    background: #f7f9f9;
    margin: 5vh 20vw;
    padding: 1rem;
    border-radius: 1rem;
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

  .PostTitle {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    text-align: left;
    line-height: 3.5rem;

    }

  .PostTitle:first-letter {
    text-transform: capitalize;
    }

  .PostBody {
    font-size: 1.5rem;
    margin-top: 1rem;
    text-align: justify;
    line-height: 2rem;
    }

  .PostAuthor {
    font-size: 1.5rem;
    margin-top: 1rem;
    text-align: right;
    }

  .PostBody:first-letter {
    text-transform: capitalize;
    }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    }

  h1 {
    animation: text-focus-in 1s ease-in-out both;
    }

  .Comment {
    margin: 5vh 25vw;
    animation: bounce-in-left 1.5s ease-in-out both;
    }

  @keyframes bounce-in-left {
    0% {
      transform: translateX(-600px);
      animation-timing-function: ease-in;
      opacity: 0;
      }
    38% {
      transform: translateX(0);
      animation-timing-function: ease-out;
      opacity: 1;
      }
    55% {
      transform: translateX(-68px);
      animation-timing-function: ease-in;
      }
    72% {
      transform: translateX(0);
      animation-timing-function: ease-out;
      }
    81% {
      transform: translateX(-28px);
      animation-timing-function: ease-in;
      }
    90% {
      transform: translateX(0);
      animation-timing-function: ease-out;
      }
    95% {
      transform: translateX(-8px);
      animation-timing-function: ease-in;
      }
    100% {
      transform: translateX(0);
      animation-timing-function: ease-out;
      }
    }


  .CommentName {
    text-align: left;
    font-weight: bold;
    font-size: 1rem;
    }

  .CommentName:first-letter {
    text-transform: capitalize;
    }

  .CommentBody {
    text-align: justify;
    font-size: 1rem;
    line-height: 1.5rem;
    }

  .CommentBody:first-letter {
    text-transform: capitalize;
    }

  .CommentEmail {
    text-align: right;
    font-size: 1rem;
    }

</style>
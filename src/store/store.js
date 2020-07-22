import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({

  state: {
    isLoggedIn: false,
    userList: [],
    posts: [],
    comments: [],
    currentUser: {}
  },

  plugins: [createPersistedState()],

  mutations: {
    fetchAllUsers: (state) => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => state.userList = [...res.data]);
    },
    fetchAllPosts: (state) => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => state.posts = [...res.data]);
    },
    fetchComments: (state, payload) => {
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${payload}`)
        .then(res => state.comments = [...res.data]);
    },
    checkUser: (state, payload) => {
      state.currentUser = state.userList.filter(user => user.email === payload);

      if (state.currentUser.length > 0) {
        state.isLoggedIn = true;
      } else {
        return null;
      }
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    logIn: (state) => {
      state.isLoggedIn = true;
    }
  },

  actions: {
    fetchAllUsers: (context, payload) => {
      context.commit("fetchAllUsers", payload);
    },
    fetchComments: (context, payload) => {
      context.commit("fetchComments", payload);
    },
    fetchAllPosts: (context, payload) => {
      context.commit("fetchAllPosts", payload);
    },
    checkUser: (context, payload) => {
      context.commit("checkUser", payload);
    },
    logOut: (context, payload) => {
      context.commit("logOut", payload);
    },
    logIn: (context, payload) => {
      context.commit("logIn", payload);
    },
  },

  getters: {
    getPostById: state => id => {
      return state.posts.find(post => post.id == id);
    },
    getUserById: state => id => {
      return state.userList.find(user => user.id == id);
    }
  }
});



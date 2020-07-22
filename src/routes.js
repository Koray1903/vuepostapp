import HomePage from "@/components/HomePage";
import LoginPage from "@/components/LoginPage";
import UserPage from "@/components/UserPage";
import PostPage from "@/components/PostPage";

const routes = [
  {path: "/", component: LoginPage, name: "Login"},
  {path: "/home", component: HomePage, name: "Home"},
  {path: "/user/:id", component: UserPage, name: "User"},
  {path: "/post/:id", component: PostPage, name: "Post"}
];

export default routes;
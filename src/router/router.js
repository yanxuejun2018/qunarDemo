import Home from "@/views/home/Home.vue";
export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/city",
    name: "city",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/city/City.vue")
  }
];

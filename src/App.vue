<template>
  <div class="flex">
    <sidenav />
    <div class="w-screen">
      <navbar />
      <dashboard />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidenav from "./components/Sidenav.vue";
import Dashboard from "./pages/Dashboard.vue";

export default {
  components: {
    Navbar,
    Sidenav,
    Dashboard,
  },
};
</script>

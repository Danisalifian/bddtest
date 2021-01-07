<template>
  <section class="px-6">
    <h1>Dashboard page</h1>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      getYearEnd: "clients/getYearEnd",
      getYearEndSingle: "clients/getYearEndSingle",
      getSalesOverview: "clients/getSalesOverview",
    }),
  },
  mounted() {
    this.getYearEnd();
    this.getYearEndSingle();
    this.getSalesOverview();
  },
};
</script>

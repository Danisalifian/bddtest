<template>
  <section class="px-6" v-if="isExact">
    <div class="grid grid-cols-4 gap-4 mt-4 ">
      <div class="col-span-3">
        <left-panel />
      </div>
      <div class="col-span-1">
        <right-panel />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LeftPanel from "../components/dashboard/LeftPanel.vue";
import RightPanel from "../components/dashboard/RightPanel.vue";
import moment from "moment";

export default {
  components: {
    LeftPanel,
    RightPanel,
  },
  data() {
    return {
      isExact: false,
    };
  },
  methods: {
    ...mapActions({
      getYearEnd: "clients/getYearEnd",
      getYearEndSingle: "clients/getYearEndSingle",
      filterByDate: "clients/filterByDate",
      getBudget: "clients/getBudget",
      getVisitors: "clients/getVisitors",
      filterVisitorByDate: "clients/filterVisitorByDate",
    }),
  },
  computed: {
    ...mapGetters({
      yearEnd: "clients/yearEnd",
      yearEndSingle: "clients/yearEndSingle",
      range: "clients/range",
    }),

    yearData() {
      return this.yearEnd.data;
    },
  },
  mounted() {
    this.getYearEnd().then(() => {
      this.isExact = true;
    });
    this.getYearEndSingle();
    this.filterByDate();
    this.getBudget();
    this.getVisitors();
    this.filterVisitorByDate();
  },
  watch: {
    range: function() {
      this.filterByDate();
      this.filterVisitorByDate();
    },
  },
};
</script>

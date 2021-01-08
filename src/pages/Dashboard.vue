<template>
  <section class="px-6">
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
import { mapActions } from "vuex";
import LeftPanel from "../components/dashboard/LeftPanel.vue";
import RightPanel from "../components/dashboard/RightPanel.vue";

export default {
  components: {
    LeftPanel,
    RightPanel,
  },
  methods: {
    ...mapActions({
      getYearEnd: "clients/getYearEnd",
      getYearEndSingle: "clients/getYearEndSingle",
    }),
  },
  mounted() {
    this.getYearEnd();
    this.getYearEndSingle();
  },
};
</script>

<template>
  <aside class="relative">
    <overview />
    <timeline />
  </aside>
</template>

<script>
import Overview from "./organisms/OverviewSection.vue";
import Timeline from "./organisms/TimelineSection.vue";

export default {
  components: {
    Overview,
    Timeline,
  },
};
</script>

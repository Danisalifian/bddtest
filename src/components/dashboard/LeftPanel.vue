<template>
  <aside class="relative">
    <overview />
    <timeline />
    <column />
  </aside>
</template>

<script>
import Overview from "./organisms/OverviewSection.vue";
import Timeline from "./organisms/TimelineSection.vue";
import Column from "./organisms/ColumnsSection.vue";

export default {
  components: {
    Overview,
    Timeline,
    Column,
  },
};
</script>

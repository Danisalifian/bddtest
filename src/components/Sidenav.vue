<template>
  <aside>
    <div class="w-max h-full px-4 py-24 border-r">
      <div class="bg-indigo-500 py-2 px-3 rounded">
        <UilEstate size="28px" class="text-white" />
      </div>
      <div class="py-2 px-3 my-4">
        <UilMeetingBoard size="28px" class="text-gray-400" />
      </div>
      <div class="py-2 px-3 my-4">
        <UilGlobe size="28px" class="text-gray-400" />
      </div>
    </div>
  </aside>
</template>

<script>
import { UilEstate } from "@iconscout/vue-unicons";
import { UilMeetingBoard } from "@iconscout/vue-unicons";
import { UilGlobe } from "@iconscout/vue-unicons";

export default {
  components: {
    UilEstate,
    UilMeetingBoard,
    UilGlobe,
  },
};
</script>

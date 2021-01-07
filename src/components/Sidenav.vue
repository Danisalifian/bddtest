<template>
  <aside>
    <div class="w-max h-full px-4 py-24 border-r">
      <div class="flex-col">
        <ul>
          <li class="list-none my-4">
            <router-link
              class="inline-flex py-2 px-3 text-gray-400"
              :to="{ name: 'Dashboard' }"
            >
              <UilEstate size="28px" />
            </router-link>
          </li>
          <li class="list-none my-4">
            <router-link
              class="inline-flex py-2 px-3 text-gray-400"
              :to="{ name: 'Report' }"
            >
              <UilMeetingBoard size="28px" />
            </router-link>
          </li>
          <li class="list-none my-4">
            <router-link
              class="inline-flex py-2 px-3 text-gray-400"
              :to="{ name: 'Network' }"
            >
              <UilGlobe size="28px" />
            </router-link>
          </li>
        </ul>
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

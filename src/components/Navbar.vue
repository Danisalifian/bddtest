<template>
  <nav class="bg-white py-3 px-6">
    <div class="flex justify-between">
      <div class="flex">
        <div class="self-center font-medium text-2xl">
          Dashboard
        </div>
      </div>
      <div class="flex">
        <div
          class="relative flex h-12 shadow-lg rounded-md border border-gray-200 px-4"
        >
          <div class="self-center flex">
            <div class="mr-2">
              <UilCalender size="14px" class="text-gray-400" />
            </div>
            <div class="self-center text-sm">
              <!-- From <span class="font-medium">sat 13 Mar 2020</span> to
              <span class="font-medium">sat 20 Mar 2020</span> -->
              <v-date-picker v-model="range" mode="dateTime" is-range>
                <template v-slot="{ inputValue, inputEvents, isDragging }">
                  <div
                    class="flex flex-col sm:flex-row justify-start items-center"
                  >
                    <div class="relative text-sm">
                      <div
                        :class="
                          isDragging
                            ? 'text-gray-600 mr-1'
                            : 'text-gray-900 mr-1'
                        "
                        :value="inputValue.start"
                        v-on="inputEvents.start"
                      >
                        From
                        <span class="font-medium">{{
                          formatDate(range.start)
                        }}</span>
                      </div>
                    </div>
                    <div class="relative text-sm">
                      <div
                        :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                        :value="inputValue.end"
                        v-on="inputEvents.end"
                      >
                        To
                        <span class="font-medium">{{
                          formatDate(range.end)
                        }}</span>
                      </div>
                    </div>
                  </div>
                </template>
              </v-date-picker>
            </div>
          </div>
        </div>

        <!-- Profile -->
        <div
          class="ml-3 flex relative h-12 shadow-lg rounded-md border border-gray-200 px-4"
        >
          <div class="self-center flex">
            <img
              class="h-8 w-8 rounded-full border-2 border-blue-600"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <div class="self-center ml-3 font-medium text-sm">
              Hi, John Doe
            </div>
            <div class="self-center ml-8">
              <UilCaretRight size="12px" class="transform rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { UilCaretRight } from "@iconscout/vue-unicons";
import { UilCalender } from "@iconscout/vue-unicons";
import moment from "moment";

export default {
  components: {
    UilCaretRight,
    UilCalender,
  },
  data() {
    return {
      range: {
        start: new Date(),
        end: new Date(),
      },
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("ddd DD MMM YYYY");
    },
  },
};
</script>

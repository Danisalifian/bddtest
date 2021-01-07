<template>
  <section class="px-4">
    <div class="mt-2 text-sm font-semibold">
      Summary Report
    </div>
    <div class="px-2">
      <div class="py-4">
        <div class="text-sm font-medium text-gray-400">
          Total Sales
        </div>
        <div class="text-lg font-semibold text-gray-800 mt-1">
          Rp 29.100.134
        </div>
        <div class="flex mt-1">
          <div
            class="rounded-full bg-gray-300 w-4 h-4 flex relative justify-center mr-2 self-center"
          >
            <UilArrowUpRight size="10px" class="text-gray-500 self-center" />
          </div>
          <div class="text-sm font-medium text-gray-400">
            +30.5 %
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="text-sm font-medium text-gray-400">
          Paid Order
        </div>
        <div class="text-lg font-semibold text-gray-800 mt-1">
          118
        </div>
        <div class="flex mt-1">
          <div
            class="rounded-full bg-yellow-100 w-4 h-4 flex relative justify-center mr-2 self-center"
          >
            <UilArrowDownRight
              size="10px"
              class="text-yellow-700 self-center"
            />
          </div>
          <div class="text-sm font-medium text-gray-400">
            -5 %
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="text-sm font-medium text-gray-400">
          Cancel Order
        </div>
        <div class="text-lg font-semibold text-gray-800 mt-1">
          39
        </div>
        <div class="flex mt-1">
          <div
            class="rounded-full bg-yellow-100 w-4 h-4 flex relative justify-center mr-2 self-center"
          >
            <UilArrowDownRight
              size="10px"
              class="text-yellow-700 self-center"
            />
          </div>
          <div class="text-sm font-medium text-gray-400">
            -10 %
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="text-sm font-medium text-gray-400">
          Pending Amount
        </div>
        <div class="text-lg font-semibold text-gray-800 mt-1">
          Rp .9.755.000
        </div>
        <div class="flex mt-1">
          <div
            class="rounded-full bg-gray-300 w-4 h-4 flex relative justify-center mr-2 self-center"
          >
            <UilArrowUpRight size="10px" class="text-gray-500 self-center" />
          </div>
          <div class="text-sm font-medium text-gray-400">
            +9.5 %
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="text-sm font-medium text-gray-400">
          Pending Order
        </div>
        <div class="text-lg font-semibold text-gray-800 mt-1">
          34
        </div>
        <div class="flex mt-1">
          <div
            class="rounded-full bg-gray-300 w-4 h-4 flex relative justify-center mr-2 self-center"
          >
            <UilArrowUpRight size="10px" class="text-gray-500 self-center" />
          </div>
          <div class="text-sm font-medium text-gray-400">
            +50 %
          </div>
        </div>
        <div class="py-4">
          <div class="text-sm font-medium text-gray-400">
            Shipping
          </div>
          <div class="text-lg font-semibold text-gray-800 mt-1">
            Rp. 9.755.000
          </div>
          <div class="flex mt-1">
            <div
              class="rounded-full bg-gray-300 w-4 h-4 flex relative justify-center mr-2 self-center"
            >
              <UilArrowUpRight size="10px" class="text-gray-500 self-center" />
            </div>
            <div class="text-sm font-medium text-gray-400">
              +9.5 %
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { UilArrowUpRight } from "@iconscout/vue-unicons";
import { UilArrowDownRight } from "@iconscout/vue-unicons";

export default {
  components: {
    UilArrowUpRight,
    UilArrowDownRight,
  },
};
</script>

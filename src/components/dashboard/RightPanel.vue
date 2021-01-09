<template>
  <section class="px-4" v-if="isExact">
    <div class="shadow-lg border border-gray-100 rounded-md px-5">
      <div class="mt-3 text-sm font-semibold">
        Summary Report
      </div>
      <div class="px-2">
        <div class="py-4">
          <div class="text-sm font-medium text-gray-400">
            Total Sales
          </div>
          <div class="text-lg font-semibold text-gray-800 mt-1">
            Rp {{ formatCurrency(salesData.today_sales) }}
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
            {{ salesData.order_paid }}
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
            {{ salesData.order_cancel }}
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
            Rp {{ formatCurrency(salesData.total_pending) }}
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
            {{ salesData.order_pending }}
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
              Rp. {{ formatCurrency(salesData.total_shipping) }}
            </div>
            <div class="flex mt-1">
              <div
                class="rounded-full bg-gray-300 w-4 h-4 flex relative justify-center mr-2 self-center"
              >
                <UilArrowUpRight
                  size="10px"
                  class="text-gray-500 self-center"
                />
              </div>
              <div class="text-sm font-medium text-gray-400">
                +9.5 %
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-6 shadow-lg border border-gray-100 rounded-md px-5 py-3 relative"
    >
      <div class="relative flex justify-center self-center">
        <apexchart
          type="donut"
          :options="chartOptions"
          :series="series"
        ></apexchart>
        <div class="absolute self-center text-xs font-semibold text-gray-800">
          Budget Chart
        </div>
      </div>
      <div class="flex mt-6 flex-wrap">
        <div class="flex mx-2 mt-1">
          <div class="w-3 h-3 rounded-sm bg-blue-500 self-center mr-1"></div>
          <div class="text-xs font-medium">
            Awareness
          </div>
        </div>
        <div class="flex mx-2 mt-1">
          <div class="w-3 h-3 rounded-sm bg-yellow-500 self-center mr-1"></div>
          <div class="text-xs font-medium">
            Traffics
          </div>
        </div>
        <div class="flex mx-2 mt-1">
          <div class="w-3 h-3 rounded-sm bg-yellow-600 self-center mr-1"></div>
          <div class="text-xs font-medium">
            Conversions
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { UilArrowUpRight } from "@iconscout/vue-unicons";
import { UilArrowDownRight } from "@iconscout/vue-unicons";
import { mapGetters } from "vuex";

export default {
  components: {
    UilArrowUpRight,
    UilArrowDownRight,
  },
  data() {
    return {
      series: [],

      chartOptions: {
        labels: ["Awareness", "Traffics", "Conversions"],
        chart: {
          type: "donut",
        },
        colors: ["#3B82F6", "#F59E0B", "#D97706"],
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters({
      salesOverview: "clients/salesOverview",
      budget: "clients/budget",
    }),
    budgetData() {
      return this.budget.data;
    },
    salesData() {
      return this.salesOverview.data;
    },
    isExact() {
      return this.salesOverview;
    },
  },
  methods: {
    // format number currency
    formatCurrency(val) {
      return val
        .toString()
        .replace(/-/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    // Populate data series
    populateData() {
      this.series = [
        this.budgetData.awareness,
        this.budgetData.conversions,
        this.budgetData.traffics,
      ];
    },
  },
  mounted() {
    this.populateData();
  },
};
</script>

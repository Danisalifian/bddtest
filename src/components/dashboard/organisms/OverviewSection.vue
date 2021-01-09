<template>
  <section v-if="isExact">
    <div class="grid grid-cols-3 gap-4">
      <div>
        <card-sales class="shadow-xl">
          <div class="flex">
            <img
              src="../../../assets/img/rp-currency.svg"
              class="w-4 h-4 self-center mr-1"
            />
            <div class="text-gray-400 text-sm font-medium">
              Sales {{ orderPaid }} Paid Order
            </div>
          </div>
          <div class="font-semibold text-2xl my-2">
            Rp. {{ formatCurrency(todaySales) }}
          </div>
          <chart-container>
            <apexchart
              width="100%"
              height="70%"
              type="area"
              :options="optionsSales"
              :series="series"
            >
            </apexchart>
          </chart-container>
        </card-sales>
      </div>
      <div>
        <card-sales class="shadow-xl">
          <div class="flex">
            <UilRedo
              class="text-lg text-gray-400 font-bold -scale-x-rotate-1 self-center mr-1"
            />
            <div class="text-gray-400 text-sm font-medium">
              Cancel <span class="text-red-500">{{ orderCancel }} Orders</span>
            </div>
          </div>
          <div class="font-semibold text-2xl my-2 ">
            Rp. {{ formatCurrency(totalCancel) }}
          </div>
          <chart-container>
            <apexchart
              width="100%"
              height="70%"
              type="area"
              :options="optionsCancel"
              :series="series"
            >
            </apexchart>
          </chart-container>
        </card-sales>
      </div>
      <div>
        <card-sales class="shadow-xl">
          <div class="flex">
            <UilShoppingCart
              class="text-lg text-gray-400 font-bold self-center mr-1"
            />
            <div class="text-gray-400 text-sm font-medium">
              Pending
              <span class="text-yellow-500">{{ orderPending }} Orders</span>
            </div>
          </div>
          <div class="font-semibold text-2xl my-2">
            Rp. {{ formatCurrency(totalPending) }}
          </div>
          <chart-container>
            <apexchart
              width="100%"
              height="70%"
              type="area"
              :options="optionsPending"
              :series="series"
            >
            </apexchart>
          </chart-container>
        </card-sales>
      </div>
    </div>
  </section>
</template>

<script>
import { CardSales, ChartContainer } from "./styledComponents";
import { UilRedo } from "@iconscout/vue-unicons";
import { UilShoppingCart } from "@iconscout/vue-unicons";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    CardSales,
    ChartContainer,
    UilRedo,
    UilShoppingCart,
  },
  data() {
    return {
      isExact: false,
      series: [
        {
          name: "series 1",
          data: [40, 60, 30],
        },
      ],
      optionsSales: {
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
          width: "100%",
        },
        tooltip: {
          enabled: false,
        },
        colors: ["#546E7A"],
        grid: {
          show: false,
          padding: {
            top: -10,
            right: -10,
            bottom: -10,
            left: -10,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        legend: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.3,
            stops: [0, 90, 100],
            colorStops: [],
          },
        },
      },
      optionsCancel: {
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
          width: "100%",
        },
        tooltip: {
          enabled: false,
        },
        colors: ["#EF4444"],
        grid: {
          show: false,
          padding: {
            top: -10,
            right: -10,
            bottom: -10,
            left: -10,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        legend: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.3,
            stops: [0, 90, 100],
            colorStops: [],
          },
        },
      },
      optionsPending: {
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
          width: "100%",
        },
        tooltip: {
          enabled: false,
        },
        grid: {
          show: false,
          padding: {
            top: -10,
            right: -10,
            bottom: -10,
            left: -10,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        legend: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        colors: ["#F59E0B"],
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.3,
            stops: [0, 90, 100],
            colorStops: [],
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      salesOverview: "clients/salesOverview",
    }),

    orderPaid() {
      return this.salesOverview.data.order_paid;
    },
    orderCancel() {
      return this.salesOverview.data.order_cancel;
    },
    orderPending() {
      return this.salesOverview.data.order_pending;
    },
    totalPending() {
      return this.salesOverview.data.total_pending;
    },
    totalCancel() {
      return this.salesOverview.data.total_cancel;
    },
    totalShipping() {
      return this.salesOverview.data.total_shipping;
    },
    todaySales() {
      return this.salesOverview.data.today_sales;
    },
  },
  methods: {
    ...mapActions({
      getSalesOverview: "clients/getSalesOverview",
    }),
    // Format number currency
    formatCurrency(val) {
      return val
        .toString()
        .replace(/-/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  mounted() {
    this.getSalesOverview().then(() => {
      this.isExact = true;
    });
  },
};
</script>

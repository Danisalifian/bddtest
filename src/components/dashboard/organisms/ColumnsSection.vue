<template>
  <section class="mt-10 py-6 shadow-sm rounded-md" v-if="isExact">
    <div class="flex mb-6">
      <div class="flex mx-2">
        <div class="w-3 h-3 rounded-sm bg-blue-500 self-center mr-2"></div>
        <div class="font-semibold">
          New Visitor
        </div>
      </div>
      <div class="flex mx-2">
        <div class="w-3 h-3 rounded-sm bg-yellow-500 self-center mr-2"></div>
        <div class="font-semibold">
          Returning Visitor
        </div>
      </div>
    </div>
    <chart-container-md>
      <apexchart
        type="bar"
        width="100%"
        height="100%"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </chart-container-md>
  </section>
</template>

<script>
import { ChartContainerMd } from "./styledComponents";
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  components: {
    ChartContainerMd,
  },
  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        colors: ["#3B82F6", "#F59E0B"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [],
          labels: {
            style: {
              fontSize: "12px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
            },
          },
        },
        yaxis: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
        legend: {
          show: false,
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      visitors: "clients/visitors",
      range: "clients/range",
      filteredVisitor: "clients/filteredVisitor",
    }),
    isExact() {
      return this.filteredVisitor;
    },
  },
  methods: {
    // Populate data series
    populateData() {
      this.series = this.filteredVisitor.map((items) => {
        let obj = {
          name: items.visitor_type,
          data: items.data.map((item) => {
            return item.value;
          }),
        };
        return obj;
      });
    },
    // Populate xaxis label
    populateXdata() {
      let Xlabel = this.filteredVisitor.map((items) => {
        let timeX = [];
        items.data.map((item) => {
          return timeX.push(
            moment(item.dateTime)
              .format("DD MMM")
              .toString()
          );
        });
        return timeX;
      });

      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: Xlabel[0],
          },
        },
      };
    },
    // get weekly date to initiate xaxis labels
    getOneWeekDate() {
      let today = Date.now();
      let days = 7;
      let dates = [];
      for (let i = 0; i < days; i++) {
        let date = moment(
          new Date(today - i * 1000 * 60 * 60 * 24).toDateString()
        ).format("DD MMM");
        dates.push(date);
      }
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: dates.reverse(),
          },
        },
      };
    },
  },
  mounted() {
    this.getOneWeekDate();
    this.populateData();
  },
  watch: {
    range() {
      this.populateData();
      this.populateXdata();
    },
  },
};
</script>

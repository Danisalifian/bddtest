<template>
  <section class="mt-10 py-6 shadow-sm rounded-md">
    <chart-container-md>
      <apexchart
        type="area"
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
          height: 350,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0,
            opacityTo: 0,
            // stops: [0, 90, 100],
            colorStops: [],
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
          type: "datetime",
          categories: [],
          labels: {
            offsetX: 10,
            style: {
              fontSize: "12px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
            },
          },
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      filtered: "clients/filtered",
      range: "clients/range",
    }),
    filterdData() {
      return this.filtered;
    },
  },
  methods: {
    // Populate data series
    populateData() {
      this.series = this.filterdData.map((items) => {
        let obj = {
          name: items.account_name,
          data: items.data.map((item) => {
            return item.value;
          }),
        };
        return obj;
      });
    },
    // Populate xaxis label
    populateXdata() {
      let Xlabel = this.filterdData.map((items) => {
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
            categories: dates,
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
    range: function() {
      this.populateData();
      this.populateXdata();
    },
  },
};
</script>

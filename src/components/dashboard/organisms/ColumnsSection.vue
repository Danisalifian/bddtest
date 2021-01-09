<template>
  <section class="mt-10 py-6 shadow-sm rounded-md">
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

export default {
  components: {
    ChartContainerMd,
  },
  data() {
    return {
      series: [
        {
          name: "A",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "B",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
      ],
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
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
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
};
</script>

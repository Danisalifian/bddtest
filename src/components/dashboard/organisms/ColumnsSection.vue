<template>
  <section class="mt-10 py-6 shadow-sm rounded-md">
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

<template>
  <section class="px-6" v-if="isExact">
    <div class="grid grid-cols-4 gap-4 mt-4 ">
      <div class="col-span-3">
        <left-panel />
      </div>
      <div class="col-span-1">
        <right-panel />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LeftPanel from "../components/dashboard/LeftPanel.vue";
import RightPanel from "../components/dashboard/RightPanel.vue";
import moment from "moment";

export default {
  components: {
    LeftPanel,
    RightPanel,
  },
  data() {
    return {
      isExact: false,
    };
  },
  methods: {
    ...mapActions({
      getYearEnd: "clients/getYearEnd",
      getYearEndSingle: "clients/getYearEndSingle",
    }),
    strToDate(val) {
      return moment(val)._d;
    },
    ClientData() {
      let arrClient = this.yearData.metric.clicks;
      arrClient.map((items) => {
        // console.log(items.account_name);
        this.filtering(items.data);
      });
    },

    filtering(dataArray) {
      let start = "01 Oct 2019";
      let end = "7 Oct 2019";
      let arr = dataArray;
      let obj = {};
      let objArr = [];
      // Convert Array data to object
      arr.map((items) => {
        obj = {
          date: items[0],
          value: items[1],
          dateTime: this.strToDate(items[0]),
        };
        objArr.push(obj);
      });
      // Filter Array of object
      let filtered = objArr.filter((item) => {
        return (
          item.dateTime >= this.strToDate(start) &&
          item.dateTime <= this.strToDate(end)
        );
      });

      console.log(filtered);
    },
  },
  computed: {
    ...mapGetters({
      yearEnd: "clients/yearEnd",
      yearEndSingle: "clients/yearEndSingle",
      range: "clients/range",
    }),

    yearData() {
      return this.yearEnd.data;
    },
  },
  mounted() {
    this.getYearEnd().then(() => {
      this.isExact = true;
    });
    this.getYearEndSingle();
    this.ClientData();
  },
  watch: {
    range: function() {
      console.log(this.range);
    },
  },
};
</script>

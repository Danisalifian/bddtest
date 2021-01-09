import yearEnd from "../../../data/year-end.json";
import yearEndSingle from "../../../data/year-end(single-client).json";
import salesOverview from "../../../data/sales-overview.json";
import budget from "../../../data/budget.json";
import visitors from "../../../data/visitors.json";
const moment = require("moment");

function strToDate(val) {
  return moment(val)._d;
}

function filterData(dataArray, range) {
  let start = strToDate(range.start);
  let end = strToDate(range.end);
  let arr = dataArray;
  let obj = {};
  let objArr = [];
  // Convert Array data to object
  arr.map((items) => {
    obj = {
      date: items[0],
      value: items[1],
      dateTime: strToDate(items[0]),
    };
    objArr.push(obj);
  });
  // Filter Array of object
  let result = objArr.filter((item) => {
    return item.dateTime >= start && item.dateTime <= end;
  });
  return result;
}

const actions = {
  getYearEnd({ commit }) {
    commit("setYearEnd", yearEnd);
  },
  getYearEndSingle({ commit }) {
    commit("setYearEndSingle", yearEndSingle);
  },
  getSalesOverview({ commit }) {
    commit("setSalesOverview", salesOverview);
  },
  setDateRange({ commit }, dates) {
    let range = {
      start: moment(dates.start)
        .format("DD MMM YYYY")
        .toString(),
      end: moment(dates.end)
        .format("DD MMM YYYY")
        .toString(),
    };
    commit("setDateRange", range);
  },
  getBudget({ commit }) {
    commit("setBudget", budget);
  },
  getVisitors({ commit }) {
    commit("setVisitors", visitors);
  },

  filterByDate({ state, commit }) {
    let dataArray = state.yearEnd.data.metric.clicks;
    let dataObj = {};
    let filtered = [];
    dataArray.map((el) => {
      dataObj = {
        account_name: el.account_name,
        data: filterData(el.data, state.range),
      };
      filtered.push(dataObj);
    });
    commit("setFilteredByDate", filtered);
  },
  filterVisitorByDate({ state, commit }) {
    let dataArray = state.visitors.data.data;
    let dataObj = {};
    let filteredVisitor = [];
    dataArray.map((el) => {
      dataObj = {
        visitor_type: el.visitor_type,
        data: filterData(el.data, state.range),
      };
      filteredVisitor.push(dataObj);
    });
    commit("setFilteredVisitorByDate", filteredVisitor);
  },
};

export default actions;

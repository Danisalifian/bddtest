import yearEnd from "../../../data/year-end.json";
import yearEndSingle from "../../../data/year-end(single-client).json";
import salesOverview from "../../../data/sales-overview.json";

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
};

export default actions;

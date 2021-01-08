const mutations = {
  setYearEnd(state, yearEnd) {
    state.yearEnd = yearEnd;
  },
  setYearEndSingle(state, yearEndSingle) {
    state.yearEndSingle = yearEndSingle;
  },
  setSalesOverview(state, salesOverview) {
    state.salesOverview = salesOverview;
  },
  setDateRange(state, range) {
    state.range = range;
  },
  setFilteredByDate(state, filtered) {
    state.filtered = filtered;
  },
};

export default mutations;

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
  setBudget(state, budget) {
    state.budget = budget;
  },
  setVisitors(state, visitors) {
    state.visitors = visitors;
  },
  setFilteredVisitorByDate(state, filteredVisitor) {
    state.filteredVisitor = filteredVisitor;
  },
};

export default mutations;

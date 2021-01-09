const getters = {
  yearEnd(state) {
    return state.yearEnd;
  },
  yearEndSingle(state) {
    return state.yearEndSingle;
  },
  salesOverview(state) {
    return state.salesOverview;
  },
  range(state) {
    return state.range;
  },
  filtered(state) {
    return state.filtered;
  },
  budget(state) {
    return state.budget;
  },
  visitors(state) {
    return state.visitors;
  },
  filteredVisitor(state) {
    return state.filteredVisitor;
  },
};

export default getters;

function getLastWeek() {
  let today = new Date();
  let lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );
  return lastWeek;
}

const state = {
  yearEnd: null,
  yearEndSingle: null,
  salesOverview: null,
  range: {
    start: getLastWeek(),
    end: new Date(),
  },
  filtered: null,
};

export default state;

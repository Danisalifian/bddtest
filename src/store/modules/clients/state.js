const moment = require("moment");

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
    start: moment(getLastWeek())
      .format("DD MMM YYYY")
      .toString(),
    end: moment(new Date())
      .format("DD MMM YYYY")
      .toString(),
  },
  filtered: null,
};

export default state;

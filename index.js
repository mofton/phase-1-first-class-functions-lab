// Code your solution in this file!
// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2);
};
const returnLastTwoDrivers = (arr) => {
  return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (value) => {
  return (fare) => value * fare;
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(arrayOfDrivers, returnDrivers) {
  return returnDrivers(arrayOfDrivers);
}

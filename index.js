// Code your solution in this file
function findMatching(drivers, search) {
  return drivers.filter(name => name.toLowerCase() === search.toLowerCase());
};

function fuzzyMatch(drivers, search) {
  return drivers.filter(name => name.slice(0, search.length) === search);
};

function matchName(drivers, search) {
  return drivers.filter(obj => obj["name"].toLowerCase() === search.toLowerCase())
};

// Code your solution in this file
function findMatching(drivers, item) {
  return drivers.filter(name => name.toLowerCase() === item.toLowerCase());
};

 function fuzzyMatch(drivers, item) {
  return drivers.filter(name => name.slice(0, item.length) === item);
};

 function matchName(drivers, item) {
  return drivers.filter(obj => obj["name"].toLowerCase() === item.toLowerCase())
};

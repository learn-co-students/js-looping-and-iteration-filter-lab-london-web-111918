// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function(driver) { return driver.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(drivers, name) {
  const matches = drivers.filter(function(driver) {
    return driver.substring(0, name.length).toLowerCase() === name.toLowerCase()
  });
  return matches;
}

function matchName(drivers, request) {
  const matches = drivers.filter(function(driver) {
    return driver["name"].toLowerCase() === request.toLowerCase()
  });
  return matches;
}

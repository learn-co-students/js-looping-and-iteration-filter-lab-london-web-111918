// Code your solution in this file
function findMatching(drivers, string) {
  const result = drivers.filter(driver => driver.toUpperCase() == string.toUpperCase());
  return result;
}

function fuzzyMatch(drivers, string) {
  const result = drivers.filter(driver => driver.startsWith(string));
  return result;
}

function matchName(drivers, string) {
  const result = drivers.filter(driver => driver.name === string);
  return result;
}

function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, letters) {
  let length = letters.length;
  return list.filter(function (driver) {
    return driver.slice(0, length) === letters;
  });
}

function matchName(list, string) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  });
}

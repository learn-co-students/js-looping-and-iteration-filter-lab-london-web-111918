// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function(d){
    return d.toLowerCase() === name.toLowerCase()
  });
}

function fuzzyMatch(drivers, letters){
  return drivers.filter(function (driver){
    return driver.startsWith(letters);
  });
}

function matchName(drivers, name){
  const newArr = drivers.filter(function(obj){
    return obj.name === name;
  });
  return newArr;
}

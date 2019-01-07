// Code your solution in this file
function findMatching(collection, item) {
  const newArr = collection.filter(function (name) {
    return name.toLowerCase() === item.toLowerCase();
  }).slice();
  return newArr;
}

function fuzzyMatch(collection, sub) {
  const newArr = collection.filter(function (name) {
    return name.substring(0, sub.length) === sub;
  });
  return newArr;
}

function matchName(collection, name) {
  const newArr = collection.filter(function (obj) {
    return obj.name === name;
  });
  return newArr;
}

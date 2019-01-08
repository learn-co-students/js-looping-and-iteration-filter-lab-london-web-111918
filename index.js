// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, name) {
  return drivers.filter(function (driver) {return driver.toLowerCase() === name.toLowerCase();});
}



function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (driver){
    return driver.startsWith(letters);}
  );
}


function matchName(drivers, nome) {
  return drivers.filter(function (driver) {
    return driver.name === nome;}
  );
}

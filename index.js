// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(name){
  newdrivers = drivers.filter(dname => dname === name)
  return newdrivers
}

findMatching("Bobby")

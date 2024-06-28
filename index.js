// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2)
}
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}
const fareDoubler = function (fare){
    let doubleFare
    doubleFare = fare * 2
   return doubleFare 
}
const fareTripler = function (fare){
    let tripleFare
    tripleFare = fare * 3
   return tripleFare 
}

function selectDifferentDrivers(arrayOfDrivers,func){
    return func(arrayOfDrivers)
} 
function findMatching(drivers, string) {
    return drivers.filter(name => {
        return name.toLowerCase() === string.toLowerCase();
    });
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === string.toLowerCase();
    });
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(name =>{
        return name.slice(0, string.length) === string;
    });
}
function getFlagValue(flag) {
    const index = process.argv.indexOf(flag) + 1 
    return process.argv[index]
}
module.exports = getFlagValue;

/*
jeito que eu fiz
module.exports = function getFlag(name) {

    const firstName = process.argv[2];
    const greeting = process.argv[3];
}

console.log(process.argv)*/
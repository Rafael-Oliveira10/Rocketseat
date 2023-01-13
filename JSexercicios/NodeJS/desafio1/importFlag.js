const getFlagValue = require('./getFlag')

console.log(`Olá ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)
/*
jeito que eu fizz
const importFlag = require('./getFlag')

console.log(importFlag)*/
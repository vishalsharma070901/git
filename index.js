const jsonfile = require('jsonfile');
const moment = require('moment');
const { default: simpleGit } = require('simple-git');

const file = './data.json';

const date   = moment().format('YYYY-MM-DD');

jsonfile.writeFile(file, date)

simpleGit().add([file]).commit(date, { '--date': date })
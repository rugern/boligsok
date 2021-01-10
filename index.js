const queryString = require('query-string');
const { locations, query } = require('./data');
const open = require('open');

const createLink = (params) =>
  `https://www.finn.no/realestate/homes/search.html?filters=&${queryString.stringify(params)}`;

const printFormat = (location, params) => `${location.name}: ${createLink(params)}`;

if(process.argv[2] === 'print') {
  locations.map(location => console.log(printFormat(location, { ...location, ...query })));
} else {
  (async () => {
    await Promise.all(locations.map(async location => await open(createLink({ ...location, ...query }))));
  })();
}

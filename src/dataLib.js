// const inventory_sets = require('csv-loader!../data/inventory_sets.csv');
// const inventory_sets = require('../data/inventory_sets.csv');

const inventories = require('../data/inventories.csv');
// const inventory_parts = require('../data/inventory_parts.csv');
// const inventory_sets = require('../data/inventory_sets.csv');
// const part_categories = require('../data/part_categories.csv');
// const part_relationships = require('../data/part_relationships.csv');
// const parts = require('../data/parts.csv');
// const sets = require('../data/sets.csv');
// const themes = require('../data/themes.csv');



const createItem = () =>
    {
    
    return { test1: 'test1' };
}

// console.log('test2 in dataLib', createItem());

module.exports = {
    createItem: createItem
}
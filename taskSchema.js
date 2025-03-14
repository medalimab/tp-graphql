const fs = require('fs');
const path = require('path');

const schemaPath = path.join(__dirname, 'taskSchema.gql');
const typeDefs = fs.readFileSync(schemaPath, 'utf-8'); 

module.exports = typeDefs;

// Abstraction layer to handle knex configuration per enviornment.

import knex from 'knex';
import configdb from '../knexfile.js';

const environment = process.env.NODE_ENV || 'development';

const config = configdb[environment];

const db = knex(config);

export default db;
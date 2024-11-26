
import knex from '../database/connection.js';

class BaseRepository {
    constructor(table) {
        this.db = knex(table);
    }

    listData = async () => {
        return await this.db;
    }
    
    getData = async (criteria) => {
        const result = await this.db.where(criteria).first();
        return result[0];
    }
    
    createData = async (inputs) => {
        const result = await this.db.insert(inputs).returning('*');
        return result[0];
    }
    
    updateData = async (id, inputs) => {
        const result = await this.db.where({ id }).update(inputs).returning('*');
        return result[0];
    }
    
    removeData = async (id) => {
        const result = await this.db.where({ id }).del();
        return result[0];
    }
    
}

export default BaseRepository;
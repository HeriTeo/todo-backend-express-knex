import BaseRepository from "./base.repository.js";

class UserRepository extends BaseRepository{
    constructor() {
        super('users')
    }
    
}

export default UserRepository;


import UserRepository from "../repositories/user.repository.js";
import BaseService from "./base.service.js";

class UserService extends BaseService {
    constructor() {
        super(new UserRepository)
    }
}

export default UserService;
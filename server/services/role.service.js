

import RoleRepository from "../repositories/role.repository.js";
import BaseService from "./base.service.js";

class RoleService extends BaseService {
    constructor() {
        super(new RoleRepository)
    }
}

export default RoleService;
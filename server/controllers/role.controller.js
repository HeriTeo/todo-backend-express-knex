
import RoleService from "../services/role.service.js";
import BaseController from "./base.controller.js";

class RoleController extends BaseController {
    constructor() {
        super(new RoleService)
    }
    
}

export default new RoleController();
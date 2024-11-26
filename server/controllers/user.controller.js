

import UserService from "../services/user.service.js";
import BaseController from "./base.controller.js";

class UserController extends BaseController {
    constructor() {
        super(new UserService)
    }
    
}

export default new UserController();


import TeamService from "../services/team.service.js";
import BaseController from "./base.controller.js";

class TeamController extends BaseController {
    constructor() {
        super(new TeamService)
    }
    
}

export default new TeamController();
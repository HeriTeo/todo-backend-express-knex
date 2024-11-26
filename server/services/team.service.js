

import TeamRepository from "../repositories/team.repository.js";
import BaseService from "./base.service.js";

class TeamService extends BaseService {
    constructor() {
        super(new TeamRepository)
    }
}

export default TeamService;
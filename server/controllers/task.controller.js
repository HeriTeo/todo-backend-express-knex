
import TaskService from "../services/task.service.js";
import BaseController from "./base.controller.js";

class TaskController extends BaseController {
    constructor() {
        super(new TaskService)
    }
    
}

export default new TaskController();
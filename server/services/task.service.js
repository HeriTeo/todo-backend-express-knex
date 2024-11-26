

import TaskRepository from "../repositories/task.repository.js";
import BaseService from "./base.service.js";

class TaskService extends BaseService {
    constructor() {
        super(new TaskRepository)
    }
}

export default TaskService;
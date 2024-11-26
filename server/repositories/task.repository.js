import BaseRepository from "./base.repository.js";

class TaskRepository extends BaseRepository{
    constructor() {
        super('tasks')
    }
    
}

export default TaskRepository;
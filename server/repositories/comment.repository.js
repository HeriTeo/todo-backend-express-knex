import BaseRepository from "./base.repository.js";

class CommentRepository extends BaseRepository{
    constructor() {
        super('comments')
    }
    
}

export default CommentRepository;
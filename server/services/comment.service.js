

import CommentRepository from "../repositories/comment.repository.js";
import BaseService from "./base.service.js";

class CommentService extends BaseService {
    constructor() {
        super(new CommentRepository)
    }
}

export default CommentService;
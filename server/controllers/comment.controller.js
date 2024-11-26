
import CommentService from "../services/comment.service.js";
import BaseController from "./base.controller.js";

class CommentController extends BaseController {
    constructor() {
        super(new CommentService)
    }
    
}

export default new CommentController();
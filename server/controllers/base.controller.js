

class BaseController {
    constructor(service) {
        this.service = service;
    }

    sendResponse(res, statusCode, data) {
        return res.status(statusCode).json(data);
    };

    list = async (req, res, next) => {
        try {
            const data = await this.service.listing();
            return this.sendResponse(res, 200, data);
        } catch (error) {
            next(error);
        }
    }
    
    get = async (req, res, next) => {
        try {
            const requestInput = {
                params : req?.params
            }
            const data = await this.service.getting(requestInput);
            return this.sendResponse(res, 200, data);
        } catch (error) {
            next(error);
        }
    }
    
    create = async (req, res, next) => {
        try {
            const requestInput = {
                body : req?.body
            }
            const data = await this.service.creating(requestInput);
            return this.sendResponse(res, 200, data);
        } catch (error) {
            next(error);
        }
    }
    
    update = async (req, res, next) => {
        try {
            const requestInput = {
                params : req?.params,
                body : req?.body
            }
            const data = await this.service.updating(requestInput);
            return this.sendResponse(res, 200, data);
        } catch (error) {
            next(error);
        }
    }
    
    remove = async (req, res, next) => {
        try {
            const requestInput = {
                params: req?.params
            }
            const data = await this.service.removing(requestInput);
            return this.sendResponse(res, 200, data);
        } catch (error) {
            next(error);
        }
    }
    
}

export default BaseController;
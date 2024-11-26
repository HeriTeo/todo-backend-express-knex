import { CustomError } from "../utils/common.js";


class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    listing = async () => {
        try {
            return await this.repository.listData();
        } catch (error) {
            throw CustomError(error.message || "Listing Data Failed", 500, "Error");
        }
    }
    
    getting = async (requestInput) => {
        try {
            const { id: targetId } = requestInput.params;
            const criteria = {
                id : targetId
            };
            return await this.repository.getData(criteria);
        } catch (error) {
            throw CustomError(error.message || "Getting Data Failed", 500, "Error");
        }
    }
    
    creating = async (requestInput) => {
        try {
            const { body: inputs} = requestInput;
            return await this.repository.createData(inputs);
        } catch (error) {
            throw CustomError(error.message || "Creating Data Failed", 500, "Error");
        }
    }
    
    updating = async (requestInput) => {
        try {
            const { id: targetId } = requestInput.params;
            const { body: inputs} = requestInput;
            return await this.repository.updateData(targetId, inputs);
        } catch (error) {
            throw CustomError(error.message || "Updating Data Failed", 500, "Error");
        }
    }
    
    removing = async (requestInput) => {
        try {
            const { id: targetId } = requestInput.params;
            return await this.repository.removeData(targetId);
        } catch (error) {
            throw CustomError(error.message || "Removing Data Failed", 500, "Error");
        }
    }
    
}

export default BaseService;
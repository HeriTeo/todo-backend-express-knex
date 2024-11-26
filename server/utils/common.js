// mean common used function


export const CustomError = (message, statusCode, errorName) => {
    const errorIs = new Error(message);
    errorIs.statusCode = statusCode;
	errorIs.name = errorName;
	Error.captureStackTrace(errorIs, CustomError);
	return errorIs;
};
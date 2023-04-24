


// create Error  
const createError = (status, msg) => {
    const err = new Error();
    err.status = status;
    err.message = msg;
    return err;          //send error express error handler
}

export default createError;





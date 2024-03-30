const asyncHandler = fn => (req, res, next) => {     // To avoid try catch block
    Promise.resolve(fn(req, res, next)).catch(next);
}

export default asyncHandler;
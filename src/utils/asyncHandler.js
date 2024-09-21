//**** A WRAPPER FUNCTION TO HANDLE ASYNC RESPONSE *****

// try catch approach 
// const asyncHandler = (fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message: error.message
//         })
        
//     }
// }

//promise approach

const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}

/*Even though you didn’t return anything explicitly in the original asyncHandler, the requestHandler(req, res, next) is an async function that returns a promise, so the promise is handled behind the scenes.
It’s good practice to explicitly return promises to maintain clear, consistent, and predictable behavior across your code.
The promise chain is still respected by Express, but adding a return ensures clarity and allows your code to handle asynchronous operations more reliably in all situations. */
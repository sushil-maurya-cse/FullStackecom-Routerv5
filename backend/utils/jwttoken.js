
// creating token and storing it in cookie

const sendtoken = (user,statusCode,res)=>{
    
    const token= user.getJWTToken();

    // options for cookie
    const options = {
        httpOnly: true,
        expires: new Date().now+process.env.COOKIE_EXP *24*60*60*1000,
    };

    res.status(statusCode).cookie('token',token,options).json({
        success: true,
        user,
        token
    })

}

module.exports =sendtoken;
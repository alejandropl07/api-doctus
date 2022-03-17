const jwt   =   require("jsonwebtoken");
const config   =   require("../config");

exports.verifyToken = async (req, res, next) => {
try {
    const  token   =   req.headers['x-access-token'];
    if(!token){
    return  res.status(403).json({message: 'No token provided'})
    }
    const decode   =   jwt.verify(token,   config.SECRET);
    console.log(decode);

    next();   
} catch (error) {
    return  res.status(401).json({message: 'Unauthorized'})
}
};


/*exports.isAdmin = async (req, res, next) => {
    
};*/
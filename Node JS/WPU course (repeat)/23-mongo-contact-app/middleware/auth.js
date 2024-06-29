const auth = (req, res, next) => {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1]) {
        const token = req.headers.authorization.split('')[1]
    } else {
        res.status(401).json({msg: "Unauthorized"})
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) return err
            console.log(decoded)
        })
    }
}

export default auth
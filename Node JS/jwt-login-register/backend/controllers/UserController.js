import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch(err) {
        console.error(err)
    }
}

export const register = async (req, res) => {
    const {name, email, password, confirmPassword} = req.body
    if(password !== confirmPassword) return res.status(400).json({msg: "password and confirm password doesn't suit!"})
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
        await User.create({
            name: name,
            email: email,
            password: hashedPassword
        })
        res.json({msg: "Registration success!"})
    } catch (err) {
        console.error(err)
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                email: req.body.email
            }
        })
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if(!match) return res.status(400).json({msg: "Wrong password!"})
        const userId = user[0].id
        const name = user[0].name
        const email = user[0].email
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        })
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        })
        await User.update({refresh_token: refreshToken}, {
            where: {
                id: userId
            }
        })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.json({accessToken})
    } catch(err) {
        res.status(404).json({msg: "Email doesn't exist!"})
    }
}
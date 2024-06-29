"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = require("../models/User");
const register = (req, res) => {
    const { username, password } = req.body;
    bcrypt_1.default.hash(password, 10, (error, hashedPassword) => {
        if (error)
            throw error;
        User_1.User.create({ username, password: hashedPassword });
        console.log("Successfuly created a new user!");
        res.status(200).json({ message: "Successfuly created a new user!" });
    });
};
exports.register = register;
//# sourceMappingURL=register.controller.js.map
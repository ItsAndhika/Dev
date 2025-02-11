"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const secretSalt = "skrc928ec8239uqwiocrh2qwieakcew29r832qcojwiekalkjaaomiCLHKFWJRE";
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield User_1.User.findOne({ username });
    if (user !== null) {
        bcrypt_1.default.compare(password, user.password, (error, isMatch) => {
            if (error)
                throw error;
            if (isMatch) {
                jsonwebtoken_1.default.sign({ id: user._id, username }, secretSalt, {}, (error, token) => {
                    if (error)
                        throw error;
                    res.status(200).cookie("token", token).json("ok");
                });
            }
            else {
                res.status(400).json("Wrong credential");
            }
        });
    }
});
exports.login = login;
//# sourceMappingURL=login.controller.js.map
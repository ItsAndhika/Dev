"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_controller_1 = require("../controllers/register.controller");
const registerRouter = express_1.default.Router();
registerRouter.post("/", register_controller_1.register);
exports.default = registerRouter;
//# sourceMappingURL=register.router.js.map
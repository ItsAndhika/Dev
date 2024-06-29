"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const register_router_1 = __importDefault(require("./router/register.router"));
const login_router_1 = __importDefault(require("./router/login.router"));
require("./database/index");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({ credentials: true, origin: "http://localhost:5173" }));
app.use("/register", register_router_1.default);
app.use("/login", login_router_1.default);
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map
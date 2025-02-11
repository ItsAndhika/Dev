"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
});
mongoose_1.default.set("strictQuery", true);
exports.User = mongoose_1.default.model("User", UserSchema);
//# sourceMappingURL=User.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("./controller/userController"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
const userController = new userController_1.default();
app.post('/user', userController.create);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

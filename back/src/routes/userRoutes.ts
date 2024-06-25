import { Router } from "express";
import { getUsers, getUserById, userLogin, Register } from "../controllers/usersController";
import authRegister from "../middlewares/authResgister";
import authLogin from "../middlewares/authLogin";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);

router.post("/register",authRegister , Register);
router.post("/login", authLogin, userLogin);


export default router;
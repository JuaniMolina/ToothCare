import { Router } from "express";
import userRoutes from "./userRoutes";
import appointmentsRoutes from "./appointmentsRoutes";

const router: Router = Router();

router.use("/users", userRoutes);
router.use("/appointments", appointmentsRoutes);


export default router;
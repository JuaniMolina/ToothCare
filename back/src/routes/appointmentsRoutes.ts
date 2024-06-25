import { Router } from "express";
import { getAppointments, getAppointmentById, newAppointment, cancelAppointment } from "../controllers/appointmensController"
import authAppointments from "../middlewares/authAppointment";

const router: Router = Router();

router.get("/", getAppointments);
router.get("/:id", getAppointmentById);

router.post("/schedule",authAppointments, newAppointment);

router.put("/cancel/:id", cancelAppointment);

export default router;
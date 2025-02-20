import express from "express";
const router = express.Router();
import {addNewAdmin, patientRegister,login,getAllDoctors, getUserDetails, logoutAdmin, logoutPatient,  addNewDoctor } from "../controller/userController.js";

import {isAdminAuthenticated,isPatientAuthenticated} from "../moddlewares/auth.js"

router.post("/patient/register",patientRegister);
router.post("/login",login);
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);
router.post("/doctor/addnew",isAdminAuthenticated,addNewDoctor);

router.get("/doctors",getAllDoctors);
router.get("/admin/me",isAdminAuthenticated,getUserDetails);
router.get("/patient/me",isPatientAuthenticated,getUserDetails);
router.get("/admin/logout",isAdminAuthenticated,logoutAdmin);
router.get("/patient/logout",isPatientAuthenticated,logoutPatient);










export default router;
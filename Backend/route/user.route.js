import express from "express";
import { handlelogin, handlesignup } from "../controller/user.controller.js";
const router = express.Router()

router.post('/signup',handlesignup)
router.post('/login',handlelogin)

export default router;

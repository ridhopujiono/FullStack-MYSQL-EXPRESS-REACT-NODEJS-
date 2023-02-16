import express from "express";
import { 
    getUser,
    getUserById,
    storeUser,
    updateUser,
    destroyUser,
 } from "../controllers/UserController.js"

const router = express.Router();

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users", storeUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", destroyUser);

export default router;
import express, { Router } from "express";
import { adminValidation, createMenu, deleteMenu, getMenuById, getMenus, updateMenu } from "../controllers/menuController";
import { verify } from "../middleware/authMiddleware";

const router: Router = express.Router();


router.post("/menus",verify, createMenu);
router.get("/menus", getMenus);
router.get("/menus/:id", getMenuById);
router.post("/admin-validation", adminValidation);
router.put("/menus/:id",verify, updateMenu);
router.delete("/menus/:id",verify, deleteMenu);



export default router;

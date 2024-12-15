import { CookieOptions, Request, Response } from "express";
import Menu from "../models/menuModel";
import jwt from "jsonwebtoken"

export const createMenu = async (req: Request, res: Response) => {
  try {
    const { menuName, description, items } = req.body;
    const newMenu = new Menu({ menuName, description, items });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ message: "Error creating menu", error });
  }
};

export const getMenus = async (req: Request, res: Response) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: "Error fetching menus", error });
  }
};

export const getMenuById = async (req: Request, res: Response): Promise<any>  => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: "Menu not found" });
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: "Error fetching menu", error });
  }
};

export const updateMenu = async (req: Request, res: Response): Promise<any> => {
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMenu) return res.status(404).json({ message: "Menu not found" });
    res.status(200).json(updatedMenu);
  } catch (error) {
    res.status(500).json({ message: "Error updating menu", error });
  }
};

export const deleteMenu = async (req: Request, res: Response):Promise<any>  => {
  try {
    const deletedMenu = await Menu.findByIdAndDelete(req.params.id);
    if (!deletedMenu) return res.status(404).json({ message: "Menu not found" });
    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting menu", error });
  }
};


export const adminValidation = async (req: Request, res: Response):Promise<any> => {
  try {
    const { username, password } = req.body;
   
   if (
  username !== process.env.SUPER_ADMIN_USERNAME || 
  password !== process.env.SUPER_ADMIN_PWD
) {
  return res.status(401).json({ message: 'Invalid credentials' });
}


    const token = jwt.sign({ username: "sdd34348fkj" }, process.env.JWT_SECRET as string, { expiresIn: '1h' });


    const cookieParams: CookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "none" as "none",
      path: '/', 

    };

    res.cookie('token', token, cookieParams)

  
    res.status(200).json({ message: 'access granted', token });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' })
  }
}
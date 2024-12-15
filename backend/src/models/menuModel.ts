import mongoose, { Schema, Document } from "mongoose";

export interface IMenuItem extends Document {
  name: string;
  description: string;
  price: number;
}

export interface IMenu extends Document {
  menuName: string;
  description: string;
  items: IMenuItem[];
}


const MenuItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});


const MenuSchema: Schema = new Schema({
  menuName: { type: String, required: true },
  description: { type: String },
  items: [MenuItemSchema],
});

const Menu = mongoose.model<IMenu>("Menu", MenuSchema);
export default Menu;

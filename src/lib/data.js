
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPlants = async () => {
  try {
    connectToDb();
    const plants = await Product.find({type: "plant"});
    return plants;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Plants!");
  }
};

export const getAccessories = async () => {
  try {
    connectToDb();
    const accessories = await Product.find({type: "accessory"});
    return accessories;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Plants!");
  }
};

export const deleteProductById = async (id) => {
  try {
    connectToDb();
    const product = await Product.findByIdAndDelete(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }
};

export const getPlant = async (slug) => {
  try {
    connectToDb();
    console.log(slug)
    const plant = await Product.findOne({ slug: slug });
    return plant;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Plant!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

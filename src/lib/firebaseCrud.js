import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function addUser(data) {
  try {
    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Документ создан с ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Ошибка при добавлении:", error);
    throw error;
  }
}

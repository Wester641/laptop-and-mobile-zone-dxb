import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";
import "./main.css"

function UpdateFields() {
  const updateProduct = async () => {
    const docId = "EAK9JmIH83sUjqJLDeL6";

    const productRef = doc(db, "products", docId);

    try {
      await updateDoc(productRef, {
        name: "iPhone 16 pro max",
        price: 1099,
        inStock: true,
      });

      alert("Успешно обновлено!");
    } catch (error) {
      console.error("Ошибка при обновлении: ", error);
    }
  };

  return <button onClick={updateProduct} className="update-button">Обновить товар</button>;
}

export default UpdateFields;

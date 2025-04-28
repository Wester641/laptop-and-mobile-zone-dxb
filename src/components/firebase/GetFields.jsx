import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";
import "./main.css";

function GetFields() {
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const docId = "EAK9JmIH83sUjqJLDeL6";
    const productRef = doc(db, "products", docId);

    try {
      const docSnap = await getDoc(productRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("Document not found!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="get-fields">
      <h5>Данные о товаре</h5>
      {product ? (
        <div>
          <p>Название: {product.name}</p>
          <p>Цена: {product.price}</p>
          <p>В наличии: {product.inStock ? "Да" : "Нет"}</p>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}

export default GetFields;

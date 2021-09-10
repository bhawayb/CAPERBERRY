import {db} from "./initFirebase";
import {  collection, getDocs } from 'firebase/firestore/lite';

async function getProducts() {
    const productsCol = collection(db, 'products');
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
  }

export{getProducts};
//   console.log(md);

// src/firebase/food.js
import { db, storage } from './config';
import { 
  collection, addDoc, getDocs, doc, 
  updateDoc, deleteDoc 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// 1. Add/Edit Food Listing (handles image upload)
export const saveFoodListing = async ({ id, ...data }, imageFile) => {
  let imageUrl = data.image || null;
  
  // Upload new image if exists
  if (imageFile) {
    const storageRef = ref(storage, `foodImages/${Date.now()}_${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    imageUrl = await getDownloadURL(storageRef);
  }

  const foodData = { 
    ...data, 
    image: imageUrl,
    userId: auth.currentUser.uid 
  };

  return id 
    ? await updateDoc(doc(db, 'foodListings', id), foodData)
    : await addDoc(collection(db, 'foodListings'), foodData);
};

// 2. Get All Listings
export const getFoodListings = async () => {
  const snapshot = await getDocs(collection(db, 'foodListings'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 3. Delete Listing
export const deleteFoodListing = async (id) => {
  await deleteDoc(doc(db, 'foodListings', id));
};
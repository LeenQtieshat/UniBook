import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "./config.js";

export const addUser = async (user) => {


  // Create a reference to the new document
  const docRef = doc(collection(db, "users"));

  // Set the document with the specified data
  await setDoc(docRef, user);

  // Log the document reference and its ID
  console.log("Document written with ID: ", docRef);
  return docRef
};



export const getUsers = async () => {
  const users = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    users.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log(users);
  return users;
};

export const getUser = async (email) => {
const users = await getUsers();
return users.find(user => user.email === email)
};

export const deleteUser = async (id) => {
  await deleteDoc(doc(db, "users", id));
  console.log("Document successfully deleted!");
};

export const updateUserDetails = async (id, user) => {
  await setDoc(doc(db, "users", id), user);
  console.log("Document successfully updated!");
};

export const checkIfUserExists = async (userName) => {
  const users = await getUsers();
  return users.some((user) => user.email === userName);
};

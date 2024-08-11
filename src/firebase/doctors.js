import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "./config.js";

export const addDoctor = async (doctor) => {
  const docRef = await setDoc(doc(collection(db, "doctors")), doctor);
  console.log("Document written with ID: ", docRef.id);
};

export const getDoctors = async () => {
  const doctors = [];
  const querySnapshot = await getDocs(collection(db, "doctors"));
  querySnapshot.forEach((doc) => {
    doctors.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log(doctors);
  return doctors;
};

export const getDoctor = async (id) => {
  const docRef = doc(db, "doctors", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const deleteDoctor = async (id) => {
  await deleteDoc(doc(db, "doctors", id));
  console.log("Document successfully deleted!");
};

export const updateDoctorDetails = async (id, doctor) => {
  await setDoc(doc(db, "doctors", id), doctor);
  console.log("Document successfully updated!");
};

export const checkIfCurrentUserIsDoctor = async (email) => {
    const doctors = await getDoctors();
    return doctors.some((doctor) => doctor.email === email);
};


import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "./config.js";

export const addResearch = async (research) => {
  const docRef = await setDoc(doc(collection(db, "researches")), research);
  // console.log("Document written with ID: ", docRef.id);
};

export const getResearches = async () => {
  const researches = [];
  const querySnapshot = await getDocs(collection(db, "researches"));
  querySnapshot.forEach((doc) => {
    researches.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log(researches);
  return researches;
};

export const getResearch = async (id) => {
  const docRef = doc(db, "researches", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const deleteResearch = async (id) => {
  await deleteDoc(doc(db, "researches", id));
  console.log("Document successfully deleted!");
};

export const updateResearchDetails = async (id, research) => {
  await setDoc(doc(db, "researches", id), research);
  console.log("Document successfully updated!");
};

export const addResearchComment = async (researchId, userId, comment) => {
  const docRef = doc(db, "researches", researchId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const research = docSnap.data();
    if (!research.comments) {
      research.comments = [];
    }
    research.comments.push({
      userId,
      comment,
    });
    await setDoc(doc(db, "researches", researchId), research);
    console.log("Comment added successfully!");
  } else {
    console.log("No such research document!");
  }

  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    const comments = userData.comments || [];
    comments.push(comment);

    await setDoc(userRef, { comments }, { merge: true });
    console.log("Reserved book added to user's reserved books list!");
  } else {
    console.log("User not found!");
  }
};

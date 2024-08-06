import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "./config.js";

// Get all books
export const getBooks = async () => {
  const books = [];
  const querySnapshot = await getDocs(collection(db, "books"));
  querySnapshot.forEach((doc) => {
    books.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return books;
};

export const getBook = async (id) => {
  const docRef = doc(db, "books", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const addBook = async (book) => {
  // Create a reference to the new document
  const docRef = doc(collection(db, "books"));

  // Set the document with the specified data
  await setDoc(docRef, book);

  // Log the document reference and its ID
  console.log("Document written with ID: ", docRef.id);
};

export const deleteBook = async (id) => {
  await deleteDoc(doc(db, "books", id));
  console.log("Document successfully deleted!");
};

export const updateBookDetails = async (id, book) => {
  await setDoc(doc(db, "books", id), book);
  console.log("Document successfully updated!");
};

export const reserveBook = async (
  id,
  { reservedFrom, reservedUntil },
  userId
) => {
  const book = await getBook(id);
  const updatedBook = {
    ...book,
    reservedFrom,
    reservedUntil,
    isReserved: true,
    reservationCount: book.reservationCount ? book.reservationCount + 1 : 1,
  };
  await updateBookDetails(id, updatedBook);
  console.log("Book successfully reserved!");

  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    const reservedBooks = userData.reservedBooks || [];
    reservedBooks.push(id);

    await setDoc(userRef, { reservedBooks }, { merge: true });
    console.log("Reserved book added to user's reserved books list!");
  } else {
    console.log("User not found!");
  }
};

export const returnBook = async (id, userId) => {
  const book = await getBook(id);
  const updatedBook = {
    ...book,
    reservedFrom: null,
    reservedUntil: null,
    isReserved: false,
    reservationCount: book.reservationCount ? book.reservationCount - 1 : 0,
  };
  await updateBookDetails(id, updatedBook);
  console.log("Book successfully returned!");

  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    const reservedBooks = userData.reservedBooks || [];
    const updatedReservedBooks = reservedBooks.filter(
      (bookId) => bookId !== id
    );

    await setDoc(
      userRef,
      { reservedBooks: updatedReservedBooks },
      { merge: true }
    );
    console.log("Reserved book removed from user's reserved books list!");
  } else {
    console.log("User not found!");
  }
};

export const likeBook = async (userId, bookId) => {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    const likedBooks = userData.likedBooks || [];
    likedBooks.push(bookId);

    await setDoc(userRef, { likedBooks }, { merge: true });
    console.log("Book liked successfully!");
  } else {
    console.log("User not found!");
  }
};

export const unlikeBook = async (userId, bookId) => {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    const likedBooks = userData.likedBooks || [];
    const updatedLikedBooks = likedBooks.filter((id) => id !== bookId);

    await setDoc(userRef, { likedBooks: updatedLikedBooks }, { merge: true });
    console.log("Book unliked successfully!");
  } else {
    console.log("User not found!");
  }
};

const calculateAverageRating = (ratings) => {
  const sum = ratings.reduce((total, rating) => total + rating, 0);
  const average = sum / ratings.length;
  return average;
};

export const rateBook = async (userId, bookId, rating) => {
  const bookRef = doc(db, "books", bookId);
  const bookSnap = await getDoc(bookRef);

  if (bookSnap.exists()) {
    const bookData = bookSnap.data();
    const ratings = bookData.ratings || [];
    ratings.push({ rating, userId });
    const averageRating = calculateAverageRating(ratings.map((r) => r.rating));

    const updatedBook = {
      ...bookData,
      ratings,
      averageRating,
    };

    await updateBookDetails(bookId, updatedBook);

    console.log("Book rated successfully!");
  } else {
    console.log("Book not found!");
  }
};

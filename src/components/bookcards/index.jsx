import React, { useEffect, useState } from "react";
import BookCard from "../bookcard";
import { getBooks } from "../../firebase/books";
function BookCards({ term, searchTerm, sortBy }) {
  const [filteredBooks, setBooks] = useState([]);
  const [books, setBooklist] = useState([]);

  useEffect(() => {
    (async () => {
      const books = await getBooks();
      setBooklist([...books]);
      setBooks([...books]);
    })();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setBooks([]);

      switch (term) {
        case "Author":
          const targetData = books.filter((book) =>
            book.author
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          );
          setBooks(targetData);
          break;
        case "Calling Code": {
          const targetData = books.filter((book) =>
            book.callingCode
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          );
          setBooks(targetData);
          break;
        }
        case "Book Name": {
          const targetData = books.filter((book) =>
            book.title
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          );
          setBooks(targetData);
          break;
        }
      }
    } else {
      setBooks(books);
    }

  }, [term, searchTerm]);


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        padding: "30px",
      }}
    >
      {filteredBooks.length > 0
        ? filteredBooks.map(
            ({
              title,
              author,
              id,
              reservedFrom,
              reservedUntil,
              averageRating,
              reservationCount,
            }) => (
              <BookCard
                reservationCount={reservationCount}
                rating={averageRating}
                title={title}
                author={author}
                id={id}
                reservedFrom={reservedFrom}
                reservedUntil={reservedUntil}
              />
            )
          )
        : null}
    </div>
  );
}

export default BookCards;

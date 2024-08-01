import React, { useEffect, useState } from "react";
import BookCard from "../bookcard";
import books from "../../books";
function BookCards({ term, searchTerm }) {
  const [filletedBooks, setBooks] = useState([...books]);
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
      {filletedBooks.length > 0
        ? filletedBooks.map(({ title, author,id}) => (
            <BookCard title={title} author={author}  id={id}/>
          ))
        : null}
    </div>
  );
}

export default BookCards;

import React from 'react';
import './UserProfile.css'; // Import CSS file for styling
import Header from "../../components/Header"
import './UserProfile.css'; // Import CSS file for styling
import { FaBook, FaThumbsUp } from 'react-icons/fa'; // Import icons from react-icons library

const UserProfile = ({ bookedBooks, likedBooks }) => {
  return (
    <>
    <Header/>
    <div className="user-profile">
      <h2>User Profile</h2>
      <section className="profile-section">
        <div className="section">
          <div className="section-header">
            <FaBook className="section-icon"  size="40px"/>
            <h3>Books Booked from Uni Library</h3>
          </div>
          {bookedBooks.length > 0 ? (
            <ul>
              {bookedBooks.map((book) => (
                <li key={book.id}>
                  <strong>{book.title}</strong> by {book.author}
                </li>
              ))}
            </ul>
          ) : (
            <p>No books booked yet.</p>
          )}
        </div>
        <div className="section">
          <div className="section-header">
            <FaThumbsUp className="section-icon"  size="40px" />
            <h3>Books Liked</h3>
          </div>
          {likedBooks.length > 0 ? (
            <ul>
              {likedBooks.map((book) => (
                <li key={book.id}>
                  <strong>{book.title}</strong> by {book.author}
                </li>
              ))}
            </ul>
          ) : (
            <p>No books liked yet.</p>
          )}
        </div>
      </section>
    </div>
    </>
  );
};

export default UserProfile;

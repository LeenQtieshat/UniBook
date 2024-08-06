import React from "react";
import Home from "./screens/home";
import Research from "./screens/research";
import { Routes, Route } from "react-router-dom";
import Search from "./screens/search";
import "./App.css";
import NewPost from "./screens/newPost";
import ResearchDetails from "./components/researchDetails"
import BookReservation from "./screens/bookBook";
import Profile from "../src/screens/profile"
import Success from "../src/screens/success"
const App = () => {
  
  return (
    <>
      <Routes>
    
        <Route path="/research" element={<Research />} />
        <Route path="/booklist" element={<Search />} />
        <Route path="/research-proposal" element={<NewPost />} />
        <Route path="/research/:researchId" element={<ResearchDetails />} />
        <Route path="/success-page" element={<Success />} />

        <Route path="/booklist/book/:bookId" element={<BookReservation />} />
        <Route path="/profile" element={<Profile  bookedBooks={[  {
    verticalCode: "BUF34285",
    title: "الظواهر الفلكية والجوية في القرآن الكريم / رفيق جميل شاكر الخانجي.",
    author: "الخانجي، رفيق جميل شاكر،",
    callingCode: "227.5 خان",
    publishDate: "2002",
  },
  {
    verticalCode: "BUF34286",
    title:
      "آيات الساعة العظمى : يأجوج ومأجوج-المسيح الدجال-الدابة / تأليف عصام يوسف.",
    author: "يوسف، عصام.",
    callingCode: "214.3 يوس",
    publishDate: "2014",
  },]} likedBooks={[  {
    verticalCode: "BUF34285",
    title: "الظواهر الفلكية والجوية في القرآن الكريم / رفيق جميل شاكر الخانجي.",
    author: "الخانجي، رفيق جميل شاكر،",
    callingCode: "227.5 خان",
    publishDate: "2002",
  },
  {
    verticalCode: "BUF34286",
    title:
      "آيات الساعة العظمى : يأجوج ومأجوج-المسيح الدجال-الدابة / تأليف عصام يوسف.",
    author: "يوسف، عصام.",
    callingCode: "214.3 يوس",
    publishDate: "2014",
  },]} />} />
          <Route path="/" element={<Home />} />

      </Routes>
    </>
  );
};
export default App;

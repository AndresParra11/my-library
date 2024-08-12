import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";

const AppRouter = () => {
  const [books, setBooks] = useState([]);
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home books={books} setBooks={setBooks} />} />
            {/*             <Route
              path="/"
              element={<Home books={books} setBooks={setBooks} />}
            >
              <Route path="book/:title" element={<Details books={books} />} />
            </Route> */}
          </Route>
          {/*           <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

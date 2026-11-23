import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BooksLayout from "./components/BooksLayout/BooksLayout";
import ReadingLayout from "./components/ReadingLayout/ReadingLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/books" element={<BooksLayout />} />
        <Route path="/reading" element={<ReadingLayout />} />
      </Route>
    </Routes>
  );
}

export default App;
